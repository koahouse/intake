import React, { Fragment, useState } from 'react';
import { Paragraph, Button } from '@olivahouse/ui';
import { validate } from 'isemail';
import fetchJsonp from 'fetch-jsonp';

import { useStrings, useLanguageCode } from '../I18n';
import { usePricing } from '../Pricing';

import styles from './styles.module.css';

export const Component = () => {
  const [emailValue, setEmailValue] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const languageCode = useLanguageCode();
  const { currencyCode, currencySymbol, pack, price } = usePricing();

  const strings = useStrings();

  const handleChange = ({ target: { value } }) => {
    setEmailError('');
    setEmailValue(value);
  };

  const handleSubmit = async () => {
    if (!emailValue) {
      setEmailError(strings.WE_NEED_YOUR_EMAIL);
      return;
    }

    const isValid = validate(emailValue);

    if (!isValid) {
      setEmailError(strings.YOUR_EMAIL_DOESNT_LOOK_RIGHT);
      return;
    }

    setIsLoading(true);

    await fetchJsonp(
      `https://house.us10.list-manage.com/subscribe/post-json?u=dbf347e9af099367f9ef8e159&id=e7574a7b60&EMAIL=${emailValue}`,
      { jsonpCallback: 'c' }
    );

    setIsSubmitted(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.logo}>Oliva</h1>
        {isSubmitted ? (
          <Fragment>
            <Paragraph>{strings.THANKS}</Paragraph>
            <Paragraph>
              {strings.WELL_BE_IN_TOUCH_WHEN_A_SPACE_OPENS_UP}
            </Paragraph>
            <Paragraph>
              {strings.IN_THE_MEANTIME_YOU_CAN}{' '}
              <a href="https://www.instagram.com/mind.chronicles/">
                {strings.READ_THERAPY_STORIES}
              </a>
              .
            </Paragraph>
          </Fragment>
        ) : (
          <Fragment>
            <Paragraph>{strings.WE_CURRENTLY_HAVE_NO_SPACE}</Paragraph>
            <Paragraph>{strings.PLEASE_SIGN_UP_TO_OUR_WAITING_LIST}</Paragraph>
            <div className={styles.error}>
              <Paragraph>{emailError}</Paragraph>
            </div>
            <input
              onChange={handleChange}
              placeholder="Email"
              type="text"
              value={emailValue}
            />
            <Button
              isDisabled={!!emailError}
              isLoading={isLoading}
              onClick={handleSubmit}
            >
              {strings.SIGN_UP}
            </Button>
          </Fragment>
        )}
      </div>
    </div>
  );
};

Component.displayName = 'CloseWindowWarner';
