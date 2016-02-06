/////////////////////////////////////////
// 
// FILE: game.js
// 
// This file constains all the logic
// governing the game. Including draw events,
// navigation between screens, and in-game
// movement and drawing. It uses thinker.js
// for AI.
//
// Author:      Canek Cambray [ablankspot]
// Modified:    02/05/2016
/////////////////////////////////////////

// Canvas variables
var canvas;
var canvas_w;
var canvas_h;
var currentGameScreen;

// Controls if we are on the 
// game screen.
var isGameRunning;
var isGamePaused;

// ---------------------------
// Drawing Functions
// ---------------------------
function Clear()
{
    if (canvas != null)
    {
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas_w, canvas_h);
        window.removeEventListener('mousedown', Button_Click);
    }
}


// Draws the start menu of the game
function DrawStart()
{
    if (canvas != null)
    {
        var ctx = canvas.getContext("2d");
        var w = (canvas_w / 2);
        var h = (canvas_h / 2);
        var button_w = Math.ceil((w / 10) * 8);
        var button_h = Math.ceil((h / 10) * 5);
        var x_0, y_0;

        // Draw the background placeholder
        ctx.globalAlpha = 0.2;
        ctx.beginPath();
        ctx.rect(0, 0, canvas_w, canvas_h);
        ctx.fillStyle="#00ff00";
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        // Draw the Logo placeholder
        ctx.globalAlpha = 0.3;
        ctx.beginPath();
        ctx.rect(0, 0, canvas_w, canvas_h / 2);
        ctx.fillStyle="#0000ff";
        ctx.stroke();
        ctx.fill();
        ctx.closePath(); 

        ctx.globalAlpha = 1.0;
        ctx.beginPath();
        ctx.font = "80px Poiret One";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.fillText("LOGO", w, h / 2);
        ctx.closePath();       

        // Draw the 'Play' button placeholder
        x_0 = Math.ceil(w / 10);
        y_0 = Math.ceil((h / 10) * 2.5) + h;
        ctx.beginPath();
        ctx.rect(x_0, y_0, button_w, button_h);
        ctx.fillStyle="#ffffff";
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        x_0 = (x_0 + button_w) - (button_w / 2);
        y_0 = y_0 + (button_h / 2);
        ctx.beginPath();
        ctx.font = "80px Poiret One";
        ctx.fillStyle = "red";
        ctx.textAlign = "center";
        ctx.fillText("Play", x_0, y_0);
        ctx.closePath();

        // Draw the 'High scores' button placeholder
        x_0 = Math.ceil(w / 10) + w;
        y_0 = Math.ceil((h / 10) * 2.5) + h;
        ctx.beginPath();
        ctx.rect(x_0, y_0, button_w, button_h);
        ctx.fillStyle="#ffffff";
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        x_0 = (x_0 + button_w) - (button_w / 2);
        y_0 = y_0 + (button_h / 2);
        ctx.beginPath();
        ctx.font = "80px Poiret One";
        ctx.fillStyle = "red";
        ctx.textAlign = "center";
        ctx.fillText("High Scores", x_0, y_0);
        ctx.closePath();

        //window.onkeydown = KeyStrokeDown;
        //window.onkeyup = KeyStrokeUp;
        window.addEventListener("mousedown", Button_Click, false);
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

function Button_Click(e)
{
    if (canvas != null)
    {
        var w = (canvas_w / 2);
        var h = (canvas_h / 2);
        var button_w = Math.ceil((w / 10) * 8);
        var button_h = Math.ceil((h / 10) * 5);

        var buttonCoordinates = 
        {
            Play_x0: Math.ceil(w / 10),
            Play_x1: Math.ceil(w / 10) + button_w,
            Play_y0: Math.ceil((h / 10) * 2.5) + h,
            Play_y1: Math.ceil((h / 10) * 2.5) + h + button_h,
            High_x0: Math.ceil(w / 10) + w,
            High_x1: Math.ceil(w / 10) + w + button_w,
            High_y0: Math.ceil((h / 10) * 2.5) + h,
            High_y1: Math.ceil((h / 10) * 2.5) + h + button_h
        };

        var x = e.pageX - canvas.offsetLeft;
        var y = e.pageY - canvas.offsetTop;

        // Navigate through different screens
        if (!isGameRunning)
        {
            // Hit button Play on start screen
            if (currentGameScreen == START_SCREEN &&
               (x >= buttonCoordinates.Play_x0 && x <= buttonCoordinates.Play_x1 && 
                y >= buttonCoordinates.Play_y0 && y <= buttonCoordinates.Play_y1))
            {
                // window.removeEventListener('mousedown', Click);
                // IsGameRunning = true;
                // Clear();
                // Start();
                alert('Hitted button Play');
            }
            else if (currentGameScreen == START_SCREEN &&
                    (x >= buttonCoordinates.High_x0 && x <= buttonCoordinates.High_x1 && 
                     y >= buttonCoordinates.High_y0 && y <= buttonCoordinates.High_y1))
            {
                alert('Hitted button Scores');
            }
        }
        else
        {   
            // If there is a button click when the game is running
            // there are only 2 alternatives: The game is paused
            // or the game is over.
            if (isGamePaused)
            {}
            else
            {}
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
    isGamePaused = false;
    currentGameScreen = START_SCREEN;

    // Adjust size of the game's canvas
    // and draw the game's start screen
    Adjust_Content();
}