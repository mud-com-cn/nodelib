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
			user.message(env.get("name")+"\n");
			user.message("这里有:\n");
			env.inv.forEach((val)=> {
                   	     user.message("\t"+val.shortname()+"\n");
                	});
			var exits = env.get("exits");
			if(exits) {
				user.message("这里明显的出口有："+Object.keys(exits).join(",")+"\n");
			}
		}
	}
}

exports.Cmd = Cmd;
