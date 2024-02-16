import { ResolveOptions } from 'webpack';

import { BuildOptions } from './types/config';

export const buildResolvers = ({paths}: BuildOptions): ResolveOptions => ({
  alias: {
    '@app': `${paths.src}/app`,
    '@entities': `${paths.src}/entities`,
    '@features': `${paths.src}/features`,
    '@helpers': `${paths.src}/helpers`,
    '@pages': `${paths.src}/pages`,
    '@shared': `${paths.src}/shared`,
    '@widgets': `${paths.src}/widgets`,
  },
  extensions: ['.tsx', '.ts', '.js'],
  mainFiles: ['index'],
  modules: [paths.src, 'node_modules'],
  preferAbsolute: true,
});