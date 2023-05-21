// const sizeElemenet = document.createElement('h1');

// document.body.append(sizeElemenet);

// window.onresize = function () {
// 	sizeElement.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;

// }
function getScreenSize() {
	let width = window.innerWidth;
	let height = window.innerHeight;
	document.getElementById("sizeInfo").innerHTML = "Width " + width + " and Height " + height;
	
}

window.addEventListener("resize", getScreenSize);