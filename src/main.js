'use strict';
import WebFont from 'webfontloader';
import Button from './components/buttons/Button';
import Checkbox from './components/form-elements/Checkbox';
import RadioButton from './components/form-elements/RadioButton';

WebFont.load({
  google: {
    families: ['Roboto:200,300,400', 'sans-serif']
  }
});

export {Button, Checkbox, RadioButton}