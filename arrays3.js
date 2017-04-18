function flatten(arrays) {
    var _arrays = arrays instanceof Array ? arrays : [];
	// Œ‹‡
    return _arrays.reduceRight((v, sum) => sum.concat(v), []);
}

function platten(name) {
	alert(name);
}

function getDate(name) {
	alert(name);
}