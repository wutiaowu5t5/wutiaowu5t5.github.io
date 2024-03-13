/*
 * @Description: 控制台输出
 * @Author: 5t5
 * @Time: 2024/1/31 14:50
 */

var now1 = new Date();

function createtime1() {
  var grt = new Date("12/11/1999 10:50:00"); //此处修改你的建站时间或者网站上线时间
  now1.setTime(now1.getTime() + 250);
  var days = (now1 - grt) / 1000 / 60 / 60 / 24;
  var dnum = Math.floor(days);
  
  var ascll = [
    `欢迎来到Nanami Kento的Blog!`,
    `
         
         ,--.                                                                            ,--.
       ,--.'|                                              ____                      ,--/  /|                         ___
   ,--,:  : |                                            ,'  , \`.  ,--,           ,---,': / '                       ,--.'|_
,\`--.'\`|  ' :                  ,---,                  ,-+-,.' _ |,--.'|           :   : '/ /                ,---,   |  | :,'   ,---.
|   :  :  | |              ,-+-. /  |              ,-+-. ;   , |||  |,            |   '   ,             ,-+-. /  |  :  : ' :  '   ,'\\
:   |   \\ | :  ,--.--.    ,--.'|'   |  ,--.--.    ,--.'|'   |  ||\`--'_            '   |  /      ,---.  ,--.'|'   |.;__,'  /  /   /   |
|   : '  '; | /       \\  |   |  ,"' | /       \\  |   |  ,', |  |,,' ,'|           |   ;  ;     /     \\|   |  ,"' ||  |   |  .   ; ,. :
'   ' ;.    ;.--.  .-. | |   | /  | |.--.  .-. | |   | /  | |--' '  | |           :   '   \\   /    /  |   | /  | |:__,'| :  '   | |: :
|   | | \\   | \\__\\/: . . |   | |  | | \\__\\/: . . |   : |  | ,    |  | :           |   |    ' .    ' / |   | |  | |  '  : |__'   | .; :
'   : |  ; .' ," .--.; | |   | |  |/  ," .--.; | |   : |  |/     '  : |__         '   : |.  \\'   ;   /|   | |  |/   |  | '.'|   :    |
|   | '\`--'  /  /  ,.  | |   | |--'  /  /  ,.  | |   | |\`-'      |  | '.'|        |   | '_\\.''   |  / |   | |--'    ;  :    ;\\   \\  /
'   : |     ;  :   .'   \\|   |/     ;  :   .'   \\|   ;/          ;  :    ;        '   : |    |   :    |   |/        |  ,   /  \`----'
;   |.'     |  ,     .-./'---'      |  ,     .-./'---'           |  ,   /         ;   |,'     \\   \\  /'---'          ---\`-'
'---'        \`--\`---'                \`--\`---'                     ---\`-'          '---'        \`----'
    
    `,
    "已运行",
    dnum,
    "天  ©2022 By Nanami Kento",
  ];
  
  setTimeout(
    console.log.bind(
      console,
      `\n%c${ascll[0]} %c ${ascll[1]} %c ${ascll[2]} %c${ascll[3]}%c ${ascll[4]}`,
      "color:#39c5bb",
      "",
      "color:#39c5bb",
      "color:#39c5bb",
      "color:#39c5bb",
    )
  );
}

createtime1();

function createtime2() {
  var ascll2 = [`NCC2-036`, `调用前置摄像头拍照成功，识别为「客人」`];
  
  setTimeout(
    console.log.bind(
      console,
      `%c ${ascll2[0]} %c ${ascll2[1]}`,
      "color:white; background-color:#10bcc0",
      "",
    )
  );
  
  setTimeout(console.log.bind(console, "%c WELCOME %c 欢迎光临", "color:white; background-color:#23c682", ""));
  
  setTimeout(
    console.warn.bind(
      console,
      "%c ⚡ Powered by Nanami Kento %c 你正在访问Nanami Kento的Blog",
      "color:white; background-color:#f0ad4e",
      ""
    )
  );
  
  setTimeout(console.log.bind(console, "%c W23-12 %c 系统监测到你已打开控制台", "color:white; background-color:#4f90d9", ""));
  
  setTimeout(
    console.warn.bind(console, "%c S013-782 %c 你现在正处于监控中", "color:white; background-color:#d9534f", "")
  );
}
createtime2();

// 重写console方法
console.log = function () { };
console.error = function () { };
console.warn = function () { };