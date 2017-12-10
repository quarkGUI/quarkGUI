/*!
 * quarkGUI v0.7.30 (https://github.com/quarkGUI/quarkGUI)
 * Copyright(c) 2016-2017 Benjamin Dehli (https://github.com/benjamindehli)
 * Licenced under GNU General Public License
 */
'use strict';
exports.__esModule = true;
var Style = require("../src/style/globalStyle.scss");
var Init = require("./init");
exports.Init = Init;
var Atoms = require("./modules/atoms");
exports.Atoms = Atoms;
var Molecules = require("./modules/molecules");
exports.Molecules = Molecules;
var Organisms = require("./modules/organisms");
exports.Organisms = Organisms;
var Globals = require("./modules/global");
exports.Globals = Globals;
var LazyInit = function () {
    var event = new CustomEvent("quarkLazyLoaded", { "detail": "One or more modules has been lazy loaded" });
    document.dispatchEvent(event);
};
exports.LazyInit = LazyInit;
