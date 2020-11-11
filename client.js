const iconv = require('iconv-lite');
const net = require('net');
const readline = require('readline');
// 2 创建套接字和输入输出命令行
let rl = readline.createInterface({
// 调用std接口
input:process.stdin,
output:process.stdout
})
let client = new net.Socket();
// 3 链接
client.connect(require('./adm/config.js').PORT,'localhost');
 
//client.setEncoding('utf8');
client.on('data',onData);
client.on('end',onEnd);
client.on('error',onError);
function onEnd()
{
	console.log("connect closed by server");
}

function onError(err)
{
	console.log(err);
}
rl.on('line',onRl);
function onData(buff) {
	console.log(iconv.decode(buff,'utf8'));
}
function onRl(line) {
	client.write(line);
}
