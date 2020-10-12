import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { useLanguageCode } from '../I18n';

import { Form } from './Form';
import { ELEMENTS_OPTIONS, STRIPE_PUBLIC_KEY } from './constants';

export const Component = ({ onFinish }) => {
  const languageCode = useLanguageCode();
  const [stripe, setStripe] = useState(null);

  useEffect(
    () =>
      setStripe(
        loadStripe(STRIPE_PUBLIC_KEY, {
          locale: languageCode,
        })
      ),
    [languageCode]
  );

  return (
    stripe && (
      <Elements options={ELEMENTS_OPTIONS} stripe={stripe}>
        <Form onFinish={onFinish} />
      </Elements>
    )
  );
};

Component.displayName = 'Stripe';
