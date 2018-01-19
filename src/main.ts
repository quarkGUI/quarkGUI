/*!
 * quarkGUI v0.7.32 (https://github.com/quarkGUI/quarkGUI)
 * Copyright(c) 2016-2018 Benjamin Dehli (https://github.com/benjamindehli)
 * Licenced under GNU General Public License
 */


 'use strict';

 const Style = require<any>("../src/style/globalStyle.scss");
 import * as Init from "./init";

 import * as Atoms from "./modules/atoms";
 import * as Molecules from "./modules/molecules";
 import * as Organisms from "./modules/organisms";
 import * as Globals from "./modules/global";

 const LazyInit = function () {
 	let event = new CustomEvent("quarkLazyLoaded", { "detail": "One or more modules has been lazy loaded" });
 	document.dispatchEvent(event);
 }

 

 export {Atoms, Molecules, Organisms, Globals, Init, LazyInit}