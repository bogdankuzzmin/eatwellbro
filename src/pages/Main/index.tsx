import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Paths } from '../../utils/constants/routes';

const HomePage = lazy(() => import('../Home'));
const NotFoundPage = lazy(() => import('../NotFound'));

const MainPage = () => {
  return (
    <Suspense>
      <Routes>
        <Route path={Paths.root} element={<HomePage />}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default MainPage;