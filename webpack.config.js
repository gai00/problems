const path = require('path');

module.exports = {
  mode: 'development',
  target: 'web',
  context: path.join(__dirname, 'assets'),
  entry: {
    main: './main'
  },
  output: {
    libraryTarget: 'this',
    filename: 'js/[name].js',
    chunkFilename: 'js/[id].chunk.js',
    
    path: path.join(__dirname, 'public'),
    publicPath: '/js',
    sourceMapFilename: 'js/[file].map',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.less'],
    modules: ['./'],
    alias: {
      components: 'components',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              
            ],
          }
        }
      },
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      // {
      //   test: /\.(css|less)$/,
      //   use: extractLess.extract({
      //     use: [{
      //         loader: "css-loader"
      //     }, {
      //         loader: "less-loader"
      //     }],
      //     // use style-loader in development
      //     fallback: "style-loader"
      //   })
      // },
    ]
  },
  plugins: [
    // extractLess
  ],
  externals: {
    // "react": "React",
    // "react-dom": "ReactDOM",
    // "rxjs": "Rx",
  }
};
