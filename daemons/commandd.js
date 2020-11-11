var COMMAND_D = new Object();
COMMAND_D.doLogin = function(user,cmd) {
	user.set("id",cmd);
	if(user.restore()) {
		user.message("读取用户数据成功。\n");
	} else {
		user.setup();
		user.message("以"+user.get("id")+"为ID创建新角色成功。\n");
	}
	user.set_temp("is_loging",0);
	user.move(global.app.ROOM_D.getRoom("/d/center"));
	return 1;
}
COMMAND_D.doCommand = function (user,cmd) {
	cmd = cmd.trim();
	if(user.get_temp("is_loging")) { 
		return COMMAND_D.doLogin(user,cmd);
	}
	cmd = cmd.replace("\n","");
	var verbs = cmd.split(" ");
	if(COMMAND_D.cmds[verbs[0]] != undefined) {
		COMMAND_D.cmds[verbs[0]].main(user,verbs);
		return 1;
	} else if(COMMAND_D.doGlobalAlais(user,verbs)) {
		return 1;
	} else if(verbs[0][0] == '\'') {
		verbs[0] = verbs[0].substring(1);
		verbs.unshift("say");
		COMMAND_D.cmds[verbs[0]].main(user,verbs);
		return 1;
        } else {
		var env = user.env;
		if(env) {
			var exits = env.get("exits");
			if(exits && exits[verbs[0]]) {
				COMMAND_D.cmds["go"].main(user,["go",verbs[0]]);
				return 1;
			}
		} 
	}
	user.message("什么？\n");
}
COMMAND_D.doGlobalAlais = function (user,verbs) {
	if(COMMAND_D.globalalias[verbs[0]] != undefined) {
		var v2 = COMMAND_D.globalalias[verbs[0]].split(" ");
		if(v2.length > 1) {
			verbs.shift();
			for(var i = v2.length-1;i>=0;i--) {
				verbs.unshift(v2[i])
			}
		} else {
			verbs[0] = COMMAND_D.globalalias[verbs[0]];
		}
		COMMAND_D.cmds[verbs[0]].main(user,verbs);
		return 1;
	} else {
		return 0;
	}
}
COMMAND_D.rehash = function() {
	COMMAND_D.cmds = new Object();
	let cmddir = global.config.MUDLIB+'/cmds/';
	var fs = require('fs');
	var cmdfiles = fs.readdirSync(cmddir);
	for(var i = 0;i<cmdfiles.length;i++) {
		let Cmd = require(cmddir+cmdfiles[i]).Cmd;
		var cmd = new Cmd();
		var name = cmdfiles[i].split('.')[0];
		COMMAND_D.cmds[name] = cmd;
	}
}

COMMAND_D.init = function() {
	COMMAND_D.rehash();
	COMMAND_D.globalalias = new Object();
	COMMAND_D.globalalias["l"] = "look";
	COMMAND_D.globalalias["e"] = "go east";
	COMMAND_D.globalalias["w"] = "go west";
	COMMAND_D.globalalias["n"] = "go north";
        COMMAND_D.globalalias["s"] = "go south";
	COMMAND_D.globalalias["nw"] = "go northwest";
        COMMAND_D.globalalias["ne"] = "go northeast";
	COMMAND_D.globalalias["sw"] = "go southwest";
        COMMAND_D.globalalias["se"] = "go southeast";

}
module.exports = COMMAND_D; 
