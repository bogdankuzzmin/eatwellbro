import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export const buildResolvers = ({paths}: BuildOptions): ResolveOptions => ({
  alias: {
    '@pages': `${paths.src}/pages`,
    '@theme': `${paths.src}/theme`,
    '@utils': `${paths.src}/utils`,
  },
  extensions: ['.tsx', '.ts', '.js'],
});