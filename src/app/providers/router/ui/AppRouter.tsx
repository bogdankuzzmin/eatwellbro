import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '@shared/config/routeConfig';

const NotFoundPage = lazy(() => import('@pages/NotFoundPage/ui/NotFoundPage'));

const AppRouter = () => {
  return (
    <Suspense>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={element}
          />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;