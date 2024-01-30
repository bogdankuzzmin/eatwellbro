import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '@shared/config/routeConfig';

import { NotFoundPage } from '@pages/NotFoundPage';

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