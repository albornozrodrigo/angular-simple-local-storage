(function() {

	'use strict';

	angular
		.module('ngStorage', [])
		.factory('$localStorage', $localStorage);

	$localStorage.$inject = ['$window'];

	function $localStorage($window) {

		var factory = {
			getAll: getAll,
			put: put,
			get: get,
			putObject: putObject,
			getObject: getObject,
			putArray: putArray,
			getArray: getArray,
			remove: remove,
			removeAll: removeAll
		};

		function getAll() {
			var keys = Object.keys($window.localStorage);
			var len = keys.length;
			var content = [];
			var key;
			var item;
			while(len--) {
				key = keys[len];
				item = $window.localStorage.getItem(key);
				item = (angular.isObject(item)) ? angular.fromJson(item) : item;
				content.push({
					key: key,
					value: item
				});
			}
			return content;
		}

		function put(key, value) {
			if(!angular.isObject(value)) {
				$window.localStorage[key] = value;
			} else {
				console.log('The value could not be an object.');
			}
		}

		function get(key) {
			var content = $window.localStorage[key];
          	return content ? content : null;
		}

		function putObject(key, value) {
			if(angular.isObject(value)) {
				$window.localStorage[key] = angular.toJson(value);
			} else {
				console.log('The value might be an object.');
			}
		}

		function putArray(key, value) {
			if(angular.isArray(value)) {
				$window.localStorage[key] = angular.toJson(value);
			} else {
				console.log('The value might be an array.');
			}
		}

		function getObject(key) {
			var content = $window.localStorage[key];
          	return content ? angular.fromJson(content) : null;
		}

		function getArray(key) {
			var content = $window.localStorage[key];
          	return content ? angular.fromJson(content) : null;
		}

		function remove(key) {
			return $window.localStorage.removeItem(key) || null;
		}

		function removeAll() {
			var keys = Object.keys($window.localStorage);
			var len = keys.length;
			var key;
			while(len--) {
				key = keys[len];
				$window.localStorage.removeItem(key);
			}
			return getAll();
		}

		return factory;
	}

})();
