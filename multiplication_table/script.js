angular.module('app',[])
.controller('MultiplicationCtrl',function($scope,$attrs){
  $scope.numberLimit = $attrs.initialNumberLimit || 10;
  $scope.numbers = function(){
    var arr =[];
    for(i=0;i<$scope.numberLimit;i++){
      arr[i] = i+1;
    }
    return arr;
  };
  $scope.compute = function(m,n){
    return m*n;
  };
});