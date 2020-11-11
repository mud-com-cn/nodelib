class Dbase{
    dbase = new Object();
    temp_dbase = new Object();
    constructor(){
    }
    set(p,data) {
	this.dbase[p] = data;
	return this.dbase[p];
    }
    get(p) {
	return this.dbase[p];
    }
    add(p,data) {
	if(this.dbase[p] == undefined) {
		this.set(p,data);
	} else {
		this.set(p,this.query(p)+data);
	}
	return this.dbase[p];
    }
    query_entire_dbase() {
	return this.dbase;
    }
    set_entire_dbase(obj) {
	this.dbase = obj;
    }

    set_temp(p,data) {
        this.temp_dbase[p] = data;
        return this.temp_dbase[p];
    }
    get_temp(p) {
        return this.temp_dbase[p];
    }
    add_temp(p,data) {
        if(this.temp_dbase[p] == undefined) {
                return this.set_temp(p,data);
        } else {
                return this.set_temp(p,this.get_temp(p)+data);
        }
    }
}

exports.Dbase = Dbase;
