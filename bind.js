function bindF(f, o) {
	//проверить типы входящих аргументов
	var func = typeof f;
	if (func!=='function') throw new TypeError('not a function');
	var contextType = typeof o;
	//null or undefined refers to Object.window
	if (contextType!=='object' && contextType!='function' && contextType!=='undefined' && contextType!=='null' ) throw new TypeError('invalid context');
	var argsB = [];
	argsB = Array.prototype.slice.apply(arguments, [2]);
	return function() {
				var args = []; var argsTotal = [];
				args = Array.prototype.slice.apply(arguments);
				argsTotal = argsB;
				for (var i=0; i<args.length; i++) {
				argsTotal.push(args[i]);
				};
		  	return f.apply(o, argsTotal);
	};
} 

Object.prototype.x = 1;
var A = {}, B = {}, C = {};
A.x = 20; 
B['x']= 500;
C.x = 3000;

function foo(m, n) {
	sum =this.x + m + n;
  return sum;
};
var oz = bindF(foo, null, 200);
alert(oz(100));//301

var az = bindF(foo, A, 100);
alert(az(200));//320 

var bz = bindF(foo, B, 500);
alert(bz(300));//1300

var cz = bindF(foo, C, 200);
alert(cz(100));//3300
