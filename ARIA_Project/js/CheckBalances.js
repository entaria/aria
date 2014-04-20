function APICallController($scope, $http) {

    // Define the model properties. The view will loop
    // through the Balance array and genreate a li
    // element for every one of its items.



    $http.get('http://entarieBOB.azurewebsites.net/api/ccb/GetClientCardBalances').then(function (result) {

        $scope.balancess = result.data;


    }
       )


    /*	$scope.services = [
            {
                name: 'Web Development',
                price: 300,
                active:true
            },{
                name: 'Design',
                price: 400,
                active:false
            },{
                name: 'Integration',
                price: 250,
                active:false
            },{
                name: 'Training',
                price: 220,
                active:false
            }
    ]; */

    
    };

   
    // Helper method for calculating the total price

    $scope.total = function () {

        var total = 0;

        // Use the angular forEach helper method to
        // loop through the services array:

        angular.forEach($scope.balances, function (s) {
            if (s.active) {
                total += s.PointsBalance;
            }
        });

        return total;
    };







}