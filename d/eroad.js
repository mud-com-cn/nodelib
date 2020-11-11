class ROOM extends require(global.config.MUDLIB+"/inherit/room.js").Room {
	constructor() {
		super();
		this.set("name","东大街");
		var exits = new Object();
		exits["west"] = "/d/center";
		this.set("exits",exits);
	}
}
exports.ROOM = ROOM;
