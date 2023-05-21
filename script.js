const sizeElemenet = document.createElement('h1');

document.body.append(sizeElemenet);

window.onresize = function () {
	sizeElement.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;

}