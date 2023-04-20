// parcel.config.js
// parcel.config.js
module.exports = {
    // ...otras configuraciones de Parcel
    entry: {
      main: './src/index.html', // Archivo de inicio (home)
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
  };
  