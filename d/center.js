class ROOM extends require(global.config.MUDLIB+"/inherit/room.js").Room {
	constructor() {
		super();
		this.set("name","中央广场");
		var exits = new Object();
                exits["east"] = "/d/eroad";
                this.set("exits",exits);
	}
}
exports.ROOM = ROOM;
