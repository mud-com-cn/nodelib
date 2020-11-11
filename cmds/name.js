class Cmd {
	main(user,arg) {
		if(arg.length < 1) {
			return;
		}
		if(arg.length == 1 ) {
			user.message("你要把名字改成什么？\n");
		} else {
			arg.shift();
			user.set("name",arg.join(" "));
			user.message("你把名字改成了"+user.get("name")+"\n");
		}
	}
}

exports.Cmd = Cmd;
