// Canvas variables
var canvas;
var canvas_w;
var canvas_h;

// First entry point to load the game environment
function Init()
{
    canvas = document.getElementById("main_canvas");

    // Adjust size of the game's canvas
    Resize();

    // Draw the game's start screen
    DrawStart();
}

// Adjusts the size of the canvas to the size of the browser
function Resize()
{
    // The canvas will mesure 90% of the screen in both directions
    // TODO: verify that the size accounts at least for site header
    canvas_w = Math.ceil((window.innerWidth / 10) * 9);
    canvas_h = Math.ceil((window.innerHeight / 10) * 9);

    canvas.width = canvas_w;
    canvas.height = canvas_h;
}

// Draws the start menu of the game
function DrawStart()
{
    var ctx = canvas.getContext("2d");
    var x_0 = (canvas_w / 2) - 150;
    var y_0 = (canvas_h / 2) - 50;
    ctx.rect(x_0, y_0, 300, 100);
    ctx.fillStyle="#ffffff";
    ctx.stroke();
    ctx.fill();

    ctx.font = "40px Poiret One";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Start Game", canvas.width/2, canvas.height/2 + 15);

    //window.onkeydown = KeyStrokeDown;
    //window.onkeyup = KeyStrokeUp;
    //window.addEventListener("mousedown", Click, false);
}