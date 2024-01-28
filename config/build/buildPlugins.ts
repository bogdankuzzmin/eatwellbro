import { WebpackPluginInstance, ProgressPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from './types/config';

export const buildPlugins = ({ paths }: BuildOptions): WebpackPluginInstance[] => ([
  new HtmlWebpackPlugin({
    template: paths.html,
  }),
  new ProgressPlugin(),
]);