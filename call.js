function callF(f, o) {
	var funcType = typeof f;
	var contextType = typeof o;
	if (funcType!='function') throw new TypeError('not a function');
	if (contextType!=='object' && contextType!='function' && contextType!=='undefined' && contextType!=='null' ) throw new TypeError('invalid context');
	return function() {
		var newarr = [];
		newarr = Array.prototype.slice.call(arguments);
		return f.apply(o, newarr);
	};
};

Object.prototype.x = 1;
var A = {}, B = {}, C = {};
A.x = 20; 
B['x']= 1000;
C.x = 3000;

function foo(m, n) {
	sum = this.x + m + n;
  return sum;
};
var oz = callF(foo);//301
alert(oz(100, 200));
var az = callF(foo, A);// null, undefined = Object.window
alert(az(100, 200));//320
var bz = callF(foo, B);// null, undefined = Object.window
alert(bz(100, 200));//1300
var cz = callF(foo, C);// null, undefined = Object.window
alert(cz(100, 200));//3300