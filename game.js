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
        window.removeEventListener('mousedown', ButtonClick);
    }
}

function DrawBackground()
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
    }
}

function DrawLogo()
{
    if (canvas != null)
    {
        var ctx = canvas.getContext("2d");
        var w = (canvas_w / 2);
        var h = (canvas_h / 2);
        var button_w = Math.ceil((w / 10) * 8);
        var button_h = Math.ceil((h / 10) * 5);
        var x_0, y_0;

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

        DrawBackground();
        DrawLogo();

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
        window.addEventListener("mousedown", ButtonClick, false);
    }
}

function DrawDifficultySelection()
{
    if (canvas != null)
    {
        var ctx = canvas.getContext("2d");
        var w = (canvas_w / 2);
        var h = (canvas_h / 2);
        var button_w = Math.ceil((w / 10) * 8);
        var button_h = Math.ceil((h / 10) * 5);
        var x_0, y_0;

        DrawBackground();
        DrawLogo();

        // Draw the 'Easy' button placeholder
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
        ctx.fillText("Easy", x_0, y_0);
        ctx.closePath();

        // Draw the 'Hard' button placeholder
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
        ctx.fillText("Hard", x_0, y_0);
        ctx.closePath();

        window.addEventListener("mousedown", ButtonClick, false);
    }
}

// Adjusts the size of the canvas to the size of the browser
function Resize()
{
    if (canvas != null)
    {
        // The canvas will mesure 90% of the screen in both directions
        // TODO: verify that the size accounts at least for site header
        canvas_w = Math.ceil((window.innerWidth / 10) * 9);
        canvas_h = Math.ceil((window.innerHeight / 10) * 9);

        canvas.width = canvas_w;
        canvas.height = canvas_h;
    }
}
// ===========================

// ---------------------------
// Event handlers
// ---------------------------

// Adjusts the size of the canvas to the size of the browser
// and re-draws the content with the new scale
// body.onresize handler
function AdjustContent()
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
            case DIFFICULTY_SELECTION_SCREEN:
                DrawDifficultySelection();
                break;

        }
    }
}

// Helper function to calculate which button was pressed based 
// on current screen and coordinates of the click event.

function ButtonPressed(x, y)
{
    if (canvas != null)
    {
        var w = (canvas_w / 2);
        var h = (canvas_h / 2);
        var button_w = Math.ceil((w / 10) * 8);
        var button_h = Math.ceil((h / 10) * 5);

        // Coordinates of Play button on the start 
        var Play_x0 = Math.ceil(w / 10);
        var Play_x1 = Math.ceil(w / 10) + button_w;
        var Play_y0 = Math.ceil((h / 10) * 2.5) + h;
        var Play_y1 = Math.ceil((h / 10) * 2.5) + h + button_h;
        var High_x0 = Math.ceil(w / 10) + w;
        var High_x1 = Math.ceil(w / 10) + w + button_w;
        var High_y0 = Math.ceil((h / 10) * 2.5) + h;
        var High_y1 = Math.ceil((h / 10) * 2.5) + h + button_h;
        var Easy_x0 = Math.ceil(w / 10);
        var Easy_x1 = Math.ceil(w / 10) + button_w;
        var Easy_y0 = Math.ceil((h / 10) * 2.5) + h;
        var Easy_y1 = Math.ceil((h / 10) * 2.5) + h + button_h;
        var Hard_x0 = Math.ceil(w / 10) + w;
        var Hard_x1 = Math.ceil(w / 10) + w + button_w;
        var Hard_y0 = Math.ceil((h / 10) * 2.5) + h;
        var Hard_y1 = Math.ceil((h / 10) * 2.5) + h + button_h;

         // Navigate through different screens
        if (!isGameRunning)
        {
            // Hit button Play on start screen
            if (currentGameScreen == START_SCREEN &&
               (x >= Play_x0 && x <= Play_x1 && 
                y >= Play_y0 && y <= Play_y1))
            {
                return BUTTON_PLAY;
            }
            else if (currentGameScreen == START_SCREEN &&
                    (x >= High_x0 && x <= High_x1 && 
                     y >= High_y0 && y <= High_y1))
            {
                return BUTTON_HIGH_SCORE;
            }
            else if (currentGameScreen == DIFFICULTY_SELECTION_SCREEN &&
                    (x >= Easy_x0 && x <= Easy_x1 && 
                     y >= Easy_y0 && y <= Easy_y1))
            {
                return BUTTON_DIFFICULTY_EASY;
            }
            else if (currentGameScreen == DIFFICULTY_SELECTION_SCREEN &&
                    (x >= Hard_x0 && x <= Hard_x1 && 
                     y >= Hard_y0 && y <= Hard_y1))
            {
                return BUTTON_DIFFICULTY_HARD;
            }

        }
        /*
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
        */
    }
}

// Reads the input and fires the event depending on the 
// button clicked.
function ButtonClick(e)
{
    if (canvas != null)
    {
        var x = e.pageX - canvas.offsetLeft;
        var y = e.pageY - canvas.offsetTop;

        switch(ButtonPressed(x, y))
        {
            case BUTTON_PLAY:
                currentGameScreen = DIFFICULTY_SELECTION_SCREEN;
                AdjustContent();
                break;
            case BUTTON_HIGH_SCORE:
                alert('Hitted button Scores');
                break;
            case BUTTON_DIFFICULTY_EASY:
                alert('Hitted easy difficulty');
                break;
            case BUTTON_DIFFICULTY_HARD:
                alert('Hitted hard difficulty');
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
    isGamePaused = false;
    currentGameScreen = START_SCREEN;

    // Adjust size of the game's canvas
    // and draw the game's start screen
    AdjustContent();
}