class Cmd {
	main(user,arg) {
		if(arg.length < 1) {
			return;
		}
		var env = user.env;
		if(arg.length == 1 ) {
			if(env) {
				env.tell_room(user.get("name")+"自言自语不知道说了些什么。\n");
			}
		} else {
			arg.shift();	
			if(env) {
				env.tell_room(user.get("name")+"说："+global.app.ANSI.HIG+arg.join(" ")+global.app.ANSI.NOR+"\n");
			}
		}
	}
}

exports.Cmd = Cmd;
