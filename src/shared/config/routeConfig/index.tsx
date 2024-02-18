import { RouteProps } from 'react-router-dom';

import { AboutPage } from '@pages/AboutPage';
import { MainPage } from '@pages/MainPage';
import { NotFoundPage } from '@pages/NotFoundPage';

export enum AppRoutes {
  About = 'about',
  Main = 'main',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.Main]: '/',
  [AppRoutes.About]: '/about',
  [AppRoutes.NOT_FOUND]: '*'
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.Main]: {
    element: <MainPage />,
    path: RoutePath.main,
  },
  [AppRoutes.About]: {
    element: <AboutPage />,
    path: RoutePath.about,
  },
  [AppRoutes.NOT_FOUND]: {
    element: <NotFoundPage />,
    path: RoutePath.not_found,
  },
};