import Image from '../../00-atoms/media/image';

var style = require('./footer.scss');

export default function(footer){

	var theme = footer.theme !== undefined ? footer.theme	: '';
	var logoUrl = footer.logo.url !== undefined ? footer.logo.url	: '';
	var content = footer.content !== undefined ? footer.content : '';
	
	var logoImage = '';
	if (footer.logo.image !== undefined) logoImage = Image.getModule(footer.logo.image);

	var themeClass = style.footerThemeDefault;
	if (theme == 'primary'){
		primaryNavigationObj.theme = theme;
		themeClass = style.footerThemePrimary;
	}
	if (theme == 'dark'){
		primaryNavigationObj.theme = theme;
		themeClass = style.footerThemeDark;
	}


	return `
		<footer class="${style.footer} ${themeClass}">
			<a href="${logoUrl}" class="${style.logo}">
				${logoImage}
			</a>
			${content}
		</header>
	`
	
}