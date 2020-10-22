import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import getClassNames from 'classnames';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import { useLanguageCode, useStrings, getInterpolatedString } from '../../I18n';
import { Button, Paragraph, SmallPrint } from '../../ui';
import { usePrice, usePack, useIsFoundingMember, useIsAM } from '../../Pricing';

import { CARD_STYLE } from './constants';
import { getClientSecret } from './utils/getClientSecret';
import { getValidationSchema } from './utils/getValidationSchema';
import { getHost } from './utils/getHost';
import styles from './styles.module.css';

export const Component = ({ onFinish }) => {
  const strings = useStrings();

  const pack = usePack();
  const languageCode = useLanguageCode();
  const price = usePrice();
  const isFoundingMember = useIsFoundingMember();
  const isAM = useIsAM();

  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');

  const [validationSchema, setValidationSchema] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const [isCardFocussed, setIsCardFocussed] = useState(false);
  const [isCardTouched, setIsCardTouched] = useState(false);
  const [cardError, setCardError] = useState(null);

  useEffect(() => {
    // const asyncSetClientSecret = async () => {
    //   setClientSecret(
    //     await getClientSecret(pack, isFoundingMember, isAM, languageCode)
    //   );
    // };
    //
    // asyncSetClientSecret();

    setValidationSchema(getValidationSchema(strings));
  }, []);

  const handleCardFocus = () => setIsCardFocussed(true);
  const handleCardBlur = () => setIsCardFocussed(false);
  const handleCardChange = (event) => {
    setIsCardTouched(true);
    setCardError(
      event.empty
        ? strings.WE_NEED_YOUR_CARD_DETAILS
        : event.error
        ? event.error.message
        : null
    );
  };

  const handleAttemptSubmit = () =>
    !isCardTouched && setCardError(strings.WE_NEED_YOUR_CARD_DETAILS);

  const handleSubmit = async ({
    firstName,
    lastName,
    email,
    phone,
    legal,
    communications,
  }) => {
    // setIsProcessing(true);
    // const result = await stripe.confirmCardPayment(clientSecret, {
    //   payment_method: {
    //     card: elements.getElement(CardElement),
    //     billing_details: {
    //       email,
    //       name: `${firstName} ${lastName}`,
    //       phone,
    //     },
    //     metadata: {
    //       legal: JSON.stringify(legal),
    //       communications: JSON.stringify(communications),
    //     },
    //   },
    // });
    //
    // if (result.error) {
    //   setCardError(result.error.message);
    //   setIsProcessing(false);
    //   return;
    // }
    //
    // setCardError(null);
    //
    // const { certificate } = await window
    //   .fetch(
    //     'https://mrazu50nsj.execute-api.us-east-1.amazonaws.com/dev/createPackCertificate',
    //     {
    //       method: 'POST',
    //       body: JSON.stringify({
    //         email,
    //         languageCode,
    //         pack,
    //         paymentIntentId: result.paymentIntent.id,
    //       }),
    //     }
    //   )
    //   .then((response) => response.json());
    //
    // onFinish({ firstName, lastName, email, phone, certificate });
  };

  return (
    <div className={styles.container}>
      <Paragraph>
        {getInterpolatedString(strings.YOU_WILL_BE_CHARGED, price, pack)}
      </Paragraph>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          legal: false,
          communications: false,
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ errors, touched, ...rest }) => {
          const touchedErrors = Object.entries(errors).reduce(
            (accumulator, [key, value]) =>
              touched[key]
                ? {
                    ...accumulator,
                    [key]: value,
                  }
                : accumulator,
            {}
          );

          const errorsToDisplay = [
            ...Object.values(touchedErrors),
            cardError,
          ].filter(Boolean);

          return (
            <Form>
              <div className={styles.inputGroup}>
                <Field
                  className={getClassNames({
                    [styles.isError]: touchedErrors.firstName,
                  })}
                  name="firstName"
                  placeholder={strings.FIRST_NAME}
                  type="text"
                />
                <Field
                  className={getClassNames({
                    [styles.isError]: touchedErrors.lastName,
                  })}
                  name="lastName"
                  placeholder={strings.LAST_NAME}
                  type="text"
                />
              </div>
              <Field
                className={getClassNames({
                  [styles.isError]: touchedErrors.email,
                })}
                name="email"
                placeholder="Email"
                type="email"
              />
              <PhoneInput
                className={getClassNames(styles.phoneInput)}
                defaultCountry="ES"
                name="phone"
                onChange={(value = '') => rest.handleChange('phone')(value)}
                placeholder={strings.MOBILE_NUMBER}
              />
              <CardElement
                className={getClassNames(styles.cardElement, {
                  [styles.isFocussed]: isCardFocussed,
                  [styles.isError]: !!cardError,
                })}
                onBlur={handleCardBlur}
                onChange={handleCardChange}
                onFocus={handleCardFocus}
                options={CARD_STYLE}
              />
              <label
                className={getClassNames({
                  [styles.isError]: touchedErrors.legal,
                })}
              >
                <Field name="legal" type="checkbox" />
                <SmallPrint>
                  {strings.I_AGREE_TO_THE}{' '}
                  <a
                    href={`${getHost(languageCode)}terms-of-service`}
                    target="_blank"
                  >
                    {strings.TERMS_OF_USE}
                  </a>{' '}
                  {strings.AND}{' '}
                  <a
                    href={`${getHost(languageCode)}privacy-policy`}
                    target="_blank"
                  >
                    {strings.PRIVACY_POLICY}
                  </a>
                </SmallPrint>
              </label>
              <label>
                <Field name="communications" type="checkbox" />
                <SmallPrint>{strings.PLEASE_SEND_ME_NEWS}</SmallPrint>
              </label>
              <Button
                isCompact
                isDisabled={!!errorsToDisplay.length}
                isLoading={isProcessing}
                onClick={handleAttemptSubmit}
              >
                {strings.PAY}
              </Button>
              <div className={styles.errorContainer}>
                {!!errorsToDisplay.length ? <p>{errorsToDisplay[0]}</p> : ''}
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

Component.displayName = 'Form';
