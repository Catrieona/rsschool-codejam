function make () {
      var x = [arguments[0]];

      var func = function (arg) {
    	if (typeof arg !== "function") {
			for(let i = 0; i<arguments.length;i++){
				x.push(arguments[i]);
			}
		} else {
			return x.reduce(arg)
		}
        return func;
      };

    return func;
};
