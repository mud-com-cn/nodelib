var LOGIN_D = new Object();
LOGIN_D.users = [];
LOGIN_D.addUsers = function(user) {
	if(LOGIN_D.users.indexOf(user)>=0) {
		// already in users
	} else {
		LOGIN_D.users.push(user);
	}
}
LOGIN_D.removeUsers = function(user) {
	if(LOGIN_D.users.indexOf(user)>=0) {
                // already in users
		LOGIN_D.users.slice(LOGIN_D.users.indexOf(user),1);
        } else {
        }
}
LOGIN_D.doLoginCmd = function(user,cmd) {
	switch(user.get_temp("login_step")) {
	case "getid" :
	        user.set("id",cmd);
		if(user.restore()) {
			user.start_heart_beat();
                	user.message("读取用户数据成功。\n");
			LOGIN_D.enterWorld(user);
        	} else {
			user.set_temp("login_step","getname");
			user.message("创建新角色。\n请输入中文名字：");
		}
		break;
	case "getname" :
		user.set("name",cmd);
		user.setup();
		user.save();
		user.start_heart_beat();
		user.message("以"+user.shortname()+"创建角色成功\n");
		LOGIN_D.enterWorld(user);
		break;
	}
}
LOGIN_D.enterWorld = function(user) { 
	LOGIN_D.addUsers(user);
        user.set_temp("is_loging",0);
	user.set_temp("login_step",0);
        user.move(global.app.ROOM_D.getRoom("/d/center"));
        return 1;
}
LOGIN_D.init = function() {
}
module.exports = LOGIN_D; 
