var ROOM_D = new Object();

ROOM_D.rehash = function() {
	ROOM_D.rooms = new Object();
	let roomdir = global.config.MUDLIB+'/d/';
	var fs = require('fs');
	var roomfiles = fs.readdirSync(roomdir);
	for(var i = 0;i<roomfiles.length;i++) {
		let Room = require(roomdir+roomfiles[i]).ROOM;
		var room = new Room();
		var id = roomfiles[i].split('.')[0];
		ROOM_D.rooms[roomdir+id] = room;
	}
}
ROOM_D.getRoom = function(roomid) {
	return ROOM_D.rooms[global.config.MUDLIB+roomid];
}
ROOM_D.init = function() {
	ROOM_D.rehash();
}
module.exports = ROOM_D; 
