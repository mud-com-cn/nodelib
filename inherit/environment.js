class Environment extends require(global.config.MUDLIB+'/inherit/dbase.js').Dbase {
	inv = [];
	env = null;
	constructor() {
		super();
	}
	onMove(obj) {
		this.inv.push(obj);
	}
	onLeave(obj) {
		this.inv.splice(this.inv.indexOf(obj),1);
	}	
	move(obj) {
		obj.onMove(this);
		if(this.env == null) {
		} else {
			this.env.onLeave(this);
		}
		this.env = obj;
		global.app.COMMAND_D.doCommand(this,"look");

	}
	leave() {
		if(this.env) {
			this.env.onLeave(this);
		}
	}
	tell_room(msg) {
		this.inv.forEach((val)=> {
			val.message(msg);
		});
	}
	tell_room_exclude(msg,user) {
		this.inv.forEach((val)=> {
			if(val != user) {
                        	val.message(msg);
			}
                });
	}
}

exports.Environment = Environment;
