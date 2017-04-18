"use strict";
exports.__esModule = true;
function default_1() {
    document.addEventListener('DOMContentLoaded', function () {
        var overlayElementsIsDefined = document.getElementsByClassName('overlay-element') !== undefined;
        if (overlayElementsIsDefined) {
            var overlayElements_1 = document.getElementsByClassName('overlay-element');
            for (var i = 0; i < overlayElements_1.length; i++) {
                var overlayElement = overlayElements_1[i];
                document.onclick = function (event) {
                    for (var i = 0; i < overlayElements_1.length; i++) {
                        overlayElements_1[i].classList.remove('active');
                    }
                    var thisNodeClassList = event.target.classList !== undefined ? event.target.classList : false;
                    var parentNodeClassList = event.target.parentNode !== null && event.target.parentNode.classList !== undefined ? event.target.parentNode.classList : false;
                    if (thisNodeClassList) {
                        thisNodeClassList.forEach(function (className) {
                            if (className == 'overlay-element')
                                thisNodeClassList.add('active');
                        });
                    }
                    if (parentNodeClassList) {
                        parentNodeClassList.forEach(function (className) {
                            if (className == 'overlay-element')
                                parentNodeClassList.add('active');
                        });
                    }
                };
            }
        }
    }, false);
}
exports["default"] = default_1;
