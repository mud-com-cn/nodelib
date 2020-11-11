class User extends require(global.config.MUDLIB+"/inherit/save.js").Save {
	socket;
	constructor(socket) {
		super();
		this.socket = socket;
		this.socket.setEncoding('utf8');
                this.socket.on('data',(chunk)=>{
                        global.app.SERVER_D.onCommand(this,chunk);
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
		id = id[0].toUpperCase() + id.slice(1)
		return this.get("name")+"("+id+")";
	}
	message(msg) {
		this.socket.write(msg);
	}
	setup() {
		this.set("name","测试名字");
		this.set("hp",100);
		this.set("mp",100);
		this.set("max_hp",100);
		this.set("max_mp",100);
		this.start_heart_beat();
	}
	quit() {
		this.leave();
		this.save();
	}
	start_heart_beat() {
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
