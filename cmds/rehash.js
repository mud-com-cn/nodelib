class Cmd {
	main(user,arg) {
		if(arg.length < 1) {
			return;
		} else {
			global.app.COMMAND_D.rehash();
			user.message("指令更新完毕。\n");
		}
	}
}

exports.Cmd = Cmd;
