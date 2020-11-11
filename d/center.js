class Room extends require(global.config.MUDLIB+"/inherit/environment.js").Environment {
	constructor() {
		super();
		this.set("name","中央广场");
		this.set("long","这里是中央广场，我是凑数的描述，没有@LONG LONG做文本段分割真不方便啊。。。。\n只能手写换行了。。。。\n还没完。。。。。。描述描述");
		var exits = new Object();
                exits["east"] = "/d/eroad";
                this.set("exits",exits);
	}
}
exports.Room = Room;
