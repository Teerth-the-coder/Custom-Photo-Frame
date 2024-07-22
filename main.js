function preload() {
    // console.log("I am Preload Function")
}

function setup() {
    // console.log("I Am Setup Function")

    canvas = createCanvas(600, 500)
    // canvas.center()
    canvas.position(400, 200)
    video = createCapture(VIDEO)
    video.hide()

    tintColour = ""



}

function draw() {
    //    console.log("I Am The Draw Function"); 
    background("pink")

    fill("orange")

    rect(30,30,540,440)

    for (let i = 1; i<=12; i++) {
        fill("green")
        circle(45*i, 20,20)

        fill("cyan")
        circle(20,40*i,20)

        fill("purple")
        circle(580,40*i,20)

        fill("brown")
        circle(45*i, 490,20)
    }

    





    // rect(50,20,30,30)
    image(video, 50, 50, 500, 400)
    tint(tintColour)
}

function apply() {
    tintColour = document.getElementById("colorInput").value;
}

function take_snapshot() {
    save("filterImage.png")
}