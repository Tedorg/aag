const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: 'development',
    module:{
        rules:[
           
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader","sass-loader"]
            },
            {
            
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      mozjpeg: {
                        progressive: true,
                      },
                      // optipng.enabled: false will disable optipng
                      optipng: {
                        enabled: true,
                      },
                      pngquant: {
                        quality: [0.25, 0.40],
                        speed: 4
                      },
                      gifsicle: {
                        interlaced: false,
                      },
                      // the webp option will enable WEBP
                      webp: {
                        enabled: true,
                        quality: 75
                      }
                    }
                  },
                ],
              
            },
        
              // {
              //   test:/\.html$/,
              //   use: [
              //     'html-loader'
              //   ]
              // },
            {
                test: /\.js&/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
           
        ]},
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './src/index.html',
            filename: 'index.html',
          })
    ]
};