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
              test: /\.(png|svg|jpg|gif|jpe?g)$/,
              use: [
                {
                  options: {
                    name: "[name].[ext]",
                    outputPath: "images/"
                  },
                  loader: "file-loader"
                }
              ]
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