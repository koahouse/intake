import React, { useState, useEffect } from 'react';

import { useIsMobile } from '../../utils';
import { Acuity } from '../Acuity';
import { PrepaymentMessage } from '../PrepaymentMessage';
import { SplashMessage } from '../SplashMessage';
import { Stripe } from '../Stripe';
import { SurveySparrow } from '../SurveySparrow';
import { Thanks } from '../Thanks';
import {
  useTracking,
  INTAKE_FORM_COMPLETE,
  PAYMENT_COMPLETE,
  BOOKING_COMPLETE,
} from '../tracking';
import { usePrice } from '../Pricing';

import { Pane } from './Pane';
import styles from './styles.module.css';

const VISIBILE_STEPS = [2, 4, 5, 6];

export const Component = ({ step, setStep }) => {
  const isMobile = useIsMobile();

  const [responseId, setResponseId] = useState(null);
  const [isIndividual, setIsIndividual] = useState(null);
  const [paymentInformation, setPaymentInformation] = useState(null);

  const [isContainerVisible, setIsContainerVisible] = useState(!isMobile);

  const price = usePrice();
  const triggerEvent = useTracking();

  useEffect(() => {
    window.requestAnimationFrame(() =>
      setIsContainerVisible(!isMobile || VISIBILE_STEPS.includes(step))
    );
  }, [isMobile, step]);

  const handleFinishSplashScreen = () => {
    setStep(2);
  };

  const handleSubmitSurveySparrow = (responseId, isIndividual) => {
    setStep(3);
    setResponseId(responseId);
    setIsIndividual(isIndividual);
    triggerEvent(INTAKE_FORM_COMPLETE);
  };

  const handleFinishPrepaymentMessage = () => {
    setStep(4);
  };

  const handleFinishStripe = (paymentInformation) => {
    setStep(5);
    setPaymentInformation(paymentInformation);
    const [currencySymbol, ...rest] = price;

    triggerEvent(PAYMENT_COMPLETE, {
      value: Number(rest.join('')),
      currency: currencySymbol,
    });
  };

  const handleFinishThanks = () => {
    setStep(6);
  };

  const handleSubmitAcuity = () => {
    setStep(7);
    triggerEvent(BOOKING_COMPLETE);
  };

  return (
    <div
      className={`${styles.container} ${
        isContainerVisible ? styles.visible : ''
      }`}
    >
      {!isMobile && (
        <Pane showOnStep={0} step={step}>
          <SplashMessage onFinish={handleFinishSplashScreen} />
        </Pane>
      )}
      <Pane showOnStep={2} step={step}>
        <SurveySparrow onSubmit={handleSubmitSurveySparrow} />
      </Pane>
      {!isMobile && (
        <Pane showOnStep={3} step={step}>
          <PrepaymentMessage onFinish={handleFinishPrepaymentMessage} />
        </Pane>
      )}
      <Pane showOnStep={4} step={step}>
        <Stripe onFinish={handleFinishStripe} />
      </Pane>
      <Pane showOnStep={5} step={step}>
        <Thanks onFinish={handleFinishThanks} />
      </Pane>
      <Pane shouldRemainShowing showOnStep={6} step={step}>
        <Acuity
          isIndividual={isIndividual}
          onSubmit={handleSubmitAcuity}
          paymentInformation={paymentInformation}
          responseId={responseId}
        />
      </Pane>
    </div>
  );
};

Component.displayName = 'Form';
