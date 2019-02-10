import WebFont from 'webfontloader';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faSquare, faDotCircle, faCircle } from '@fortawesome/free-regular-svg-icons'
import './styleguide.scss';

library.add(faCheckSquare, faSquare, faDotCircle, faCircle)

WebFont.load({
  google: {
    families: ['Roboto:200,300,400', 'sans-serif']
  }
});