const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports={
    module:{
        rules:[
            {
                test:/\.js$/i,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader",
                },
            },
            {
                test: /\.html$/i,
                use:[
                    {
                    loader:"html-loader",
                    options:{
                        minimize:true,
                    },
                },
            ],
            },
            {
                test: /\.css$/i,
                use:[MiniCssExtractPlugin.loader,'css-loader',],
            },
            {
                test: /\.(jpe?g|png|gif|svg|webp)$/i,
                use: ["file-loader?name=assets/[name].[ext]"],
            },
        ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            //a cual archivo te tienes que referir para generarmeel final con este template
            template:"./src/index.html",
            //aqui es como quiero que se llame el archivo en la carpeta de distribucion
            filename:"./index.html",
            }
        ),
        new MiniCssExtractPlugin(),
    ],
};