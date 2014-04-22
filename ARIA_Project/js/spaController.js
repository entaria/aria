// create the module and name it scotchApp
	var SpaModule = angular.module('spaApp', [])

	// create the controller and inject Angular's $scope
	SpaModule.controller('spaController', function($scope) {

		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	angular.bootstrap(document.getElementById("main"),['spaApp']);