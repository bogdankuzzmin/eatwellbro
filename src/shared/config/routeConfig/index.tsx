import { RouteProps } from 'react-router-dom';

import { AboutPage } from '@pages/AboutPage';
import { MainPage } from '@pages/MainPage';

export enum AppRoutes {
  About = 'about',
  Main = 'main'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.Main]: '/',
  [AppRoutes.About]: '/about',
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
};