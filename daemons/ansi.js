var ANSI = new Object();
ANSI.ESC = "";
ANSI.CSI = ANSI.ESC+"[";
ANSI.HIG = ANSI.ESC+"[1;32m";
ANSI.NOR = ANSI.ESC+"[2;37;0m";

ANSI.init = function() {

}

module.exports = ANSI; 
