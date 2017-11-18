"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var Style = require("../../../../src/modules/00-atoms/buttons/button.scss");
var Button = /** @class */ (function () {
    function Button(button) {
        this.id = "";
        this.link = "#";
        this.iconClass = "";
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
            this.iconClass = button.iconClass;
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
            if (button.formWrapper.vueBindings !== undefined)
                this.formWrapper.vueBindings = button.formWrapper.vueBindings;
        }
        if (button.vueBindings !== undefined)
            this.vueBindings = button.vueBindings;
    }
    Button.prototype.getVueBinding = function (attributeName) {
        var vueBinding = false;
        if (this.vueBindings !== undefined) {
            vueBinding = this.vueBindings[attributeName] !== undefined ? this.vueBindings[attributeName] : false;
        }
        return vueBinding;
    };
    Button.prototype.getFormWrapperVueBinding = function (attributeName) {
        var vueBinding = false;
        if (this.formWrapper.vueBindings !== undefined) {
            vueBinding = this.formWrapper.vueBindings[attributeName] !== undefined ? this.formWrapper.vueBindings[attributeName] : false;
        }
        return vueBinding;
    };
    Button.prototype.getFormWrapperHiddenFieldVueBinding = function (attributeName, hiddenField) {
        var vueBinding = false;
        if (hiddenField.vueBindings !== undefined) {
            vueBinding = hiddenField.vueBindings[attributeName] !== undefined ? hiddenField.vueBindings[attributeName] : false;
        }
        return vueBinding;
    };
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
                var nameAttribute = '';
                if (this.getFormWrapperHiddenFieldVueBinding('name', hiddenField)) {
                    var name_1 = this.getFormWrapperHiddenFieldVueBinding('name', hiddenField);
                    nameAttribute = "v-bind:name='" + name_1 + "'";
                }
                else {
                    nameAttribute = "name='" + hiddenField.name + "'";
                }
                var valueAttribute = '';
                if (this.getFormWrapperHiddenFieldVueBinding('value', hiddenField)) {
                    var value = this.getFormWrapperHiddenFieldVueBinding('value', hiddenField);
                    valueAttribute = "v-bind:value='" + value + "'";
                }
                else {
                    valueAttribute = "value='" + hiddenField.value + "'";
                }
                hiddenFieldsElement += "<input type='hidden' " + nameAttribute + " " + valueAttribute + " />";
            }.bind(this));
        }
        return hiddenFieldsElement;
    };
    Button.prototype.addFormWrapper = function (moduleElement) {
        var hiddenFields = this.addHiddenFields();
        var formActionAttribute = '';
        if (this.getFormWrapperVueBinding('formAction')) {
            var formAction = this.getFormWrapperVueBinding('formAction');
            formActionAttribute = "v-bind:action='" + formAction + "'";
        }
        else {
            formActionAttribute = "action='" + this.formWrapper.formAction + "'";
        }
        var formMethodAttribute = '';
        if (this.getFormWrapperVueBinding('formMethod')) {
            var formMethod = this.getFormWrapperVueBinding('formMethod');
            formMethodAttribute = "v-bind:method='" + formMethod + "'";
        }
        else {
            formMethodAttribute = "method='" + this.formWrapper.formMethod + "'";
        }
        return "<form " + formActionAttribute + " " + formMethodAttribute + " class='" + Style.formWrapper + "'>" + hiddenFields + moduleElement + "</form>";
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
        var hasTitle = this.title !== undefined || this.getVueBinding('title');
        var hasContent = this.content !== undefined || this.getVueBinding('content');
        var hasLink = this.link !== undefined || this.getVueBinding('link');
        var hasIconClass = this.iconClass !== undefined || this.getVueBinding('iconClass');
        var isSubmitButton = this.submit !== undefined && this.submit === true;
        var htmlAtributes = this.attributes !== undefined && this.attributes.length ? this.getHtmlAttributes(this.attributes) : '';
        var moduleElement = '';
        var titleAttribute = '';
        if (hasTitle) {
            if (this.getVueBinding('title')) {
                var title = this.getVueBinding('title');
                titleAttribute = "v-bind:title='" + title + "'";
            }
            else {
                titleAttribute = "title='" + this.iconClass + "'";
            }
        }
        var content = '';
        if (hasContent) {
            if (this.getVueBinding('content')) {
                content = "{{ " + this.getVueBinding('content') + " }}";
            }
            else {
                content = this.content;
            }
        }
        var hrefAttribute = '';
        if (hasLink) {
            if (this.getVueBinding('link')) {
                var link = this.getVueBinding('link');
                hrefAttribute = "v-bind:href='" + link + "'";
            }
            else {
                hrefAttribute = "href='" + this.link + "'";
            }
        }
        var iconElement = '';
        if (hasIconClass) {
            var iconClassAttribute = '';
            if (this.getVueBinding('iconClass')) {
                var iconClass = this.getVueBinding('iconClass');
                iconClassAttribute = "class='" + Style.icon + "' v-bind:class='" + iconClass + "'";
            }
            else {
                iconClassAttribute = "class='" + Style.icon + " " + this.iconClass + "'";
            }
            iconElement = "<span " + iconClassAttribute + "></span>";
        }
        if (isSubmitButton) {
            moduleElement = "<button type='submit' id='" + this.id + "' " + htmlAtributes + " class='" + Style.button + " " + typeClass + " " + themeClass + "'>" + iconElement + " " + content + "</button>";
        }
        else {
            moduleElement = "<a id='" + this.id + "' " + titleAttribute + " " + hrefAttribute + " " + htmlAtributes + " class='" + Style.button + " " + typeClass + " " + themeClass + "'>" + iconElement + " " + content + "</a>";
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
