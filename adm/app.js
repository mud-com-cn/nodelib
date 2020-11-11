var app = new Object();
app.ANSI = require(global.config.MUDLIB+'/daemons/ansi.js');
app.ANSI.init();
app.SERVER_D = require(global.config.MUDLIB+'/daemons/serverd.js');
app.SERVER_D.init();
app.COMMAND_D = require(global.config.MUDLIB+'/daemons/commandd.js');
app.COMMAND_D.init();
app.ROOM_D = require(global.config.MUDLIB+'/daemons/roomd.js');
app.ROOM_D.init();
app.LOGIN_D = require(global.config.MUDLIB+'/daemons/logind.js');
app.LOGIN_D.init();

module.exports = app;
