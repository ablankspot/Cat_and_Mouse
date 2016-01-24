// Canvas variables
var canvas;
var canvas_w;
var canvas_h;
var currentGameScreen;

// Controls if we are on the 
// game screen.
var isGameRunning;

// ---------------------------
// Drawing Functions
// ---------------------------
function Clear()
{
    if (canvas != null)
    {
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas_w, canvas_h);
    }
}


// Draws the start menu of the game
function DrawStart()
{
    if (canvas != null)
    {
        var ctx = canvas.getContext("2d");
        var x_0 = (canvas_w / 2) - 150;
        var y_0 = (canvas_h / 2) - 50;

        ctx.beginPath();
        ctx.rect(x_0, y_0, 300, 100);
        ctx.fillStyle="#ffffff";
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.font = "40px Poiret One";
        ctx.fillStyle = "red";
        ctx.textAlign = "center";
        ctx.fillText("Start Game", canvas_w/2, canvas_h/2 + 15);
        ctx.closePath();

        //window.onkeydown = KeyStrokeDown;
        //window.onkeyup = KeyStrokeUp;
        //window.addEventListener("mousedown", Click, false);
    }
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
// ===========================

// ---------------------------
// Event handlers
// ---------------------------

// Adjusts the size of the canvas to the size of the browser
// and re-draws the content with the new scale
// body.onresize handler
function Adjust_Content()
{
    Resize();
    Clear();

    if (!isGameRunning)
    {
        switch(currentGameScreen)
        {
            case START_SCREEN: 
                DrawStart();
                break;

        }
    }
}



// ===========================

// First entry point to load the game environment
function Init()
{
    canvas = document.getElementById("main_canvas");
    
    // Set initial state variables
    isGameRunning = false;
    currentGameScreen = START_SCREEN;

    // Adjust size of the game's canvas
    // and draw the game's start screen
    Adjust_Content();
}