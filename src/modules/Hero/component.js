import React, {
  Fragment,
  useEffect,
  useState,
  useRef,
  useCallback,
} from 'react';
import debounce from 'lodash.debounce';
import { Button, Subheading, Bullets } from '@olivahouse/ui';

import {
  useStrings,
  getInterpolatedString,
  getPluralisedString,
} from '../I18n';
import { useIsMobile } from '../../utils';
import { Boat } from '../Boat';
import { Sea } from '../Sea';
import { ThreeSteps } from '../ThreeSteps';
import { useExpiry, useIsFoundingMember } from '../Pricing';

import { getIllustrationStep } from './utils/getIllustrationStep';
import { getContentStep } from './utils/getContentStep';
import styles from './styles.module.css';

export const Component = ({ setStep, step }) => {
  const strings = useStrings();
  const isMobile = useIsMobile();
  const [contentOpacity, setContentOpacity] = useState(1);
  const [contentStep, setContentStep] = useState(0);
  const [containerWidth, setContainerWidth] = useState(null);
  const ref = useRef(null);
  const illustrationStep = getIllustrationStep(step);
  const expiry = useExpiry();
  const isFoundingMember = useIsFoundingMember();

  const handleResize = useCallback(
    debounce(() => {
      setContainerWidth(ref.current.offsetWidth);
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  useEffect(() => {
    if (!ref.current) return;

    setContainerWidth(ref.current.offsetWidth);
  }, []);

  useEffect(() => {
    const nextContentStep = getContentStep(step, isMobile);

    if (contentStep === nextContentStep) {
      return;
    }

    if (step !== 0) {
      window.requestAnimationFrame(() => setContentOpacity(0));
    }
    window.setTimeout(() => {
      window.requestAnimationFrame(() => {
        setContentOpacity(1);
        setContentStep(nextContentStep);
      });
    }, 600);
  }, [step, isMobile]);

  return (
    <div className={styles.container} ref={ref}>
      <Sea containerWidth={containerWidth} step={illustrationStep} />
      <Boat step={illustrationStep} />
      <div className={styles.mask} />
      {!isMobile && <h1 className={styles.logo}>Oliva</h1>}
      <div className={styles.content} style={{ opacity: contentOpacity }}>
        <h2 className={styles.heading}>
          {
            [
              `${isFoundingMember ? strings.HEY_FOUNDING_MEMBER : ''} ${
                strings.WELCOME
              }`,
              strings.UNDERSTANDING_STARTS_WITH,
              '',
              strings.THATS_THE_HARD_PART,
              '',
              '',
              strings.YOUVE_TAKEN_YOUR_FIRST,
            ][contentStep]
          }
        </h2>
        <Subheading>
          {
            [
              '',
              strings.TALKING_ABOUT_PERSONAL_STUFF,
              '',
              strings.NOW_ALL_YOU_HAVE_TO_DO,
              '',
              '',
              strings.THATS_EVERYTHING_WE_NEED,
            ][contentStep]
          }
        </Subheading>
        {contentStep === 0 && (
          <Fragment>
            <Subheading>{strings.IN_THE_NEXT_TEN_MINUTES}</Subheading>
            <ThreeSteps />
            {isMobile && (
              <Button onClick={() => setStep(1)}>{strings.OK}</Button>
            )}
          </Fragment>
        )}
        {contentStep === 1 && isMobile && (
          <Button onClick={() => setStep(2)}>{strings.GET_STARTED}</Button>
        )}
        {contentStep === 3 && (
          <Fragment>
            <Bullets
              items={[
                getInterpolatedString(
                  strings.TO_USE_YOUR_SESSIONS,
                  expiry,
                  getPluralisedString(expiry, strings.MONTH, strings.MONTHS)
                ),
                strings.SAFE_AND_SECURE_PAYMENT,
                strings.GUARANTEED_THERAPIST_MATCH,
              ]}
            />
            {isMobile && (
              <Button onClick={() => setStep(4)}>{strings.PAY_AND_PICK}</Button>
            )}
          </Fragment>
        )}
        {contentStep === 6 && (
          <React.Fragment>
            <Subheading>{strings.WELL_BE_IN_TOUCH_TO_REMIND}</Subheading>
            <Subheading>
              {strings.IN_THE_MEANTIME_YOU_CAN}{' '}
              <a href="https://www.instagram.com/mind.chronicles/">
                {strings.READ_THERAPY_STORIES}
              </a>
              .
            </Subheading>
            <div style={{ height: 100 }}></div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

Component.displayName = 'Hero';
