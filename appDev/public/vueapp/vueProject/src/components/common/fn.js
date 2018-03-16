/*
//基本导出方式
function log (e) {
	console.log("打印对象为：%O",e);
}
var alt = function (e) {
	alert("打印对象为：" + e);
}
export{ log, alt}
*/

let commonfn={}

commonfn.log = function (...e) {
	console.log("打印对象为：%O",...e);
}

commonfn.alt = function (e) {
	alert("打印对象为：" + e);
}

commonfn.checklogin = function (e) {
	
}

 

module.exports = commonfn;