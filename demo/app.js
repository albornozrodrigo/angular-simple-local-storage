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

		$localStorage.put('band', 'Heaven & Hell');
		console.log($localStorage.get('band'));

		$localStorage.putObject('band', {
			name: 'Heaven & Hell',
			voice: 'Ronnie James Dio',
			guitar: 'Tony Iommi',
			bass: 'Geezer Butler',
			drums: 'Vinny Appice'
		});
		console.log($localStorage.getObject('band'));
		console.log($localStorage.getObject('band').voice);

		$localStorage.putArray('books', [
			'Cosmos, by Carl Sagan',
			'The God Delusion, by Richard Dawkins',
			'God is Not Great, by Christopher Hitchens',
			'The End of Faith, by Sam Harris',
			'The Universe From Nothing, by Lawrence Krauss'
		]);
		console.log($localStorage.getArray('books'));
		console.log($localStorage.getArray('books')[0]);

		$localStorage.remove('books');
		$localStorage.remove('band');
		$localStorage.remove('avengers');
		$localStorage.remove('justice-league');
		console.log($localStorage.getArray('books'));
		console.log($localStorage.getObject('band'));
		console.log($localStorage.get('avengers'));
		console.log($localStorage.get('justice-league'));
		console.log($localStorage.removeAll());
	};

})();
