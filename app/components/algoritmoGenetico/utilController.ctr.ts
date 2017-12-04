/// <reference path="../../app.d.ts" />

module Blank {

    export class UtilController {

        public message = "Teste";

        public ordenaCromossomosDaPopulacao(p_populacao:any):any { // QuickSort para ordenar
            return this.quickSort(p_populacao);
        }

        private quickSort(p_populacao:any):any {
                if (p_populacao.length <= 1) {
                    return p_populacao;
                }

                var pivot = p_populacao[0];

                var left = []; 
                var right = [];

                for (var i = 1; i < p_populacao.length; i++) {
                    p_populacao[i].fitness < pivot.fitness ? left.push(p_populacao[i]) : right.push(p_populacao[i]);
                }

                return this.quickSort(left).concat(pivot, this.quickSort(right));
        }

        public randomizarCidades(p_todasAsCidades:any):any {

            var copiaCidades = p_todasAsCidades;
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

        public calculaFitnes(p_cidades:any, p_distancias:any):number {
            var fitness = 0;

            // Ida
            for (var i = 0; i < p_cidades.length - 1; i++) {
                var origem = p_cidades[i].nome;
                var destino = p_cidades[i+1].nome;
                p_distancias.forEach((d) => {
                    if (d.de == origem, d.para === destino) {
                        fitness += d.distancia;
                    }
                });
            }

            // Volta
            for (var i = p_cidades.length - 1; i > 0; i--) {
                var origem = p_cidades[i].nome;
                var destino = p_cidades[i-1].nome;
                p_distancias.forEach((d) => {
                    if (d.de == origem, d.para === destino) {
                        fitness += d.distancia;
                    }
                });
            }

            return fitness;
        }

        public aconteceuCrossOver():boolean {
            //75% de change de acontecer
            return (Math.floor(Math.random() * 4)) <= 2;
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
        
    }

}

app.controller('UtilController', Blank.UtilController);