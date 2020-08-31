import React, { useState } from 'react';

import {
  MinimumHeightWarner,
  BackButtonDisabler,
  CloseWindowWarner,
  Form,
  Hero,
  I18nProvider,
  Viewport,
} from './modules';

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
  const [step, setStep] = useState(0);

  return (
    <I18nProvider>
      <MinimumHeightWarner />
      <BackButtonDisabler />
      <CloseWindowWarner step={step} />
      <Viewport>
        <Hero setStep={setStep} step={step} />
        <Form setStep={setStep} step={step} />
      </Viewport>
    </I18nProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
