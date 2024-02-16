import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { HotModuleReplacementPlugin, ProgressPlugin,WebpackPluginInstance } from 'webpack';

import { BuildOptions } from './types/config';

export const buildPlugins = ({ paths }: BuildOptions): WebpackPluginInstance[] => ([
  new HtmlWebpackPlugin({
    template: paths.html,
  }),
  new ProgressPlugin(),
  new MiniCssExtractPlugin({
    chunkFilename: 'css/[name].[contenthash:8].css',
    filename: 'css/[name].[contenthash:8].css',
  }),
  new HotModuleReplacementPlugin(),
]);