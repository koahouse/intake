import React from 'react';

import {
  BackButtonDisabler,
  Form,
  Hero,
  I18nProvider,
  Viewport,
} from './modules';

const App = () => (
  <I18nProvider>
    <BackButtonDisabler />
    <Viewport>
      <Hero />
      <Form />
    </Viewport>
  </I18nProvider>
);

// eslint-disable-next-line import/no-default-export
export default App;
