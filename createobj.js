function newObj (proto) {
	var p = typeof proto; //проверка типа proto
	if (proto == null) throw new TypeError("try to create an Object.prototype");
	if (p!=="object" && p!=="function") throw new TypeError("invalid proto");
	function F() {};
	F.prototype = proto;
	return new F();
};
var Z = {};
var A = newObj(Z);
Object.getPrototypeOf(A);// [object Object]
Object.getPrototypeOf(Object.prototype); //null