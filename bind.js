function bindF(f, o) {
	//проверить типы входящих аргументов
	var func = typeof f;
	if (func!=='function') throw new TypeError('not a function');
	var contextType = typeof o;
	//null or undefined refers to Object.window
	if (contextType!=='object' && contextType!='function' && contextType!=='undefined' && contextType!=='null' ) throw new TypeError('invalid context');
	return function() {
		var args = [];
		args = Array.prototype.slice.apply(arguments);
  	return f.apply(o, args);
	};
} 

Object.prototype.x = 1;
var A = {}, B = {}, C = {};
A.x = 20; 
B['x']= 1000;
C.x = 3000;

function foo(m, n) {
	sum = this.x + m + n;
  return sum;
};
var oz = bindF(foo);//301
alert(oz(100, 200));
var az = bindF(foo, A);// null, undefined = Object.window
alert(az(100, 200));//320
var bz = bindF(foo, B);// null, undefined = Object.window
alert(bz(100, 200));//1300
var cz = bindF(foo, C);// null, undefined = Object.window
alert(cz(100, 200));//3300