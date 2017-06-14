var style = require('../../style/globalStyle.scss');

import * as Grid from '../01-molecules/sections/grid';
import * as ColorPalette from '../03-global/colors/color-palette';

export default function(){

	return ` 
		<h2>Colors</h2>
		<h3>Color palette</h3>
		
		${Grid.getModule({
			gridItems:[
				{
					sizes: {
						phone: 6,
						tablet: 4,
						tabletLandscape: 3,
						screen: 3
					},
					content: `
						<h5>Default color</h5>
						${ColorPalette.getModule({color: 'default'})}	
					`
				},
				{
					sizes: {
						phone: 6,
						tablet: 4,
						tabletLandscape: 3,
						screen: 3
					},
					content: `
						<h5>Primary color</h5>
						${ColorPalette.getModule({color: 'primary'})}	
					`
				},
				{
					sizes: {
						phone: 6,
						tablet: 4,
						tabletLandscape: 3,
						screen: 3
					},
					content: `
						<h5>Info color</h5>
						${ColorPalette.getModule({color: 'info'})}	
					`
				},
				{
					sizes: {
						phone: 6,
						tablet: 4,
						tabletLandscape: 3,
						screen: 3
					},
					content: `
						<h5>Success color</h5>
						${ColorPalette.getModule({color: 'success'})}	
					`
				},
				{
					sizes: {
						phone: 6,
						tablet: 4,
						tabletLandscape: 3,
						screen: 3
					},
					content: `
						<h5>Warning color</h5>
						${ColorPalette.getModule({color: 'warning'})}	
					`
				},
				{
					sizes: {
						phone: 6,
						tablet: 4,
						tabletLandscape: 3,
						screen: 3
					},
					content: `
						<h5>Danger color</h5>
						${ColorPalette.getModule({color: 'danger'})}	
					`
				}
			]
		})}
	`
	
}