app.controller('friendcontroller', ['$scope','$http', function($scope,$http){
	$http({
        method: 'GET',
        url: './data/friends.json',
     }).then(function success(response)
    {
    	$scope.friends=response.data.friends;
       console.log("success",response.data);
    },
    function error(response) {
       console.log("Fails in view Controller");
    });
	
     $scope.showModal = function(friend){
        console.log("clicked Freinds",friend);
        $scope.selectedFriend = friend;
    }
}])