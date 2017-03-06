"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dragula = require("dragula");
const Style = require("../../../../src/modules/01-molecules/lists/dragable-list.scss");
class DragableList {
    constructor(dragableList) {
        this.id = dragableList.id;
        this.listItems = dragableList.listItems;
    }
    initDragula(containers) {
        let dragula = Dragula(containers, {});
        dragula.on('drop', function (element, container) {
        });
    }
    addListener(thisInstance) {
        document.addEventListener('DOMContentLoaded', function () {
            let containers = [document.getElementById(thisInstance.id)];
            thisInstance.initDragula(containers);
        }, false);
        document.addEventListener("module-lazy-loaded", function (e) {
            let containers = [document.getElementById(thisInstance.id)];
            thisInstance.initDragula(containers);
        });
    }
    createListElements(listItems) {
        let listItemElements = "";
        for (let listItem of listItems) {
            let listItemContent = listItem.content !== undefined ? listItem.content : '';
            listItemElements += `<div class="${Style.listItem}">${listItemContent}</div>`;
        }
        return listItemElements;
    }
    createModuleElement() {
        this.addListener(this);
        let listElements = this.createListElements(this.listItems);
        return `
			<div id="${this.id}" class="${Style.dragableList}">
				${listElements}
			</div>
		`;
    }
}
exports.DragableList = DragableList;
function getModule(dragableList) {
    return new DragableList(dragableList).createModuleElement();
}
exports.getModule = getModule;
