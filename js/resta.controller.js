
angular.module('app')
	.controller('RestaCtrl',function ($scope) {
		$scope.agregar = true;
    $scope.quitar = true;
    $scope.matriz = {};
    $scope.matriz.n = 2;
    $scope.getNumber = function (num,nombre) {
      if($scope.matriz[nombre] && $scope.matriz[nombre].length){
        if($scope.matriz[nombre].length != num ){
          $scope.matriz[nombre] = new Array(num);
        }
      }else{
        $scope.matriz[nombre] = new Array(num);
      }

      return $scope.matriz[nombre];
    }
    $scope.cambiarFilas = function (cambio) {
      if(($scope.matriz.n < 3 && cambio == -1) || ($scope.matriz.n > 3 && cambio == 1)) return;
      $scope.matriz.n += cambio;
      if($scope.matriz.n < 3 ){
        $scope.quitar = false;
      }else{
        $scope.quitar = true;
      }
      if($scope.matriz.n > 3){
        $scope.agregar = false;
      }else{
        $scope.agregar = true;
      }
    }
    $scope.$watchCollection('matriz.primera',resolver);
    $scope.$watchCollection('matriz.segunda',resolver);
		function resolver() {
			$scope.matriz.resultado = new Array($scope.matriz.n * $scope.matriz.n);
			for(var index = 0 ; index < $scope.matriz.n * $scope.matriz.n; index++ ){
				$scope.matriz.resultado[index] = $scope.matriz.primera[index] - $scope.matriz.segunda[index];
			}
		}
	});
