class Cmd {
	main(user,arg) {
		if(arg.length < 1) {
			return;
		} else {
			user.save();
		}
		return 1;
	}
}

exports.Cmd = Cmd;
