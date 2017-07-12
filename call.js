function callF(f, o) {
	var funcType = typeof f;
	var contextType = typeof o;
	if (funcType!='function') throw new TypeError('not a function');
	if (contextType!=='object' && contextType!='function' && contextType!=='undefined' && contextType!=='null' ) throw new TypeError('invalid context');
		var args = [], m= [];
		
		args = Array.prototype.slice.apply(arguments); 
		m = args.splice(0, 2);
		
		
        //for(var i = 2; i < arguments.length; i++) args.push(arguments[i]);
		var result = f.apply(o, args);
		return result;
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

var oz = callF(foo, null, 100, 200);//301
var o = foo.call(null, 100, 200);

var az = callF(foo, A, 100, 200);// null, undefined = Object.window
var a = foo.call(A, 100, 200);

var bz = callF(foo, B, 100, 200);// null, undefined = Object.window
var b = foo.call(B, 100, 200);

var cz = callF(foo, C, 100, 200);// null, undefined = Object.window
var c = foo.call(C, 100, 200);
