var LOGIN_D = new Object();

LOGIN_D.doLoginCmd = function(user,cmd) {
        user.set("id",cmd);
        user.setup();
        if(user.restore()) {
                user.message("读取用户数据成功。\n");
        } else {
                user.message("以"+user.get("id")+"为ID创建新角色成功。\n");
                user.save();
        }
        user.set_temp("is_loging",0);
        user.move(global.app.ROOM_D.getRoom("/d/center"));
        return 1;
}

LOGIN_D.init = function() {
}
module.exports = LOGIN_D; 
