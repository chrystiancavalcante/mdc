angular.module("testeMdc").controller("testeMdcCtrl", function ($scope) {
    $scope.app = "Teste MDC"
    $scope.cadastros = [

        { nome: "João Roberto da Silva", bairro: "Barra", cep: "22641-191", cidade: "Rio de janeiro", uf: "RJ" },
        { nome: "Pedro", bairro: "Santos", cep: "22641-190", cidade: "São Paulo", uf: "SP" }

    ]

    $scope.adicionarCadastro = function (cadastro) {
        $scope.cadastros.push(angular.copy(cadastro))
        delete $scope.cadastro
        alert("Cadastrado com sucesso!")
        $scope.cadastroForm.$setPristine()

    }

    $scope.edit = function (cadastro, i) {
        $scope.update = angular.copy(cadastro)
        index = i
    }
    $scope.save = function () {
        $scope.cadastros[index] = $scope.update
        $scope.update = ""
        alert("Cadastrado com sucesso!")
    }

    $scope.apagarCadastros = function (cadastros) {
        $scope.cadastros = cadastros.filter(function (cadastro) {
            if (!cadastro.selecionado) return cadastro
            alert("Deseja excluir cadastro ?")

        })
    }
    $scope.isCadastroSelecionado = function (cadastros) {
        return cadastros.some(function (cadastro) {
            return cadastro.selecionado
        })
    }
    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao
    }
})
