function bindF(f, o, param) {
	//проверить типы входящих аргументов
	var func = typeof f;
	if (func!=='function') throw new TypeError('not a function');
	var context = typeof o;
	//null or undefined refers to Object.window
	if (context!=='object' && context!='function' && context!=='undefined' && context!=='undefined' ) throw new TypeError('invalid context');
	context = o;
	param = arguments;
	return function() {
		var args = [];
		for(var i = 2; i < param.length; i++) args.push(param[i]); //
        for(var i = 0; i < arguments.length; i++) args.push(arguments[i]);
  	return f.apply(context, args);
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