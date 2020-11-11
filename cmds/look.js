class Cmd {
	main(user,arg) {
		if(arg.length < 1) {
			return;
		}
		var env = user.env;
		if(arg.length == 1) {
			return this.look_room(user,env);
		}
		if(arg.length == 2) {
			var ob = env.find_in_inv(arg[1]);
			user.message(ob.desc()+"\n");
		}
	}
	look_room(user,env) {
		if(env) {
			user.message(global.app.ANSI.BLU+"-"+env.get("name")+global.app.ANSI.NOR+"\n");
			user.message(global.app.ANSI.GRN+"    "+env.get("long")+global.app.ANSI.NOR+"\n");
			user.message(global.app.ANSI.HIW+"这里有:"+global.app.ANSI.NOR+"\n");
			for(var i = env.inv.length-1 ;i>=0 ;i--) {
                   	     user.message("\t"+env.inv[i].shortname()+"\n");
			}
			var exits = env.get("exits");
			if(exits) {
				user.message(global.app.ANSI.GRN+"这里明显的出口有："+global.app.ANSI.HIG+Object.keys(exits).join(",")+global.app.ANSI.NOR+"\n");
			}
		}
	}
}

exports.Cmd = Cmd;
