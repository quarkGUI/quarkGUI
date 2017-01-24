import InputField from './input-field'

var style = require('./select-list.scss');


function createOptionElements(options){
	var optionElements = "";
	options.forEach(function(option){
		optionElements += `<li data-value="${option.value}">${option.name}</li>`;
	});
	return optionElements;
}

export default function(selectList){

	var id          = selectList.id          !== undefined ? selectList.id          : '';
	var name        = selectList.name        !== undefined ? selectList.name        : '';
	var type        = selectList.type        !== undefined ? selectList.type        : '';
	var value       = selectList.value       !== undefined ? selectList.value       : '';
	var placeholder = selectList.placeholder !== undefined ? selectList.placeholder	: '';
	var options     = selectList.options     !== undefined ? selectList.options     : false;

	var inputField = {
		id: selectList.id + '-input',
		type: 'text',
		value: selectList.value,
		placeholder: selectList.placeholder
	}

	var dropdownList = {
		id: selectList.id + '-dropdownList'
	}

	var optionElements = '';
	if (options) optionElements = createOptionElements(selectList.options);

	document.addEventListener('DOMContentLoaded', function() {
		var selectListElement = document.getElementById(id) !== undefined ? document.getElementById(id) : false;
		var inputFieldElement = document.getElementById(inputField.id) !== undefined ? document.getElementById(inputField.id) : false;
		var dropdownListElement = document.getElementById(dropdownList.id) !== undefined ? document.getElementById(dropdownList.id) : false;
		
		if (inputFieldElement){
			inputFieldElement.onfocus = function(){
				dropdownListElement.classList.add("active");
				dropdownListElement.classList.remove("transparent")
				var dropdownElementHeight = dropdownListElement.offsetHeight;
				dropdownListElement.style.marginBottom = 0-dropdownElementHeight + 'px';
			};

			inputFieldElement.onblur = function(event){
				dropdownListElement.classList.add("transparent")
				setTimeout(function(){ 
					if (inputFieldElement !== document.activeElement){
						dropdownListElement.classList.remove("active")
						dropdownListElement.classList.remove("transparent")
					}
				}, 1000);
				
			}
		}

		if (dropdownListElement){
			dropdownListElement.addEventListener('click', function (e) {
			    var target = e.target; // Clicked element
			    while (target && target.parentNode !== dropdownListElement) {
			        target = target.parentNode; // If the clicked element isn't a direct child
			        if(!target) { return; } // If element doesn't exist
			    }
			    if (target.tagName === 'LI'){
			    	var optionValue = target.getAttribute("data-value");
			    	inputFieldElement.value = optionValue;
			    	inputFieldElement.classList.add("is-not-empty");
			    }
			});
			
		}

	}, false);

	return `
		<div id="${id}">
			${InputField(inputField)}
			<ul id="${dropdownList.id}" class="${style.dropdownList}">
				${optionElements}
			</ul>
		</div>
	`;

}