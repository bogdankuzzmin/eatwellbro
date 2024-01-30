import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('@pages/Home'));
const NotFoundPage = lazy(() => import('@pages/NotFound'));

import { useTheme } from '@app/providers/ThemeProvider';
import { Paths } from '@utils/constants/routes';
import classNames from '@utils/classNames';
import '@app/styles/index.scss';

const MainPage = () => {
  const {theme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense>
        <Routes>
          <Route path={Paths.root} element={<HomePage />}/>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default MainPage;