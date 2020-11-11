class Room extends require(global.config.MUDLIB+"/inherit/environment.js").Environment {
	constructor() {
		super();
		this.set("name","东大街");
		var exits = new Object();
		exits["west"] = "/d/center";
		this.set("exits",exits);
	}
}
exports.Room = Room;
