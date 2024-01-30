import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Paths } from '@shared/config/routes';

const MainPage = lazy(() => import('@pages/MainPage/ui/MainPage'));
const NotFoundPage = lazy(() => import('@pages/NotFoundPage/ui/NotFoundPage'));

const AppRouter = () => {
  return (
    <Suspense>
      <Routes>
        <Route path={Paths.root} element={<MainPage />}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;