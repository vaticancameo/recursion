
var stringifyJSON = function(obj) {
	var type = typeof obj;
	if (Array.isArray(obj)) {
		var result = "";
		for (var i = 0; i < obj.length; i++) {
			result += stringifyJSON(obj[i]) + ",";
		};
		return "[" + result.slice(0, -1) + "]";
	} else {
		if(obj === null) {
			return "null";
		}
		else if (type === "number" || type === "boolean") {
			return String(obj);
		}
		else if (type === "string") {
			return '"' + obj + '"';
		} 
		else {
			var result = "";
			for (var p in obj) {
				if (obj[p] === undefined || typeof p === 'function' || typeof obj[p] === 'function') {}
				else {
					result += '"' + p + '":' + stringifyJSON(obj[p]) + ","; 
				}
			}
			return "{" + result.slice(0,-1) + "}";
		} 
	}
};

	
