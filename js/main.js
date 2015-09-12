
angular.module('app',[])
  .controller('Main',function ($scope,$timeout) {
    var colors = {
  		'resta' : 'orange darken-2',
  		'suma' : 'green darken-2',
  		'gauss' : 'blue-grey',
  		'multiplicacion' : 'deep-orange darken-2'
    }

    $scope.animation = false;
    $scope.select = function (name) {
      $scope.animation = true;
      $scope.mainActive = true;
      $timeout(function () {
        $scope.secondMain = true;
        $scope.colorActive = true;
        $scope.seccionName = colors[name];
        console.log($scope.seccionName,name);
      }, 500);
      $timeout(function () {
        $scope.seccionActive = true;
        $scope.activeClose = true;
        $timeout(function () {
				  $scope.animation = false;
			  },500);
      }, 900);
      $scope.url = '/umg-al/template/'+ name +'.html';
    }
    $scope.close = function () {
      if($scope.animation) return;
      $scope.animation = true;
      $scope.seccionActive = false;
      $scope.activeClose = false;
      $timeout(function () {
        $scope.secondMain = false;
        $scope.colorActive = false;
        $scope.seccionName = '';
      }, 500);
      $timeout(function () {
        $scope.mainActive = false;
        $timeout(function () {
				  $scope.animation = false;
			  },500);
      }, 900);
    }
    //$scope.url = '/template/multiplicacion.html';
  });
