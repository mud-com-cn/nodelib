class Cmd {
	main(user,arg) {
		if(arg.length < 1) {
			return;
		}
		if(arg.length == 1 ) {
			user.message("你纵声长啸点点点。\n");
		} else {
			arg.shift();	
			user.message("你纵声长啸："+global.app.ANSI.HIG+arg.join(" ")+global.app.ANSI.NOR+"\n");
		}
	}
}

exports.Cmd = Cmd;
