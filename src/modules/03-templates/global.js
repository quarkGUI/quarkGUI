var style = require('../../style/globalStyle.scss');

import Grid from '../01-molecules/sections/grid';
import ColorPalette from '../05-global/colors/color-palette';

export default function(){

	return ` 
		<h2>Colors</h2>
		<h3>Color palette</h3>
		
		${Grid({
			gridItems:[
				{
					sizes: {
						xs: '6',
						sm: '4',
						md: '3',
						lg: '3'
					},
					content: `
						<h5>Default color</h5>
						${ColorPalette({color: 'default'})}	
					`
				},
				{
					sizes: {
						xs: '6',
						sm: '4',
						md: '3',
						lg: '3'
					},
					content: `
						<h5>Primary color</h5>
						${ColorPalette({color: 'primary'})}	
					`
				},
				{
					sizes: {
						xs: '6',
						sm: '4',
						md: '3',
						lg: '3'
					},
					content: `
						<h5>Info color</h5>
						${ColorPalette({color: 'info'})}	
					`
				},
				{
					sizes: {
						xs: '6',
						sm: '4',
						md: '3',
						lg: '3'
					},
					content: `
						<h5>Success color</h5>
						${ColorPalette({color: 'success'})}	
					`
				},
				{
					sizes: {
						xs: '6',
						sm: '4',
						md: '3',
						lg: '3'
					},
					content: `
						<h5>Warning color</h5>
						${ColorPalette({color: 'warning'})}	
					`
				},
				{
					sizes: {
						xs: '6',
						sm: '4',
						md: '3',
						lg: '3'
					},
					content: `
						<h5>Danger color</h5>
						${ColorPalette({color: 'danger'})}	
					`
				}
			]
		})}
	`
	
}