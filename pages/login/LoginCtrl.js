app.controller('LoginCtrl',['$scope','$state',function($scope,$state){
	
	$scope.submit=function(){
		if($scope.username=="admin" && $scope.password=="admin"){
	   		console.log("success");
	   		  $state.go('dashboard');
   		}	
	}
}]);