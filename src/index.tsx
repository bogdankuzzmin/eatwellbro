import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import MainPage from '@pages/Main';
import '@styles/global.scss';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <MainPage />
  </BrowserRouter>
);
