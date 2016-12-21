
import TestPage from './modules/04-pages/test-page';

var app = document.getElementById('app');
app.innerHTML = TestPage();

if(DEVELOPMENT) {
	if(module.hot) {
		module.hot.accept();
	}
}

