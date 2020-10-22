import React, { useState } from 'react';

import {
  MinimumHeightWarner,
  BackButtonDisabler,
  CloseWindowWarner,
  Form,
  Hero,
  I18nProvider,
  Viewport,
  PricingProvider,
} from './modules';
import { useIsMobile } from './utils/useIsMobile';

// <div
//   style={{
//     background: 'lightgreen',
//     bottom: 0,
//     right: 0,
//     position: 'fixed',
//     textAlign: 'center',
//     zIndex: 1000,
//   }}
// >
//   <h1>{step}</h1>
//   <button onClick={() => setStepWithBounds(step + 1)}>Step +</button>
//   <button onClick={() => setStepWithBounds(step - 1)}>Step -</button>
// </div>

const App = () => {
  const isMobile = useIsMobile();
  // const [step, setStep] = useState(0);
  const [step, setStep] = useState(4);

  const setStepWithBounds = (nextStep) => {
    const boundedStep = Math.max(0, Math.min(7, nextStep));

    setStep(boundedStep);
  };

  return (
    <I18nProvider>
      <PricingProvider>
        <MinimumHeightWarner />
        <BackButtonDisabler />
        <CloseWindowWarner step={step} />
        <Viewport isVisible={isMobile !== null}>
          <div
            style={{
              background: 'lightgreen',
              bottom: 0,
              right: 0,
              position: 'fixed',
              textAlign: 'center',
              zIndex: 1000,
            }}
          >
            <h1>{step}</h1>
            <button onClick={() => setStepWithBounds(step + 1)}>Step +</button>
            <button onClick={() => setStepWithBounds(step - 1)}>Step -</button>
          </div>
          <Hero setStep={setStepWithBounds} step={step} />
          <Form setStep={setStepWithBounds} step={step} />
        </Viewport>
      </PricingProvider>
    </I18nProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
