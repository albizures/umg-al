'strict mode';
angular.module('app')
  .controller('MultiplicacionCtrl',function ($scope) {
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
      for(var index = 0 ; index < $scope.matriz.n * $scope.matriz.n; index+=$scope.matriz.n ){
        
        var temp = $scope.matriz.primera.slice(index, index + $scope.matriz.n );

          for(var index2 = 0 ; index2 < temp.length; index2++){

            var temp2 = $scope.matriz.segunda.slice(index2*$scope.matriz.n,(index2*$scope.matriz.n) + $scope.matriz.n);
            for(var index3 = 0; index3 < temp2.length; index3++){

              var suma = Number(temp[index2] || 0)  * Number(temp2[index3] || 0);
              $scope.matriz.resultado[index + index3] = isNaN(Number($scope.matriz.resultado[index + index3]))? 0 : $scope.matriz.resultado[index + index3];
              $scope.matriz.resultado[index + index3] = $scope.matriz.resultado[index + index3] + suma;
            }
          }
      }
    }
  });
