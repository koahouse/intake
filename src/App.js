import React, { useState } from 'react';

import {
  BackButtonDisabler,
  CloseWindowWarner,
  Form,
  Hero,
  I18nProvider,
  Viewport,
} from './modules';

const App = () => {
  const [step, setStep] = useState(0);

  return (
    <I18nProvider>
      <BackButtonDisabler />
      <CloseWindowWarner />
      <Viewport>
        <Hero step={step} />
        <Form setStep={setStep} step={step} />
      </Viewport>
    </I18nProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
