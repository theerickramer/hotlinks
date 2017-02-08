module.exports = {
  target: 'node',
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
	module: {
    exprContextRegExp: /$^/, // invalidates all require(expr) cases, i.e. as found in './iconv-loader' 
    exprContextCritical: false, // https://github.com/bitinn/node-fetch/issues/41 & https://github.com/andris9/encoding/issues/16#issuecomment-226996274 
		loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      { 
        test: /\.json$/, 
        loader: "json-loader"
      }
    ]
	}
}