class Cmd {
	main(user,arg) {
		if(arg.length < 1) {
			return;
		} else {
			var str = "";
			str += user.get("name") + "的属性：\n";
			str += "气血："+user.get("hp")+"/"+user.get("max_hp")+"\n";
			str += "魔法："+user.get("mp")+"/"+user.get("max_mp")+"\n";
			user.message(global.app.ANSI.HIG+str+global.app.ANSI.NOR);
		}
	}
}

exports.Cmd = Cmd;
