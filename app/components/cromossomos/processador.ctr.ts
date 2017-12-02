/// <reference path="../../app.d.ts" />

module Blank {

    export class ProcessadorController {

        private qtdLoops:number = 120;
        private tamanhoPopulacao:number = 80;
        private tamanhoCromossomo:number = 30;
        private populacao:any = [];
        private novoCromossomo:any = [];

        private idCromossomoA:number;
        private idCromossomoB:number;

        private idCidadeA:number;
        private idCidadeB:number;


        constructor(private $scope: ng.IScope,
                    private $util: UtilController) {

            this.carregaPopulacao();


            for (var i = 0; i < 40; ++i) {
                //75% de change de acontecer
                var aconteceuCrossOver = (Math.floor(Math.random() * 4)) <= 2;
                if (aconteceuCrossOver) {
                    this.crossOver();
                }
            }

            this.helitismo();
        }

        private randomizarCidades():any {
            var cidadesRand = [];

            for (var i = 0; i < this.todasAsCidades.length; ++i) {
                var indiceCidade = Math.floor(Math.random() * 30);
                var cidade = this.todasAsCidades[indiceCidade];

                while (cidadesRand.indexOf(cidade) >= 0) {
                    indiceCidade = Math.floor(Math.random() * 30);
                    cidade = this.todasAsCidades[indiceCidade];
                }

                cidadesRand.push(cidade);
            }

            return cidadesRand;
        }

        private calculaFitnes(cidades:any):number {
            // TODO: Fórmula do fitness
            return 30;
        }

        private carregaPopulacao():void {
            for (var i = 0; i < this.tamanhoPopulacao; ++i) {
                var cromossomo = {};

                cromossomo["cidades"] = this.randomizarCidades();

                cromossomo["fitnes"] = this.calculaFitnes(cromossomo["cidades"]);


                this.populacao.push(cromossomo);
            }
        }

        private buscaIdsDosCromossomos():void {
            this.idCromossomoA = Math.floor((Math.random() * 80) + 1);
            this.idCromossomoB = Math.floor((Math.random() * 80) + 1);

            while(this.idCromossomoA === this.idCromossomoB) {
                this.idCromossomoB = Math.floor((Math.random() * 80) + 1);
            }
        }

        private buscaIdsDasCidades():void {
            this.idCidadeA = Math.floor((Math.random() * 30) + 1);
            this.idCidadeB = Math.floor((Math.random() * 30) + 1);

            while(this.idCidadeA === this.idCidadeB) {
                this.idCidadeB = Math.floor((Math.random() * 30) + 1);
            }
        }

        private crossOver():void {
            this.buscaIdsDosCromossomos();

            var cidadesNaoAdicionadas = angular.copy(this.todasAsCidades);

            var cromossomoX = {
                id: (this.populacao.length + 1),
                cidades: []
            };


            // Monta o cromossomo X
            for (var i = 0; i < this.tamanhoCromossomo; ++i) {
                var deQualCromossomoVouPegar = Math.floor(Math.random() * 2);
                
                // default = pega cidade do cromossomoA
                var cidadeA = this.populacao[this.idCromossomoA][i];
                var cidadeB = this.populacao[this.idCromossomoB][i];
                var cidade = null;

                if (cidadeA !== cidadeB) {
                    if (deQualCromossomoVouPegar == 0) {
                        cidade = cidadeA;
                    } else {
                        cidade = cidadeB
                    }
                }

                cidadesNaoAdicionadas.splice(cidadesNaoAdicionadas.indexOf(cidade), 1);

                cromossomoX.cidades.push(cidade);
            }

            for (var i = 0; i < this.tamanhoCromossomo; ++i) {
                if (cromossomoX.cidades[i] == null) {
                    cromossomoX.cidades[i] = cidadesNaoAdicionadas[0];
                    cidadesNaoAdicionadas.shift();
                }
            }

            // Mutação
            // 10% de change de acontecer
            var aconteceuMutacao = (Math.floor(Math.random() * 10)) == 0;
            if (aconteceuMutacao) {
                this.buscaIdsDasCidades();
                var aux = cromossomoX.cidades[this.idCidadeA];
                cromossomoX.cidades[this.idCidadeA] = cromossomoX.cidades[this.idCidadeB];
                cromossomoX.cidades[this.idCidadeB] = aux;
            }

            this.populacao.push(cromossomoX);
        }

        private helitismo():void {
            // TODO: Ordenar pelo fitnes
            var tamanhoDaPopulacaoAtual = this.populacao.length;
            var indiceQueVaiSerRemovidoDaPopulacao = Math.floor(Math.random() * tamanhoDaPopulacaoAtual);

            this.populacao.splice(indiceQueVaiSerRemovidoDaPopulacao, 1);
        }
        
    }

}

app.controller('ProcessadorController', ['$scope', 'UtilController', Blank.ProcessadorController]);