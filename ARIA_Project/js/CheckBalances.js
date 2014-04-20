function APICallController($scope, $http){

    // Define the model properties. The view will loop
    // through the services array and genreate a li
    // element for every one of its items.


   
       $http.get('http://entariabob.azurewebsites.net/api/ccb/GetClientCardBalances').then(function (result) {
  //  $.get('http://entariaBOB.azurewebsites.net/api/ccb/GetClientCardBalances').then(function (result) {
       //    http://entariabob.azurewebsites.net/api/ccb/GetClientCardBalances
        $scope.ClientCardBalances = result.data;

       
    }
       )

   
    

   

    $scope.total = function(){

        var total = 0;

        // Use the angular forEach helper method to
        // loop through the services array:
		
        angular.forEach($scope.balances, function(s){
            
                total+= s.PointsBalance;
            
        });
		
        return total;
    };

	


	
	  
	    
}