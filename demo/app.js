(function() {

	'use strict';

	angular
		.module('App', ['ngStorage'])
		.controller('AppController', AppController);

	AppController.$inject = ['$scope', '$localStorage'];

	function AppController($scope, $localStorage) {
		$localStorage.put('avengers', 'Captain America, Iron Man, Thor, Hulk, Black Widow and Hawkeye');
		$localStorage.put('justice-league', 'Superman, Batman, Wonder Woman, Flash, Aquaman, Green Lantern and Cyborg.');
		console.log($localStorage.getAll());

		$localStorage.put('band', 'Pantera');
		console.log($localStorage.get('band'));

		$localStorage.putObject('band', {
			name: 'Pantera',
			voice: 'Phil Anselmo',
			guitar: 'Dimebag Darrel',
			bass: 'Rex Brown',
			drums: 'Vinnie Paul Abbott'
		});
		console.log($localStorage.getObject('band'));
		console.log($localStorage.getObject('band').drums);

		$localStorage.remove('band');
		$localStorage.remove('avengers');
		$localStorage.remove('justice-league');
		console.log($localStorage.getObject('band'));
		console.log($localStorage.get('avengers'));
		console.log($localStorage.get('justice-league'));
	};

})();