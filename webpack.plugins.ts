import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration, ProvidePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

function plugins(isDevMode: boolean) {
  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'template.html'),
      favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
    }),
    new ProvidePlugin({
      // join: path.resolve(path.join(__dirname, 'src', 'utility', 'join.js')),
    }),
    new MiniCssExtractPlugin(),
  ];
  return plugins;
}

export default plugins;