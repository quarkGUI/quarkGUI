const path = require('path')
module.exports = {
	title: "quarkGUI",
	styleguideDir: "docs",
	contextDependencies: [path.resolve(__dirname, 'src/lib/components')],
	require: [
		path.join(__dirname, 'src/styleguide/styleguide.js')
	],
	sections: [
		{name: 'Introduction', content: './src/styleguide/introduction.md'},
	    {name: 'Components', components: './src/lib/components/**/*.js'}
	],
	template: {
		favicon: 'src/styleguide/favicon.ico'
	},
	theme: {
		fontFamily: {
			base: '"Roboto", sans-serif'
		}
	}
};