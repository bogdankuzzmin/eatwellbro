import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export const buildResolvers = ({paths}: BuildOptions): ResolveOptions => ({
  alias: {
    '@contexts': `${paths.src}/contexts`,
    '@hooks': `${paths.src}/hooks`,
    '@pages': `${paths.src}/pages`,
    '@styles': `${paths.src}/styles`,
    '@utils': `${paths.src}/utils`,
  },
  extensions: ['.tsx', '.ts', '.js'],
});