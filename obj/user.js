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
		return this.get("name")+"("+this.get("id")+")";
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
		this.save();
	}
	quit() {
		this.leave();
		this.save();
	}
}

exports.User = User;
