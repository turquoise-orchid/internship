//sum(n1)(n2)..(nN)() 
var val = 0;
function sum(n) {
	var nType = typeof n;
	if (nType === 'undefined') {
		return val;
	} else {
		val += n; 
		return sum;
	}
}
sum();//0
sum(100)(200)(300)();//600
sum(1)(200)(200)();//1001
sum(-1000)();//1