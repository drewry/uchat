angular.module('app').value('ucToastr', toastr);

angular.module('app').factory('ucNotifier', function(ucToastr) {
	return {
		notify: function(msg) {
			ucToastr.success(msg);
			console.log(msg);
		},
		error: function(msg) {
			ucToastr.error(msg);
			console.log(msg);
		}
	}
})