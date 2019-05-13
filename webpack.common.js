const path = require('path');

module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.html$/,
				use: ['html-loader']
			},
			{
				test: /\.(svg|png|jpg)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[contentHash].[ext]',
						outputPath: 'img'
					}
				}
			}
		]
	}
};
