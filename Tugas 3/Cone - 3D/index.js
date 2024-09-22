function setup() {
    createCanvas(400, 400, WEBGL);
}

function draw() {
    background(0)

    let locX = mouseX - height;
    let locY = mouseY - width;

    pointLight(0, 0, 255, locX/2, locY/2, 250);


    normalMaterial();
    translate(-10, 50, 0);
    push();
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.03);
    cone(80, 130);
    pop();
}
