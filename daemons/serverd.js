let net = require('net');
var SERVER_D = new Object();
SERVER_D.init = function() {
	var server = net.createServer();
	server.listen(global.config.PORT);
	server.on('connection',(socket)=>{
			let User = require(global.config.MUDLIB+'/obj/user.js').User;
			var user = new User(socket);
			SERVER_D.welcome(user);
			user.set_temp("is_loging",1);
			user.set_temp("login_step","getid");
			user.message("请输入您的ID(没做判断啊别瞎搞，老老实实输入英文3-8个字母的id):");
	})
	SERVER_D.onClose = function (user,p1) {
		user.quit();
	}
	SERVER_D.onError = function (user,p1) {
	}
	SERVER_D.server = server;
}

SERVER_D.welcome = function (user) {
	var fs = require('fs');
	var str = fs.readFileSync(global.config.MUDLIB+"/etc/welcome");
	user.message(global.app.ANSI.HIG+str+global.app.ANSI.NOR);
}
module.exports = SERVER_D;
