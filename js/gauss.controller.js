'strict mode';
angular.module('app')
	.controller('GaussCtrl',function ($scope) {
		$scope.matriz = {};
    $scope.matriz.n = 3;
		$scope.resultado = [0,0,0];
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
		$scope.$watchCollection('matriz.tercera',resolver);
		function resolver () {

			//var matriz = $scope.matriz.primera.concat()//[angular.copy($scope.matriz.primera),angular.copy($scope.matriz.segunda),angular.copy($scope.matriz.tercera)];
			$scope.resultado = gauss([$scope.matriz.primera.slice(),$scope.matriz.segunda.slice(),$scope.matriz.tercera.slice()]);

		}

		function gauss(matriz) {
		    var n = matriz.length;

		    for (var i=0; i<n; i++) {
						// Busca el maximo en esta columna
		        var maxEl = Math.abs(matriz[i][i]);
		        var maxRow = i;
		        for(var k=i+1; k<n; k++) {
		            if (Math.abs(matriz[k][i]) > maxEl) {
		                maxEl = Math.abs(matriz[k][i]);
		                maxRow = k;
		            }
		        }
		        for (var k=i; k<n+1; k++) {
		            var tmp = matriz[maxRow][k];
		            matriz[maxRow][k] = matriz[i][k];
		            matriz[i][k] = tmp;
		        }

		        for (k=i+1; k<n; k++) {
		            var c = -matriz[k][i]/matriz[i][i];
		            for(var j=i; j<n+1; j++) {
		                if (i==j) {
		                    matriz[k][j] = 0;
		                } else {
		                    matriz[k][j] += c * matriz[i][j];
		                }
		            }
		        }
		    }

		    var x= new Array(n);
		    for (var i=n-1; i>-1; i--) {
		        x[i] = matriz[i][n]/matriz[i][i];
		        for (var k=i-1; k>-1; k--) {
		            matriz[k][n] -= matriz[k][i] * x[i];
		        }
		    }
		    return x;
		}
	});
