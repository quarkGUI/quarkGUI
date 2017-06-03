"use strict";
exports.__esModule = true;
var Style = require("../../../../src/modules/01-molecules/navigation/breadcrumbs.scss");
var Breadcrumbs = (function () {
    function Breadcrumbs(breadcrumbs) {
        this.breadcrumbItems = breadcrumbs.breadcrumbItems;
    }
    Breadcrumbs.prototype.createModuleElement = function () {
        var breadcrumbItemElements = "";
        if (this.breadcrumbItems.length) {
            var position = 1;
            for (var _i = 0, _a = this.breadcrumbItems; _i < _a.length; _i++) {
                var breadcrumbItem = _a[_i];
                breadcrumbItemElements += "<li itemprop='itemListElement' itemscope itemtype='http://schema.org/ListItem'><a itemprop='item' href='" + breadcrumbItem.link + "''><span itemprop='name'>" + breadcrumbItem.name + "</span></a><meta itemprop='position' content='" + position + "'/></li>";
                position++;
            }
        }
        return "<ol itemscope itemtype='http://schema.org/BreadcrumbList' class='" + Style.breadcrumbs + "'>" + breadcrumbItemElements + "</ol>";
    };
    return Breadcrumbs;
}());
exports.Breadcrumbs = Breadcrumbs;
function getModule(breadcrumbs) {
    return new Breadcrumbs(breadcrumbs).createModuleElement();
}
exports.getModule = getModule;
