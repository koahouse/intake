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

// <button
//   onClick={() => setStep(step + 1)}
//   style={{ position: 'fixed', zIndex: 1000 }}
// >
//   Step +
// </button>
// <button
//   onClick={() => setStep(step - 1)}
//   style={{ left: 60, position: 'fixed', zIndex: 1000 }}
// >
//   Step -
// </button>

const App = () => {
  const isMobile = useIsMobile();
  const [step, setStep] = useState(0);

  return (
    <I18nProvider>
      <PricingProvider>
        <MinimumHeightWarner />
        <BackButtonDisabler />
        <CloseWindowWarner step={step} />
        <Viewport isVisible={isMobile !== null}>
          <Hero setStep={setStep} step={step} />
          <Form setStep={setStep} step={step} />
        </Viewport>
      </PricingProvider>
    </I18nProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
