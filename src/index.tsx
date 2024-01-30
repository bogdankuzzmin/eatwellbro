import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from '@contexts/theme/ThemeProvider';

import MainPage from '@pages/Main';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <MainPage />
    </ThemeProvider>
  </BrowserRouter>
);
