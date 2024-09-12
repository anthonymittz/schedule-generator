import * as webpack from 'webpack';
import * as webpackDevServer from 'webpack-dev-server';
import type { Configuration } from 'webpack';
import TerserWebpackPlugin from 'terser-webpack-plugin';
import rules from './webpack.rules';
import plugins from './webpack.plugins';
import path from 'path';

function config(env: any, argv: any): Configuration {
  return {
    entry: './src/index.tsx',
    module: { rules: rules(env) },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: plugins(argv.mode),
    resolve: {
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.scss', '.json'],
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserWebpackPlugin({
          extractComments: true,
        }),
      ],
    },
    devServer: {
      host: '0.0.0.0',
      port: 3000,
      liveReload: true,
      static: {
        directory: path.join(__dirname, 'public'),
      },
      historyApiFallback: true,
    }
  }
};

export default config;