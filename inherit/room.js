class Room extends require(global.config.MUDLIB+"/inherit/environment.js").Environment {
    constructor(){
	super();
    }
}

exports.Room = Room;
