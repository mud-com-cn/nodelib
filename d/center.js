class Room extends require(global.config.MUDLIB+"/inherit/environment.js").Environment {
	constructor() {
		super();
		this.set("name","中央广场");
		var exits = new Object();
                exits["east"] = "/d/eroad";
                this.set("exits",exits);
	}
}
exports.Room = Room;
