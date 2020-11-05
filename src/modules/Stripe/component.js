import React from 'react';
import { Stripe } from '@olivahouse/stripe';
import '@olivahouse/stripe/lib/styles.css';

import { usePack, usePriceComponent, usePricing } from '../Pricing';
import { useLanguageCode, useStrings } from '../I18n';

import { getChargeStatement } from './utils/getChargeStatement';
import { STRIPE_PUBLIC_KEY } from './constants';

export const Component = ({ onFinish }) => {
  const strings = useStrings();
  const languageCode = useLanguageCode();

  const pack = usePack();
  const Price = usePriceComponent();
  const { couponId, priceId } = usePricing();

  return (
    <Stripe
      couponId={couponId}
      languageCode={languageCode}
      onFinish={onFinish}
      pack={pack}
      priceId={priceId}
      renderChargeDescription={() => getChargeStatement(strings, Price, pack)}
      strings={strings}
      stripePublicKey={STRIPE_PUBLIC_KEY}
    />
  );
};

Component.displayName = 'Stripe';
