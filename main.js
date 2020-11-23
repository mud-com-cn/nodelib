global.config = require('./adm/config.js');
global.app = require(global.config.MUDLIB+'/adm/app.js');
console.log(global.app.ANSI.HIG+"Welcome to NodeLib server"+global.app.ANSI.NOR);
