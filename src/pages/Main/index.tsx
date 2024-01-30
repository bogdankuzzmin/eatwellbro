import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../Home'));
const NotFoundPage = lazy(() => import('../NotFound'));

import useTheme from '@hooks/useTheme';
import { Paths } from '@utils/constants/routes';
import classNames from '@utils/classNames';
import '@styles/index.scss';

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