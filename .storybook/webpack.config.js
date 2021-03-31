'use strict';

module.exports = ({config}) => {
  config.module.rules = [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    {
      test: /\.stories\.tsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/env',
              {
                'targets': {
                  'browsers': [
                    '>0.25%',
                    'not ie 11',
                    'not op_mini all',
                  ],
                },
              },
            ],
            '@babel/react',
            '@babel/typescript',
          ],
          plugins: [
            '@babel/proposal-class-properties',
            '@babel/proposal-object-rest-spread',
          ],
        },
      },
    },
    {
      test: /\.(scss|css)$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
    {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    },
    {
      test: /\.(woff(2)?|ttf|eot|jpg|jpeg|png)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }
      ]
    }
  ];
  config.resolve.extensions = ['.ts', '.tsx', '.js', '.css'];
  return config;
};
