var week = new Date().getDay();
// console.log(week);
switch (week) {
  case 0:
  document.write("今天是星期日");
break;
case 1:
document.write("今天是星期一");
break;
case 2:
document.write("今天是星期二");
break;
case 3:
document.write("今天星期三");
break;
case 4:
document.write("今天星期四");
break;
case 5:
document.write("今天星期五");
break;
default:
document.write("今天星期六");
break;
}
