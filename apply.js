function applyF(f, o) {
	var funcType = typeof f;
	var contextType = typeof o;
	if (funcType!='function') throw new TypeError('not a function');
	if (contextType!=='object' && contextType!='function' && contextType!=='undefined' && contextType!=='null' ) throw new TypeError('invalid context');
	return function() {
		var newarr = [];
		newarr = Array.prototype.slice.call(arguments);
		var newstr = newarr.join("");
		return f.call(o, newstr);
	};
};
var sign = 'global';
var A = {sign: 'local', B: {sign: 'internal'}};

function foo(m) {
	return this.sign + " " + m;
}
var oz = applyF(foo);//Object.prototype
alert(oz('value', ' is', ' shown'));
var az = applyF(foo, A);
alert(az('value', ' is', ' next'));
var bz = applyF(foo, B);
alert(bz('value', ' is', ' final'));