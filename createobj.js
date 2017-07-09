function newObj (proto) {
//обработка ошибок - проверка переданного значения
//if (proto != null || object) alert("non valid proto"); return;
	var p = typeof proto; //проверка типа proto
  if (proto == null) throw new TypeError("try to create an Object.prototype");
  if (p!=="object" && p!=="function") throw new TypeError("invalid proto");
  //function Foo() {};//конструктор
  var obj = new Object;
  obj.__proto__ = proto;
  //Foo.prototype = proto;
  return obj;
};
var Z = {};
var A = newObj(Z);
Object.defineProperty(A, "name", { value: "Вася", configurable: true, writable: true, enumerable: true });
Object.getPrototypeOf(A);
alert(A.__proto__);

alert(A.name);
