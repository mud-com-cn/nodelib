class Cmd {
	main(user,arg) {
		if(arg.length < 1) {
			return 0;
		} else if(arg.length == 1) {
			user.message("你要往那个方向走？\n");
			return 0;
		} else {
			var env = user.env;
			if(env) {
				var exits = env.get("exits");
				if(exits ) {
					if(exits[arg[1]]) {
						user.env.tell_room_exclude(user.get("name")+"离开了。\n",user);
						user.move(global.app.ROOM_D.getRoom([exits[arg[1]]]));
						user.env.tell_room_exclude(user.get("name")+"走了过来。\n",user);
						return 1;
					} else {
						user.message("这里没有这个方向。\n");
						return 1;
					}
				} else {
					user.message("这里没有明显的出口。\n");
					return 0;
				}
			}
		}
	}
}

exports.Cmd = Cmd;
