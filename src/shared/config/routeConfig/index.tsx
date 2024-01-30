import { RouteProps } from 'react-router-dom';

import MainPage from '@pages/MainPage/ui/MainPage';

export enum AppRoutes {
  Main = 'main',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.Main]: '/',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.Main]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
};