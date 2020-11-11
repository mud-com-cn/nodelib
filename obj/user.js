class User extends require(global.config.MUDLIB+"/inherit/save.js").Save {
	socket;
	cmdbuf = "";
	constructor(socket) {
		super();
		this.socket = socket;
		this.socket.setEncoding('utf8');
                this.socket.on('data',(chunk)=>{
			console.log("socket on data",chunk);
			global.app.COMMAND_D.doCommand(this,chunk.trim());
                })
                this.socket.on('close',(p1)=>{
                        global.app.SERVER_D.onClose(this,p1);
                })
                this.socket.on('error',(p1)=>{
			global.app.SERVER_D.onError(this,p1);
                })

	}
	shortname() {
		var id = this.get("id");
		if(id.length) {
			id = id[0].toUpperCase() + id.slice(1)
			return this.get("name")+"("+id+")";
		} else {
			return "Wrong ID";
		}
	}
	message(msg) {
		this.socket.write(msg);
	}
	setup() {
		this.set("hp",100);
		this.set("mp",100);
		this.set("max_hp",100);
		this.set("max_mp",100);
	}
	quit() {
		this.stop_heart_beat();
		this.leave();
		this.save();
	}
	start_heart_beat() {
		this.stop_heart_beat(this.heart_beat);
                setInterval(this.heart_beat,global.config.HEARTBEAT,this);
        }
        stop_heart_beat() {
                clearInterval(this.heart_beat);
        }
	//注意：这个setinterval是个全局（属于window），所以不能用this来获得user自己，必须传进来
	//烦躁！！！！
        heart_beat(user) {
                user.message(user.shortname()+"HB ticker for "+global.config.HEARTBEAT+"\n");
        }

}

exports.User = User;
