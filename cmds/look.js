class Cmd {
	main(user,arg) {
		if(arg.length < 1) {
			return;
		}
		var env = user.env;
		this.look_room(user,env);
	}
	look_room(user,env) {
		if(env) {
			user.message(global.app.ANSI.BLU+"-"+env.get("name")+global.app.ANSI.NOR+"\n");
			user.message(global.app.ANSI.GRN+"    "+env.get("long")+global.app.ANSI.NOR+"\n");
			user.message(global.app.ANSI.HIW+"这里有:"+global.app.ANSI.NOR+"\n");
			env.inv.forEach((val)=> {
                   	     user.message("\t"+val.shortname()+"\n");
                	});
			var exits = env.get("exits");
			if(exits) {
				user.message(global.app.ANSI.GRN+"这里明显的出口有："+global.app.ANSI.HIG+Object.keys(exits).join(",")+global.app.ANSI.NOR+"\n");
			}
		}
	}
}

exports.Cmd = Cmd;
