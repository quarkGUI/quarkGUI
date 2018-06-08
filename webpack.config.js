var path = require('path');
var webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var HTMLWebpackPlugin = require('html-webpack-plugin');
var CompressionPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


var DEVELOPMENT = process.env.NODE_ENV === 'development';
var PRODUCTION  = process.env.NODE_ENV === 'production';

var outputPath = 'dist';
var ouputPublicPath = '/';
var cssFileName = PRODUCTION ? 'style-[contenthash:10].css' : 'styles.css';
var scriptFileName = PRODUCTION ? '[name].[hash:12].min.js' : '[name].js';

var entry = PRODUCTION
	?	{
			vendor: ['dragula'],
			app: './src/index.js'
		}
	: 	{
			vendor: ['dragula'],
			app: [ 
				'./src/index.js',
				'webpack/hot/dev-server',
				'webpack-dev-server/client?http://localhost:8080'
			]
		};

var optimization = {
	splitChunks: {
		cacheGroups: {
			vendor: {
				name: "vendor",
				filename: PRODUCTION ? "scripts/vendor.[hash:12].min.js" : "vendor.js"
			}
		}
	},
	minimizer: PRODUCTION 
	?	[
			new UglifyJsPlugin({
				uglifyOptions: {
					compress: {
						warnings: false,
			      		unused: true,
			      		dead_code: true,
			      		drop_console: true,
			    	},
			    	output: {
			      		comments: false,
			    	}
		    	}
		  	})
		]
	: 	[]
}


var plugins = PRODUCTION
	? 	[
			new MiniCssExtractPlugin({
		      filename: "style/" + cssFileName,
		      chunkFilename: "style/[id].css"
		    }),
			new HTMLWebpackPlugin({
				template: 'index-template.html'
			}),
			new CompressionPlugin({
		      asset: "[path].gz[query]",
		      algorithm: "gzip",
		      test: /\.js$|\.css$|\.html$/,
		      threshold: 10240,
		      minRatio: 0.8
		    })
		]
	: 	[ 
			new webpack.HotModuleReplacementPlugin() 
		];

plugins.push(
	new webpack.DefinePlugin({
		DEVELOPMENT: JSON.stringify(DEVELOPMENT),
		PRODUCTION: JSON.stringify(PRODUCTION)
	})
);

const cssIdentifier = PRODUCTION ? '[hash:base64:10]' : '[path][name]---[local]';

const cssLoader = PRODUCTION
	?	[
			MiniCssExtractPlugin.loader,
			'css-loader?minimize!localIdentName=' + cssIdentifier
		]
	: 	['style-loader', 'css-loader?localIdentName=' + cssIdentifier];


const sassLoader = PRODUCTION
	?	[
			MiniCssExtractPlugin.loader,
			'css-loader?minimize!sass-loader?localIdentName=' + cssIdentifier
		]
	: 	['style-loader', 'css-loader?localIdentName=' + cssIdentifier, 'sass-loader'];


module.exports = {
	devtool: 'source-map',
	entry: entry,
	optimization: optimization,
	plugins: plugins,
	resolve: {
		extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  	},
	module: {
		rules: [
		{
			test: /\.js$/,
			loaders: ['babel-loader'],
			exclude: '/node_modules/'
		}, {
			test: /\.ts(x?)$/,
      		exclude: /node_modules/,
      		loader: 'babel-loader!ts-loader'
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
			use: sassLoader,
			exclude: '/node_modules/'
		}, { 
			test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
			use: "file-loader?name=fonts/[hash:12].[ext]" 
		}, { 
			test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
			use: "svg-url-loader?noquotes&limit=1024&prefix=svg/[hash:12].[ext]"
		},{  
      		test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,  
      		use: "url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[hash:12].[ext]"  
    	}
    	],

	},
	output: {
		path: path.join(__dirname, outputPath),
		publicPath: PRODUCTION ? ouputPublicPath : '/dist/',
		filename: PRODUCTION ? 'scripts/' + scriptFileName : scriptFileName
	}
};