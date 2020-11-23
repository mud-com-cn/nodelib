class Save extends require(global.config.MUDLIB+'/inherit/environment.js').Environment {
	constructor() {
		super();
	}
	save() {
		if(this.get_temp("is_loging"))
			return 0;
		var saveStr = JSON.stringify(this.query_entire_dbase());
		var fs = require('fs');
		var saveFile = this.query_save_file();
		this.asure_file(saveFile);
		fs.writeFileSync(saveFile,saveStr);
		return 1;
	}
	query_save_file() {
		var str;
		str = global.config.MUDLIB+"/data/"+this.get("id")[0]+"/"+this.get("id")+".o";
		return str;
	}
	restore() {
		var fs = require('fs');
		var saveFile = this.query_save_file();
		if(!fs.existsSync(saveFile)) 
			return 0;
		var str = fs.readFileSync(saveFile);
		var obj = JSON.parse(str);
		this.set_entire_dbase(obj);
		return 1;
	}
	asure_file(file) {
	        var dirs = file.split("/");
	        var dirname = "/";
        	var fs = require('fs');
	        for(var i = 1;i<dirs.length-1;i++) {
        	        dirname += dirs[i]+"/";
                	var t = fs.existsSync(dirname);
	                if(!t) {
        	                fs.mkdirSync(dirname);
                	}
        	}
	}
	
}

exports.Save = Save;
