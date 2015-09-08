
angular.module('app')
  .controller('MultiplicacionCtrl',function ($scope) {
    $scope.agregar = true;
    $scope.quitar = true;
    $scope.vector = {};
    $scope.vector.n = 3;
    $scope.getNumber = function (num) {
      return new Array(num);
    }
    $scope.cambiarFilas = function (cambio) {
      if(($scope.vector.n < 3 && cambio == -1) || ($scope.vector.n > 3 && cambio == 1)) return;
      $scope.vector.n += cambio;
      if($scope.vector.n < 3 ){
        $scope.quitar = false;
      }else{
        $scope.quitar = true;
      }
      if($scope.vector.n > 3){
        $scope.agregar = false;
      }else{
        $scope.agregar = true;
      }

    }
  });
