/////////////////////////////////////////
// 
// FILE: contants.js
// 
// This file constains the declaration of
// all the values considered as constants
// in the game. By conventions, this are 
// named in upper case letters only
//
/////////////////////////////////////////

// Constants for key mapping
var K_A = 65;
var K_S = 83;
var K_W = 87;
var K_D = 68;
var K_UP = 38;
var K_DOWN = 40;
var K_LEFT = 37;
var K_RIGHT = 39;

// Movement direction constants
var UP = 0;
var DOWN = 1;
var LEFT = 2;
var RIGHT = 3;
var NONE = -1;

// Screens constants
var START_SCREEN = 0;
var HIGH_SCORE_SCREEN = 1;

// Linear distance between two points
// TODO: Move to another file if enough auxiliar
//       functions
function Distance(obj1, obj2)
{
    var x = Math.pow((obj1.x - obj2.x), 2);
    var y = Math.pow((obj1.y - obj2.y), 2)
    var dist = Math.sqrt( (x + y));
    return dist;
}
