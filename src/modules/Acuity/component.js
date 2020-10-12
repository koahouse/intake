import React, {
  Fragment,
  useEffect,
  useState,
  useRef,
  useCallback,
} from 'react';
import getClassNames from 'classnames';

import { useIsMobile } from '../../utils';
import { useLanguageCode, useStrings, getInterpolatedString } from '../I18n';
import { Button, Paragraph } from '../ui';

import { getSrc } from './utils/getSrc';
import styles from './styles.module.css';

const isIndividual = true;

export const Component = ({ onSubmit, responseId, paymentInformation }) => {
  const isMobile = useIsMobile();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(true);
  const isFinishedTimeout = useRef(null);
  const strings = useStrings();
  const languageCode = useLanguageCode();

  const handleMessage = useCallback(
    (event) => {
      if (!event || !event.data || !event.origin.includes('acuity')) return;

      if (isFinishedTimeout.current)
        window.clearTimeout(isFinishedTimeout.current);

      if (event.data.includes('sizing')) setIsLoaded(true);

      if (event.data.includes('acuity-appointment-scheduled')) {
        setIsSubmitted(true);
        !isMobile && onSubmit();
      }
    },
    [isMobile, onSubmit]
  );

  useEffect(() => {
    window.addEventListener('message', handleMessage);

    return () => window.removeEventListener('message', handleMessage);
  }, [handleMessage, isMobile]);

  return (
    <div
      className={getClassNames(styles.container, {
        [styles.visible]: isLoaded,
      })}
      id="acuity-container"
    >
      {isIndividual !== null && responseId && paymentInformation && (
        <Fragment>
          <iframe
            src={getSrc(
              languageCode,
              responseId,
              isIndividual,
              paymentInformation
            )}
            title="booking-form"
          />
          <div
            className={getClassNames(styles.confirmationContainer, {
              [styles.visible]: isSubmitted,
            })}
          >
            <Paragraph>{strings.ALL_DONE}</Paragraph>
            <Paragraph>
              {getInterpolatedString(
                strings.WE_SENT_AN_EMAIL_TO,
                paymentInformation.email
              )}
            </Paragraph>
            {isMobile && (
              <Button onClick={onSubmit}>{strings.WHAT_HAPPENS_NOW}</Button>
            )}
          </div>
        </Fragment>
      )}
    </div>
  );
};

Component.displayName = 'Acuity';
