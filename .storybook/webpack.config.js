const path = require('path');

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../')
  });
  config.module.rules.push({
    test: /\.(less)$/,
    use: [
      {
        loader: 'style-loader' // creates style nodes from JS strings
      },
      {
        loader: 'css-loader' // translates CSS into CommonJS
      },
      {
        loader: 'less-loader', // compiles Less to CSS
        options: {
          javascriptEnabled: true
        }
      }
    ]
  });
  config.resolve.alias = {
    ...config.resolve.alias,
    Assets: path.resolve(__dirname, '../src/Assets/'),
    Components: path.resolve(__dirname, '../src/Components/'),
    Hoc: path.resolve(__dirname, '../src/Hoc/'),
    Utils: path.resolve(__dirname, '../src/Utils/'),
    config: path.resolve(__dirname, '../src/config/')
  };
  return config;
};
