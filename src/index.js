var style = require('./style/globalStyle.scss');

import InputField from './modules/01-molecules/form-elements/input-field';
import { Header } from './modules/02-organisms/global/header';

var header = new Header({
	logo: {
		image: {
			src: require('./img/svg/flowgig-logo-black.svg')
		},
		url: '/'
	},
	listItems: [
		{
			name: "testlink1",
			link: "https://github.com/"
		}, 
		{
			name: "testlink2",
			link: "https://github.com/"
		}
	]
});

var app = document.getElementById('app');
app.innerHTML = `

		${header.content}

		<div id="content">
			<h1>Home</h1>
		</div>
		${InputField}<br/>
		<div class="${style.box}">
			DEV: ${DEVELOPMENT.toString()}<br/>
			PROD: ${PRODUCTION.toString()}<br/>
		</div>
`;

if(DEVELOPMENT) {
	if(module.hot) {
		module.hot.accept();
	}
}

