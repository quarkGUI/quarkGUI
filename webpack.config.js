var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HTMLWebpackPlugin = require('html-webpack-plugin');

var DEVELOPMENT = process.env.NODE_ENV === 'development';
var PRODUCTION = process.env.NODE_ENV === 'production';

var entry = PRODUCTION
	?	[ './src/index.js' ]
	: 	[ 
			'./src/index.js',
			'webpack/hot/dev-server',
			'webpack-dev-server/client?http://localhost:8080'
		];

var plugins = PRODUCTION 
	? 	[
			new webpack.optimize.UglifyJsPlugin(),
			new ExtractTextPlugin('style-[contenthash:10].css'),
			new HTMLWebpackPlugin({
				template: 'index-template.html'
			})
		]
	: 	[ 
			new ExtractTextPlugin('styles.css'), 
			new webpack.HotModuleReplacementPlugin() 
		];

plugins.push(
	new webpack.DefinePlugin({
		DEVELOPMENT: JSON.stringify(DEVELOPMENT),
		PRODUCTION: JSON.stringify(PRODUCTION),
	})
);

const cssIdentifier = PRODUCTION ? '[hash:base64:10]' : '[path][name]---[local]';

const cssLoader = PRODUCTION
	?	ExtractTextPlugin.extract({
			loader: 'css-loader?localIdentName=' + cssIdentifier
		})
	: 	['style-loader', 'css-loader?localIdentName=' + cssIdentifier];

const sassLoader = PRODUCTION
	?	ExtractTextPlugin.extract({
			loader: 'css-loader!sass-loader?localIdentName=' + cssIdentifier
		})
	: 	['style-loader', 'css-loader?localIdentName=' + cssIdentifier, 'sass-loader'];

	/* loader: ExtractTextPlugin.extract('css-loader!sass-loader'), */

module.exports = {
	externals: {
		'jquery': 'jQuery'
	},
	devtool: 'source-map',
	entry: entry,
	plugins: plugins,
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['babel-loader'],
			exclude: '/node_modules/'
		}, {
			test: /\.(png|jpg|gif|svg)$/,
			loaders: ['url-loader?limit=10000&name=images/[ext]/[hash:12].[ext]'],
			exclude: '/node_modules/'
		}, {
			test: /\.css$/,
			loaders: cssLoader,
			exclude: '/node_modules/'
		}, {
			test: /\.scss$/,
			loader: sassLoader,
			exclude: '/node_modules/'
		}, { 
			test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
			loader: "url-loader?limit=10000&mimetype=application/font-woff" 
		}, { 
			test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
			loader: "file-loader" 
		}
    
		],

	},
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: PRODUCTION ? '/' : '/dist/',
		filename: PRODUCTION ? 'bundle.[hash:12].min.js' : 'bundle.js'
	}
};