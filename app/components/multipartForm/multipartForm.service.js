'use strict';


angular.module('RunBeatApp')
  .service('multipartForm', ['$http', function($http){
	this.post = function(uploadUrl, data){
		var fd = new FormData();

		for(var key in data){
			fd.append(key, data[key]);
		}
		$http.post(uploadUrl, fd, {
			transformRequest: angular.indentity,
			headers: { 'Content-Type': undefined }
		});
	},
	this.put = function(uploadUrl, data){
		var fd = new FormData();
		for(var key in data){
			fd.append(key, data[key]);
		}
		console.log(fd);
		return $http.put(uploadUrl, fd, {
			transformRequest: angular.indentity,
			headers: { 'Content-Type': undefined }
		});
	}
}]);
