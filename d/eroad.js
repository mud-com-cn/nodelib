class Room extends require(global.config.MUDLIB+"/inherit/environment.js").Environment {
	constructor() {
		super();
		this.set("name","东大街");
		this.set("long","东大街，西边连着中央广场，这就是凑数的描述，用来测试行走啊，两个房间就能走路了。\n凑数凑数，描述描述。金碧辉煌浑然天成巧夺天工定期报告");
		var exits = new Object();
		exits["west"] = "/d/center";
		this.set("exits",exits);
	}
}
exports.Room = Room;
