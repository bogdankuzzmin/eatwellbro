import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import { BuildOptions } from './types/config';

export const buildDevServer = (options: BuildOptions): DevServerConfiguration => ({
  historyApiFallback: true,
  hot: true,
  open: false,
  port: options.port,
});