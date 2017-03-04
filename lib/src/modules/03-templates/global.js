"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var style = require('../../style/globalStyle.scss');
const Grid = require("../01-molecules/sections/grid");
const ColorPalette = require("../05-global/colors/color-palette");
function default_1() {
    return ` 
		<h2>Colors</h2>
		<h3>Color palette</h3>
		
		${Grid.getModule({
        gridItems: [
            {
                sizes: {
                    phone: 6,
                    tablet: 4,
                    tabletLandscape: 3,
                    screen: 3
                },
                content: `
						<h5>Default color</h5>
						${ColorPalette.getModule({ color: 'default' })}	
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
						${ColorPalette.getModule({ color: 'primary' })}	
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
						${ColorPalette.getModule({ color: 'info' })}	
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
						${ColorPalette.getModule({ color: 'success' })}	
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
						${ColorPalette.getModule({ color: 'warning' })}	
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
						${ColorPalette.getModule({ color: 'danger' })}	
					`
            }
        ]
    })}
	`;
}
exports.default = default_1;
