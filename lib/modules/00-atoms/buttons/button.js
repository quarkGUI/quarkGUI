"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var Style = require("../../../../src/modules/00-atoms/buttons/button.scss");
var Button = /** @class */ (function () {
    function Button(button) {
        this.id = "";
        this.link = "#";
        this.icon = "";
        this.content = "";
        this.type = "flat";
        this.theme = "default";
        this.submit = false;
        this.id = button.id;
        if (button.id !== undefined)
            this.id = button.id;
        if (button.link !== undefined)
            this.link = button.link;
        if (button.iconClass !== undefined)
            this.icon = "<span class='" + Style.icon + " " + button.iconClass + "'></span>";
        if (button.content !== undefined)
            this.content = button.content;
        if (button.title !== undefined)
            this.title = button.title;
        if (button.type !== undefined)
            this.type = button.type;
        if (button.theme !== undefined)
            this.theme = button.theme;
        if (button.submit !== undefined)
            this.submit = button.submit;
        if (button.attributes !== undefined)
            this.attributes = button.attributes;
        if (button.ajaxOptions !== undefined) {
            this.ajaxOptions = button.ajaxOptions;
            this.ajaxOptions.getDataFromElements = button.ajaxOptions.getDataFromElements !== undefined ? button.ajaxOptions.getDataFromElements : false;
        }
        if (button.formWrapper !== undefined) {
            this.formWrapper = {
                formAction: button.formWrapper.formAction !== undefined ? button.formWrapper.formAction : '',
                formMethod: button.formWrapper.formMethod !== undefined ? button.formWrapper.formMethod : '',
                hiddenFields: button.formWrapper.hiddenFields !== undefined && button.formWrapper.hiddenFields.length ? button.formWrapper.hiddenFields : []
            };
        }
    }
    Button.prototype.getThemeClass = function (theme) {
        var themeClass = Style.buttonThemeDefault;
        if (theme == "primary")
            themeClass = Style.buttonThemePrimary;
        if (theme == "info")
            themeClass = Style.buttonThemeInfo;
        if (theme == "success")
            themeClass = Style.buttonThemeSuccess;
        if (theme == "warning")
            themeClass = Style.buttonThemeWarning;
        if (theme == "danger")
            themeClass = Style.buttonThemeDanger;
        return themeClass;
    };
    Button.prototype.getTypeClass = function (type) {
        var typeClass = Style.buttonTypeFlat;
        if (type == "raised")
            typeClass = Style.buttonTypeRaised;
        if (type == "minimal")
            typeClass = Style.buttonTypeMinimal;
        return typeClass;
    };
    Button.prototype.getHtmlAttributes = function (attributes) {
        var htmlAttributes = '';
        attributes.forEach(function (attribute, index) {
            htmlAttributes += attribute;
            if (index < attributes.length) {
                htmlAttributes += ' ';
            }
        });
        return htmlAttributes;
    };
    Button.prototype.addHiddenFields = function () {
        var hiddenFieldsElement = '';
        if (this.formWrapper.hiddenFields !== undefined && this.formWrapper.hiddenFields.length) {
            this.formWrapper.hiddenFields.forEach(function (hiddenField) {
                hiddenFieldsElement += "<input type='hidden' name='" + hiddenField.name + "' value='" + hiddenField.value + "' />";
            });
        }
        return hiddenFieldsElement;
    };
    Button.prototype.addFormWrapper = function (moduleElement) {
        var hiddenFields = this.addHiddenFields();
        return "<form action='" + this.formWrapper.formAction + "' method='" + this.formWrapper.formMethod + "' class='" + Style.formWrapper + "'>" + hiddenFields + moduleElement + "</form>";
    };
    Button.prototype.addAjaxListener = function () {
        var button = this;
        document.addEventListener('DOMContentLoaded', function () {
            if (button.ajaxOptions !== undefined) {
                if (button.id !== undefined) {
                    var buttonElement = document.getElementById(button.id);
                    buttonElement.onclick = function () {
                        if (button.ajaxOptions.csrfToken !== undefined) {
                            axios_1["default"].defaults.headers.common['X-CSRF-TOKEN'] = button.ajaxOptions.csrfToken;
                        }
                        if (button.ajaxOptions.method == 'post' || button.ajaxOptions.method == 'put') {
                            var ajaxData_1 = button.ajaxOptions.data !== undefined ? button.ajaxOptions.data : {};
                            if (button.ajaxOptions.getDataFromElements && button.ajaxOptions.dataFromElements !== undefined) {
                                button.ajaxOptions.dataFromElements.forEach(function (dataFromElement) {
                                    var inputElement = document.getElementById(dataFromElement.elementId);
                                    if (inputElement !== null) {
                                        ajaxData_1[dataFromElement.name] = inputElement.value;
                                    }
                                });
                            }
                            axios_1["default"]({
                                method: button.ajaxOptions.method,
                                url: button.ajaxOptions.url,
                                data: ajaxData_1
                            });
                        }
                    };
                }
                else {
                    console.log("Button with ajaxOptions should have an id attribute");
                }
            }
        });
    };
    Button.prototype.createModuleElement = function () {
        var themeClass = this.getThemeClass(this.theme);
        var typeClass = (this.type !== undefined) ? this.getTypeClass(this.type) : Style.buttonTypeFlat;
        var titleAttribute = (this.title !== undefined) ? "title='" + this.title + "'" : '';
        var isSubmitButton = this.submit !== undefined && this.submit === true;
        var htmlAtributes = this.attributes !== undefined && this.attributes.length ? this.getHtmlAttributes(this.attributes) : '';
        var moduleElement = '';
        if (isSubmitButton) {
            moduleElement = "<button type='submit' id='" + this.id + "' " + htmlAtributes + " class='" + Style.button + " " + typeClass + " " + themeClass + "'>" + this.icon + " " + this.content + "</button>";
        }
        else {
            moduleElement = "<a id='" + this.id + "' " + titleAttribute + " href='" + this.link + "' " + htmlAtributes + " class='" + Style.button + " " + typeClass + " " + themeClass + "'>" + this.icon + " " + this.content + "</a>";
        }
        if (this.formWrapper !== undefined) {
            moduleElement = this.addFormWrapper(moduleElement);
        }
        this.addAjaxListener();
        return moduleElement;
    };
    return Button;
}());
exports.Button = Button;
function getModule(button) {
    return new Button(button).createModuleElement();
}
exports.getModule = getModule;
