import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { NotFoundPage } from '@pages/NotFoundPage';

import { routeConfig } from '@shared/config/routeConfig';

const AppRouter = () => {
  return (
    <Suspense>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            element={element}
            path={path}
          />
        ))}
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;