const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    module:{
        rules:[
           
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader","sass-loader"]
            },
            {
                test: /\.(gif|png|jpg)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                    esModule: false,
                      name: 'name].[ext]',
                      outputPath: 'assets/images'
                    }
                  }
                ]
              },
        
              {
                test:/\.html$/,
                use: [
                  'html-loader'
                ]
              },
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