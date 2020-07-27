import React from 'react';

import { Form, Hero, I18nProvider, Viewport } from './modules';

const App = () => (
  <I18nProvider>
    <Viewport>
      <Hero />
      <Form />
    </Viewport>
  </I18nProvider>
);

// eslint-disable-next-line import/no-default-export
export default App;
