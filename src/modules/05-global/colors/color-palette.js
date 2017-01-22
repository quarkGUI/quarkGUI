var style = require('./color-palette.scss');
import Grid from '../../01-molecules/sections/grid';
import Card from '../../02-organisms/cards/card';



export default function(button){


	return `
	
		${Grid({
			gridItems:[
				{
					sizes: {
						xs: '6',
						sm: '4',
						md: '3',
						lg: '3'
					},
					content: Card({
						title: 'Default color',
						content: `
							<div class="${style.colorPalette} ${style.defaultColor}">
								<div class="${style.normalState}">
									<div class="${style.color}">
										<span class="${style.colorCode}"></span>
									</div>
								</div>
								<div class="${style.hoverState}">
									<div class="${style.color}">
										<span class="${style.colorCode}"></span>
									</div>
								</div>
								<div class="${style.activeState}">
									<div class="${style.color}">
										<span class="${style.colorCode}"></span>
									</div>
								</div>
							</div>
							`
					})
				},
				{
					sizes: {
						xs: '6',
						sm: '4',
						md: '3',
						lg: '3'
					},
					content: Card({
						title: 'Primary color',
						content: `
							<div class="${style.colorPalette} ${style.primaryColor}">
								<div class="${style.normalState}">
									<div class="${style.color}">
										<span class="${style.colorCode}"></span>
									</div>
								</div>
								<div class="${style.hoverState}">
									<div class="${style.color}">
										<span class="${style.colorCode}"></span>
									</div>
								</div>
								<div class="${style.activeState}">
									<div class="${style.color}">
										<span class="${style.colorCode}"></span>
									</div>
								</div>
							</div>
						`
					})
				},
				{
					sizes: {
						xs: '6',
						sm: '4',
						md: '3',
						lg: '3'
					},
					content: Card({
						title: 'Info color',
						content: `
							<div class="${style.colorPalette} ${style.infoColor}">
								<div class="${style.normalState}">
									<div class="${style.color}">
										<span class="${style.colorCode}"></span>
									</div>
								</div>
								<div class="${style.hoverState}">
									<div class="${style.color}">
										<span class="${style.colorCode}"></span>
									</div>
								</div>
								<div class="${style.activeState}">
									<div class="${style.color}">
										<span class="${style.colorCode}"></span>
									</div>
								</div>
							</div>
						`
					})
				},
				{
					sizes: {
						xs: '6',
						sm: '4',
						md: '3',
						lg: '3'
					},
					content: Card({
						title: 'Success color',
						content: `
							<div class="${style.colorPalette} ${style.successColor}">
								<div class="${style.normalState}">
									<div class="${style.color}">
										<span class="${style.colorCode}"></span>
									</div>
								</div>
								<div class="${style.hoverState}">
									<div class="${style.color}">
										<span class="${style.colorCode}"></span>
									</div>
								</div>
								<div class="${style.activeState}">
									<div class="${style.color}">
										<span class="${style.colorCode}"></span>
									</div>
								</div>
							</div>
						`
					})
				},
				{
					sizes: {
						xs: '6',
						sm: '4',
						md: '3',
						lg: '3'
					},
					content: Card({
						title: 'Warning color',
						content: `
							<div class="${style.colorPalette} ${style.warningColor}">
								<div class="${style.normalState}">
									<div class="${style.color}">
										<span class="${style.colorCode}"></span>
									</div>
								</div>
								<div class="${style.hoverState}">
									<div class="${style.color}">
										<span class="${style.colorCode}"></span>
									</div>
								</div>
								<div class="${style.activeState}">
									<div class="${style.color}">
										<span class="${style.colorCode}"></span>
									</div>
								</div>
							</div>
						`
					})
				},
				{
					sizes: {
						xs: '6',
						sm: '4',
						md: '3',
						lg: '3'
					},
					content: Card({
						title: 'Danger color',
						content: `
							<div class="${style.colorPalette} ${style.dangerColor}">
								<div class="${style.normalState}">
									<div class="${style.color}">
										<span class="${style.colorCode}"></span>
									</div>
								</div>
								<div class="${style.hoverState}">
									<div class="${style.color}">
										<span class="${style.colorCode}"></span>
									</div>
								</div>
								<div class="${style.activeState}">
									<div class="${style.color}">
										<span class="${style.colorCode}"></span>
									</div>
								</div>
							</div>
						`
					})
				}
			]
		})}
	`
}
