# angular-simple-local-storage
Simple local storage service for AngularJS projects, inspired by [this formula](http://learn.ionicframework.com/formulas/localstorage/) and [this module](https://github.com/angular/bower-angular-cookies).

## Installation

Install with bower (or download/clone).
```shell
bower install angular-simple-local-storage
```

Add the `<script>` in your `index.html`.
```html
<script src="/bower_components/angular-simple-local-storage/dist/ng-storage.min.js"></script>
```

Add the dependency in your app.
```javascript
angular.module('App', ['ngStorage']);
```
## Example
```javascript
(function() {

	'use strict';

	angular
		.module('App', ['ngStorage'])
		.controller('AppController', AppController);

	AppController.$inject = ['$scope', '$localStorage'];

	function AppController($scope, $localStorage) {
	    // Putting simple data and retrieving all local storage data
		$localStorage.put('avengers', 'Captain America, Iron Man, Thor, Hulk, Black Widow and Hawkeye');
		$localStorage.put('justice-league', 'Superman, Batman, Wonder Woman, Flash, Aquaman, Green Lantern and Cyborg.');
		console.log($localStorage.getAll());

		// Putting and retrieving simple data
		$localStorage.put('band', 'Pantera');
		console.log($localStorage.get('band'));

		// Putting and retrieving an object
		$localStorage.putObject('band', {
			name: 'Pantera',
			voice: 'Phil Anselmo',
			guitar: 'Dimebag Darrel',
			bass: 'Rex Brown',
			drums: 'Vinnie Paul Abbott'
		});
		console.log($localStorage.getObject('band'));
		console.log($localStorage.getObject('band').voice);

		// Removing data by the key
		$localStorage.remove('band');
		$localStorage.remove('avengers');
		$localStorage.remove('justice-league');
		console.log($localStorage.getObject('band'));
		console.log($localStorage.get('avengers'));
		console.log($localStorage.get('justice-league'));
	};

})();
```

If you find something wrong, feel free to contribute with this repository or contact me.