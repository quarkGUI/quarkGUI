'use strict';

import WebFont from 'webfontloader';
import Button from './components/Buttons/Button';
WebFont.load({
  google: {
    families: ['Roboto:200,300,400', 'sans-serif']
  }
});
export { Button };