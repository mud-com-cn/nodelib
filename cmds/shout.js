class Cmd {
	main(user,arg) {
		if(arg.length < 1) {
			return;
		}
		var env = user.env;
		if(arg.length == 1 ) {
			if(env) {
				var str = user.shortname()+"纵声长啸。\n";
			}
		} else {
			arg.shift();	
				var str = user.shortname()+"纵声长啸："+global.app.ANSI.HIG+arg.join(" ")+global.app.ANSI.NOR+"\n";
		}
		global.app.LOGIN_D.users.forEach((val)=> {
			val.message(str);
		});
	}
}

exports.Cmd = Cmd;
