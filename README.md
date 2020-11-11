一个用nodejs模仿mudlib的项目

SCREENSHOT

![Image text](https://raw.githubusercontent.com/nodemud/nodelib/main/nodelib-screenshot-01.png)


1. 在adm/config.js当中修改配置，只有两个MUDLIB(项目的绝对路径)和PORT（服务端口）
2. 在目录下用node main.js启动
3. node version >= v12.18.4
4. tree改了好多。。。有空再重写以下把
5. 以下是tree：

├── adm                  //存放全局管理的控件，都是Object

│   ├── app.js           //类似preload，加载和管理所有的daemons，通过global.app.XXX_D获得加载的daemon（单例）

│   └── config.js        //存放全局配置信息，目前有MUDLIB和PORT

├── cmds                 //指令目录，还没做分层分权限

│   ├── go.js            //移动

│   ├── hp.js            //hp例子

│   ├── look.js          //看

│   ├── name.js          //改名（user.dbase.name），用于测试

│   ├── quit.js          //退出

│   ├── rehash.js        //重新加载指令目录的指令，调用了global.app.COMMAND_D.rehash()

│   ├── save.js          //存盘

│   ├── say.js           //说话

│   └── shout.js         //shout。。。骗人的

├── d                    //房间目录，尚未分层

│   ├── center.js        //房间例子，同时是STARTROOM

│   └── eroad.js         //房间例子，用于测试行走

├── daemons              //daemon存放目录，都是Object

│   ├── ansi.js          //js里的宏不太好处理啊（主要是我不知道怎么处理，因此把宏也做成daemon了。。。这是ascii颜色符的文件

│   ├── commandd.js      //指令管理，用户指令入口，目前主要是指令文件的处理和globalalias的处理

│   ├── roomd.js         //管理房间，再怎么搞，js貌似也没法像lpc那样随心所欲的用单个文件来创建房间，还是需要集中管理和查找到房间物件

│   └── serverd.js       //创建管理服务端口，处理用户连线（并绑定到usesr身上，类似lpc的master->connect()），网络数据并分发给用户

├── data                 //用户存盘文件的目录

├── etc                  //配置文本，目前只有welcome

│   └── welcome          //登录欢迎文本

├── inherit              //继承文件，node的单继承太讨厌了，不爽

│   ├── dbase.js         //读写数据的类继承文件，都是Class

│   ├── environment.js   //容器的类继承文件，包括移动处理

│   ├── room.js          //房间的类继承文件，但是为什么要有它呢？目前看，完全是空的。。。。

│   └── save.js          //读写磁盘save和reload数据的类继承文件

├── main.js              //项目启动入口，加载config和app

├── obj                  //重复生成的那些obj的类文件，目前只有个user

│   └── user.js          //用户的类文件

└── README.md            //README


