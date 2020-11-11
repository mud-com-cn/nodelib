class Cmd {
	main(user,arg) {
		if(arg.length < 1) {
			return;
		} else {
			user.save();
			user.socket.end();
		}
		return 1;
	}
}

exports.Cmd = Cmd;
