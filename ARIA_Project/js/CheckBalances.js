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



       $http.get('http://entariabob.azurewebsites.net/api/ccb/GetClientCardBalances').then(function (result) {
  //  $.get('http://entariaBOB.azurewebsites.net/api/ccb/GetClientCardBalances').then(function (result) {
       //    http://entariabob.azurewebsites.net/api/ccb/GetClientCardBalances
        $scope.ClientCardBalances = result.data;

        alert($scope.ClientCardBalances[1].PointsBalance + " " + $scope.ClientCardBalances[1].CardId);
    }
       )

   
    

   

    $scope.total = function(){

        var total = 0;

        // Use the angular forEach helper method to
        // loop through the services array:

        angular.forEach($scope.ClientCardBalances, function (s) {
            
                total+= s.PointsBalance;
            
        });

        return total;
    };







}