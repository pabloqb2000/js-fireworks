function mouseDragged() {
	UI.mouseDragged();
	Drag.mouseDragged();
	if(frameCount % 3 == 0) {
		let f = new Firework(mouseX, ponder(height - mouseY, height, 8, 50), random(60, 100), 3, random(num-8, num+8));
		fireList.push(f);
	}
}

function mousePressed() {
	UI.mousePressed();
	Drag.mousePressed();
	let f = new Firework(mouseX, ponder(height - mouseY, height, 8, 50), random(60, 100), 3, random(num-8, num+8));
	fireList.push(f);
}

function mouseClicked() {
    UI.mouseClicked();
	Drag.mouseClicked();
}

function mouseReleased() {
    UI.mouseReleased();
	Drag.mouseReleased();
}

function mouseWheel(event) {
	UI.mouseWheel(event);
}

// function keyPressed() {
//   if(keyCode === 83){
//
//   }
// }

