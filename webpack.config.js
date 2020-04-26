const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webapck = require('webpack')

module.exports = {
    entry:{
        app:'./src/main.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].bundle.js'
    },
    devtool:'inline-source-map',
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:'babel-loader'
            },
            {
                test:/\.css/,
                use:[MiniCssExtractPlugin.loader,'css-loader']
            }
        ]
    },
    devServer:{
        hot:true,
        contentBase:'./dist'
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({title:'react hooks',template:'./src/templates/index.html'}),
        new webapck.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({filename:'[name].css'})
    ]
}