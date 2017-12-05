/// <reference path="../../app.d.ts" />

module Blank {

    export class ProcessadorController {

          private exibirResultado:boolean = false;
          private taxaMutacao:number = 10;
          private taxaCrossOver:number = 75;

        private todasAsCidades:any = [
            {nome: "cidade_001", x: 1020, y:1900},
            {nome: "cidade_002", x: 1152, y:3573},
            {nome: "cidade_003", x: 142, y:6561},
            {nome: "cidade_004", x: 2269, y:9471},
            {nome: "cidade_005", x: 2832, y:2642},
            {nome: "cidade_006", x: 2839, y:5614},
            {nome: "cidade_007", x: 2969, y:318},
            {nome: "cidade_008", x: 306, y:1331},
            {nome: "cidade_009", x: 3145, y:4745},
            {nome: "cidade_010", x: 3326, y:3269},
            {nome: "cidade_011", x: 3415, y:8778},
            {nome: "cidade_012", x: 3779, y:8476},
            {nome: "cidade_013", x: 4395, y:8125},
            {nome: "cidade_014", x: 450, y:2089},
            {nome: "cidade_015", x: 455, y:4671},
            {nome: "cidade_016", x: 4788, y:5319},
            {nome: "cidade_017", x: 4956, y:9941},
            {nome: "cidade_018", x: 5189, y:3543},
            {nome: "cidade_019", x: 6485, y:4549},
            {nome: "cidade_020", x: 6651, y:2418},
            {nome: "cidade_021", x: 6814, y:3157},
            {nome: "cidade_022", x: 6823, y:1260},
            {nome: "cidade_023", x: 6864, y:8424},
            {nome: "cidade_024", x: 7394, y:2819},
            {nome: "cidade_025", x: 7588, y:547},
            {nome: "cidade_026", x: 7986, y:5132},
            {nome: "cidade_027", x: 8490, y:9128},
            {nome: "cidade_028", x: 8698, y:307},
            {nome: "cidade_029", x: 8813, y:1803},
            {nome: "cidade_03", x: 9982, y:9280}
        ];

        private todasAsDistancias:any = [];

        private quantidadeCromossomos:number = 80;
        private quantidadeCidades:number = 30;
        
        private qtdVezesQueNaoMelhorou:number = 0;
        private qtdVezesQuePodeMelhorar:number = 40;
        private solucaoOtimaAnterior:any = [];
        private solucaoOtimaAtual:any = [];

        private populacao:any = [];
        private novoCromossomo:any = [];

        private idCromossomos:any = [];
        private idCidades:any = [];

        public podeProcessar:boolean = false;

        constructor(private $scope: ng.IScope,
                    private $http: ng.IHttpService,
                    private $q: ng.IQService) {

            this.inicializa();
            this.$scope.solucoes = [];
        }

        private processa():void {
              this.exibirResultado = true;
            while (this.qtdVezesQueNaoMelhorou < 40) {
                  this.naoMelhorouPorNVezes()
                  this.processaCrossOver();
                  this.processaMutacao();
                  this.processaHelitismo();
                  this.solucaoOtimaAtual = this.populacao[0]; // Primeiro cromossomo
                  this.$scope.solucoes.unshift(this.solucaoOtimaAtual);
            }
        }

        // Metodos Genericos

        private ordenaCromossomosDaPopulacao(p_populacao:any):any {
                if (p_populacao.length <= 1) {
                    return p_populacao;
                }

                var pivot = p_populacao[0];

                var left = []; 
                var right = [];

                for (var i = 1; i < p_populacao.length; i++) {
                    p_populacao[i].fitness < pivot.fitness ? left.push(p_populacao[i]) : right.push(p_populacao[i]);
                }

                return this.ordenaCromossomosDaPopulacao(left).concat(pivot, this.ordenaCromossomosDaPopulacao(right));
        }

        public randomizarCidades(p_todasAsCidades:any):any {

            var copiaCidades = angular.copy(p_todasAsCidades);
            var cidadesRand = [];

            // Gera nova ordem de cidades
            while (copiaCidades.length > 0) {
                // Pega uma cidade randomica
                var indiceCidade = Math.floor(Math.random() * copiaCidades.length);
                var cidade = copiaCidades[indiceCidade];

                // Remove essa cidade, para nao ser escolhida novamente
                copiaCidades.splice(indiceCidade, 1);

                // Adiciona na nova ordem
                cidadesRand.push(cidade);
            }

            return cidadesRand;
        }

        public calculaFitness(p_cidades:any):number {
            var fitness = 0;

            for (var i = 1; i < p_cidades.length; i++) {
                var origem = p_cidades[i-1];
                var destino = p_cidades[i];
                fitness += this.calculaDistanca(origem, destino);
            }

            fitness += this.calculaDistanca(p_cidades[p_cidades.length - 1], p_cidades[0]);

            return fitness;
        }

        public aconteceuCrossOver():boolean {
            //75% de change de acontecer
            return (Math.floor(Math.random() * 100)+1) <= this.taxaCrossOver;
        }

        public sorteiaIdsDiferentes(p_quantidade):any {
            var idA = Math.floor(Math.random() * p_quantidade);
            var idB = Math.floor(Math.random() * p_quantidade);

            while(idA === idB) {
                idB = Math.floor(Math.random() * p_quantidade);
            }

            return [idA, idB];
        }

        public substituiNulos(p_cidades:any, p_cidadesNaoAdicionadas:any):any {
            for (var i = 0; i < p_cidades.length; ++i) {
                if (p_cidades[i] == null) {
                    // Adiciona em null uma cidade que ainda nao foi adicionada
                    p_cidades[i] = p_cidadesNaoAdicionadas[0];
                    p_cidadesNaoAdicionadas.shift();
                }
            }

            return p_cidades;
        }

        private calculaDistanca(p_cidade1:any, p_cidade2:any):number {
              var xa = p_cidade1.x;
              var ya = p_cidade1.y;
              var xb = p_cidade2.x;
              var yb = p_cidade2.y;


              var distancia = Math.pow((xb - xa), 2) + Math.pow((yb - ya), 2);

              distancia = Math.sqrt(distancia);

              return distancia;
        }

        private calculaDistancias():void {
              this.todasAsCidades.forEach((cidade1) => {
                    this.todasAsCidades.forEach((cidade2) => {
                          if (cidade1 != cidade2) {
                                var dist = this.calculaDistanca(cidade1, cidade2);
                                var distancia = {de: cidade1.nome, para: cidade2.nome, distancia: dist};
                                this.todasAsDistancias.push(distancia);
                          }
                    });
              });
        }

        private carregaPopulacao():void {

            for (var i = 0; i < this.quantidadeCromossomos; ++i) {

                var cromossomo = {fitness: 0, cidades: []};
                cromossomo.cidades = this.randomizarCidades(this.todasAsCidades);
                cromossomo.fitness = this.calculaFitness(cromossomo.cidades);
                this.populacao.push(cromossomo);

            }
        }

        private inicializa():void {
            this.carregaPopulacao();
            this.populacao = this.ordenaCromossomosDaPopulacao(this.populacao);
        }

        private naoMelhorouPorNVezes():boolean {
            if (this.solucaoOtimaAtual.lenght == 0 && this.solucaoOtimaAnterior.lenght  == 0) {
                return false;
            }


            if (this.solucaoOtimaAnterior.fitness === this.solucaoOtimaAtual.fitness) { 
                // não melhorou
                this.qtdVezesQueNaoMelhorou++;
            } else if (this.solucaoOtimaAnterior.fitness > this.solucaoOtimaAtual.fitness) { 
                // melhorou, zera o contador de vezes que nao melhorou
                this.qtdVezesQueNaoMelhorou = 0;
            }

            if (this.qtdVezesQueNaoMelhorou === this.qtdVezesQuePodeMelhorar) {
                this.solucaoOtimaAnterior = angular.copy(this.solucaoOtimaAtual);
                return true;
            }
            this.solucaoOtimaAnterior = angular.copy(this.solucaoOtimaAtual);
            return false;
        }

        private processaCrossOver():any {
            for (var i = 0; i < 40; ++i) {
                  this.idCromossomos[0] = i;
                  this.idCromossomos[1] = i+40;

                  if (this.aconteceuCrossOver()) {
                        this.executaCrossOver();
                  }
            }
        }

        private executaCrossOver():void {
            var cidadesNaoAdicionadas = angular.copy(this.todasAsCidades);

            // Inicializa cromossomoX
            var cromossomoX = {fitness: 0, cidades: []};

            // Monta o cromossomo X
            for (var i = 0; i < this.quantidadeCidades; i++) {
                var deQualCromossomoVouPegar = Math.floor(Math.random() * 2);

                var cidadeA = this.populacao[this.idCromossomos[0]].cidades[i];
                var cidadeB = this.populacao[this.idCromossomos[1]].cidades[i];

                var cidade = null;

                if (cidadeA.nome !== cidadeB.nome) {
                    if (deQualCromossomoVouPegar == 0) {
                        cidade = cidadeA; // Pega cidade do cromossomoA
                    } else {
                        cidade = cidadeB; // Pega cidade do cromossomoB
                    }
                }

                // Remove cidade da lista de Cidades Nao Adicionadas
                if (cidade != null) {
                      cidadesNaoAdicionadas.splice(cidadesNaoAdicionadas.indexOf(cidade), 1);
                }

                // Adiciona cidade no novo cromossomo
                cromossomoX.cidades.push(cidade);
            }


            // Substitui cidades nulas do cromossomo
            cromossomoX.cidades = this.substituiNulos(cromossomoX.cidades, cidadesNaoAdicionadas);

            // Calcula o fitness do novo cromossomo
            cromossomoX.fitness = this.calculaFitness(cromossomoX.cidades);

            // Adiciona na população
            this.populacao.push(cromossomoX);
        }

        private processaMutacao():void {
            // Mutação
            // 10% de change de acontecer
            var aconteceuMutacao = (Math.floor(Math.random() * 100)+1) <= this.taxaMutacao;
            if (aconteceuMutacao) {
                // Sorteia um cromossomo
                var idCromossomo = Math.floor(Math.random() * this.quantidadeCromossomos);
                var cromossomoMutado = this.populacao[idCromossomo];

                // Sorteia duas cidades
                this.idCidades = this.sorteiaIdsDiferentes(this.quantidadeCidades);
                
                // Altera o cromossomo mutado
                var aux = cromossomoMutado.cidades[this.idCidades[0]];
                cromossomoMutado.cidades[this.idCidades[0]] = cromossomoMutado.cidades[this.idCidades[1]];
                cromossomoMutado.cidades[this.idCidades[1]] = aux;

                // Altera na população
                this.populacao[idCromossomo] = cromossomoMutado;
            }
        }

        private processaHelitismo():void {
            this.populacao = this.ordenaCromossomosDaPopulacao(this.populacao);

            // Deixa apenas a quantidade correta da população
            this.populacao = this.populacao.slice(0, this.quantidadeCromossomos);
        }
        
    }

}

app.controller('ProcessadorController', ['$scope', "$http", "$q", Blank.ProcessadorController]);