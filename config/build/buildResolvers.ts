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
  preferAbsolute: true,
  mainFiles: ['index'],
  extensions: ['.tsx', '.ts', '.js'],
  modules: [paths.src, 'node_modules'],
});