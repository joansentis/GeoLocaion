var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ["./app/index.js", './app/styles/main.scss'],
    output: {
        filename: "dist/bundle.js"
    },
    module: {
        loaders: [{ 
            test: /\.js$/, 
            exclude: /node_modules/, 
            loader: "babel-loader" 
        }]
    },
    module:{
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "eslint-loader"
        }]
    },
    module: {
        rules: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({loader: 'css-loader?importLoaders=1'})
        },{
            test: /\.(sass|scss)$/,
            loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
        }]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'dist/bundle.css',
            allChunks: true
        })
    ]
};