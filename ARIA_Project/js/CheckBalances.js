function APICallController($scope, $http){

    // Define the model properties. The view will loop
    // through the services array and genreate a li
    // element for every one of its items.

/*angular.module('myModule')
    .config(function ( $httpProvider) {        
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }).factory('featuresData', function ($http) {
        return{          
            doCrossDomainGet: function() {
                return $http({
                    url: 'http://entariabob.azurewebsites.net/api/ccb/GetClientCardBalances',
                    method: 'GET'
                })
            }        
        }
}); */

    // /api/cws/ApigetCCB/77/6

   //    $http.get('http://entariabob.azurewebsites.net/api/ccb/GetClientCardBalances').then(function (result) {
    $http.get('http://entariaBOB.azurewebsites.net/api/cws/ApigetCCB/77/5').then(function (result) {
       //    http://entariabob.azurewebsites.net/api/ccb/GetClientCardBalances
        $scope.ClientCardBalances = result.data;
    //    var record = result.data;
      //  alert($scope.ClientCardBalances[1].PointsBalance + " " + $scope.ClientCardBalances[1].CardId);
          //   alert($scope.ClientCardBalances.PointsBalance + " " + $scope.ClientCardBalances.CardId);


       
    //    alert("Result data " + $scope.ClientCardBalances.PointsBalance + " " + $scope.ClientCardBalances.CardId);
    }
       )

   
    

   

    $scope.Balance = function(){

        var total = 0;

        // Use the angular forEach helper method to
        // loop through the services array:
   //    alert("doing the Balance " + $scope.ClientCardBalances);
   //     angular.forEach($scope.ClientCardBalances, function (s) {
            
  //              total+= s.PointsBalance;
  //              alert("Balance " + s.PointsBalance)
   //     });
      //  alert("Total " + total);
   return $scope.ClientCardBalances.PointsBalance;
    };







}