var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HTMLWebpackPlugin = require('html-webpack-plugin');


var DEVELOPMENT = process.env.NODE_ENV === 'development';
var PRODUCTION  = process.env.NODE_ENV === 'production';
var DOCS        = process.env.NODE_ENV === 'docs';

var outputPath = DOCS ? 'docs' : 'dist';
var ouputPublicPath = DOCS ? '/Simple-GUI-Template/' : '/';
var cssFileName = PRODUCTION ? 'style-[contenthash:10].css' : 'styles.css';
var scriptFileName = PRODUCTION ? 'bundle.[hash:12].min.js' : 'bundle.js';

var entry = PRODUCTION || DOCS
	?	[ './src/index.js' ]
	: 	[ 
			'./src/index.js',
			'webpack/hot/dev-server',
			'webpack-dev-server/client?http://localhost:8080'
		];


var plugins = PRODUCTION || DOCS
	? 	[
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false,
		      		unused: true,
		      		dead_code: true,
		      		drop_console: true,
		    	},
		    	output: {
		      		comments: false,
		    	}
		  	}),
			new ExtractTextPlugin('style/' + cssFileName),
			new HTMLWebpackPlugin({
				template: 'index-template.html'
			})
		]
	: 	[ 
			new ExtractTextPlugin(cssFileName), 
			new webpack.HotModuleReplacementPlugin() 
		];

plugins.push(
	new webpack.DefinePlugin({
		DEVELOPMENT: JSON.stringify(DEVELOPMENT),
		PRODUCTION: JSON.stringify(PRODUCTION),
		DOCS: JSON.stringify(DOCS),
	})
);

const cssIdentifier = PRODUCTION || DOCS ? '[hash:base64:10]' : '[path][name]---[local]';

const cssLoader = PRODUCTION || DOCS
	?	ExtractTextPlugin.extract({
			loader: 'css-loader?minimize!localIdentName=' + cssIdentifier
		})

	: 	['style-loader', 'css-loader?localIdentName=' + cssIdentifier];

const sassLoader = PRODUCTION || DOCS
	?	ExtractTextPlugin.extract({
			loader: 'css-loader?minimize!sass-loader?localIdentName=' + cssIdentifier
		})
	: 	['style-loader', 'css-loader?localIdentName=' + cssIdentifier, 'sass-loader'];

module.exports = {
	devtool: 'source-map',
	entry: entry,
	plugins: plugins,
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['babel-loader'],
			exclude: '/node_modules/'
		}, {
			test: /\.(png|jpg|gif)$/,
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
			loader: "url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[hash:12].[ext]" 
		}, { 
			test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
			loader: "file-loader?name=fonts/[hash:12].[ext]" 
		}, { 
			test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
			loader: "svg-url-loader?noquotes&limit=1024&prefix=svg/[hash:12].[ext]"
		}
    
		],

	},
	output: {
		path: path.join(__dirname, outputPath),
		publicPath: PRODUCTION || DOCS ? ouputPublicPath : '/dist/',
		filename: PRODUCTION || DOCS ? 'scripts/' + scriptFileName : scriptFileName
	}
};