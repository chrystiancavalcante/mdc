angular.module("testeMdc").controller("testeMdcCtrl", function ($scope, $http) {
	$scope.app = "testeMdc"
	$scope.cadastros = []
	$scope.estados = []

	var carregarCadastros = function () {
		$http.get("http://localhost:3412/cadastros").success(function (data) {
			$scope.cadastros = data;
		}).error(function (data, status) {
			$scope.message = "Aconteceu um problema: " + data;
		});
	};

	var carregarEstados = function () {
		$http.get("http://localhost:3412/estados").success(function (data) {
			$scope.estados = data;
		});
	};

	$scope.adicionarContato = function (contato) {
		contato.data = new Date();
		$http.post("http://localhost:3412/cadastros", contato).success(function (data) {
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			carregarCadastros();
		});
	};
	$scope.apagarCadastros = function (cadastros) {
		$scope.cadastros = cadastros.filter(function (contato) {
			if (!cadastro.selecionado) return cadastro;
		});
	};
	$scope.isCadastroselecionado = function (cadastros) {
		return cadastros.some(function (contato) {
			return contato.selecionado;
		});
	};
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	carregarCadastros();
	carregarEstados();
});