import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const MainPage = lazy(() => import('@pages/MainPage/ui/MainPage'));
const NotFoundPage = lazy(() => import('@pages/NotFoundPage/ui/NotFoundPage'));

import { useTheme } from '@app/providers/ThemeProvider';
import { Paths } from '@utils/constants/routes';
import classNames from '@utils/classNames';
import '@app/styles/index.scss';

const App = () => {
  const {theme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense>
        <Routes>
          <Route path={Paths.root} element={<MainPage />}/>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;