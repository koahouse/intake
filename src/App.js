import React, { useState } from 'react';

import {
  BackButtonDisabler,
  Form,
  Hero,
  I18nProvider,
  Viewport,
} from './modules';

const App = () => {
  const [step, setStep] = useState(3);

  return (
    <I18nProvider>
      <BackButtonDisabler />
      <Viewport>
        <Hero step={step} />
        <Form setStep={setStep} step={step} />
      </Viewport>
    </I18nProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
