const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	optimization: {
		// minimize: true,
		minimize: true,
		minimizer: [
			new TerserPlugin({
				extractComments: false,
			}),
		],
	}
}