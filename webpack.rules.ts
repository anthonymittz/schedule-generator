import type { ModuleOptions } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

function rules(isDevMode: boolean): Required<ModuleOptions>['rules'] {
  return [
    {
      test: /\.tsx?$/,
      exclude: /(node_modules|\.webpack)/,
      use: {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        isDevMode ? MiniCssExtractPlugin.loader : 'style-loader', 
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[local]__[hash:hex:5]'
            }
          }
        },
        'sass-loader'
      ]
    },
    {
      test: /\.css$/i,
      use: [
        isDevMode ? MiniCssExtractPlugin.loader : 'style-loader', 
        'css-loader',
        'postcss-loader'
      ]
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
  ];
}

export default rules;
