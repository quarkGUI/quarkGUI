export default function(){
	let initFunction = function () {
		let overlayElementsIsDefined:boolean = document.getElementsByClassName('overlay-element') !== undefined;
		if (overlayElementsIsDefined){
			let overlayElements =  document.getElementsByClassName('overlay-element');
			for (var i = 0; i < overlayElements.length; i++) {
				let overlayElement:any = overlayElements[i];

				document.onclick = function(event:any){
					for (var i = 0; i < overlayElements.length; i++) {
						overlayElements[i].classList.remove('active');
					}
					var thisNodeClassList = event.target.classList !== undefined ? event.target.classList : false;
					var parentNodeClassList = event.target.parentNode !== null && event.target.parentNode.classList !== undefined ? event.target.parentNode.classList : false;
					if (thisNodeClassList){
						thisNodeClassList.forEach(function (className){
							if (className == 'overlay-element') thisNodeClassList.add('active');
						});
					}
					if (parentNodeClassList){
						parentNodeClassList.forEach(function (className){
							if (className == 'overlay-element') parentNodeClassList.add('active');
						});
					}
				}
			}
		}
	}
	document.addEventListener('DOMContentLoaded', initFunction, false);
}
