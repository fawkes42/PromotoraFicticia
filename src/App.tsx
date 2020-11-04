import React from 'react';

import GlobalStyle from './styles/global';

import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/index';

const App: React.FunctionComponent = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
