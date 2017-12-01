/// <reference path="../../app.d.ts" />

module Blank {

    export class DashboardController {

        private versaoSistema: string = this.generalParams.versaoSistema;
        private baseUrl: string = this.generalParams.baseUrl;
        public data: any = {};
        public user: any = {};

        constructor(private $scope: ng.IScope,
                    private generalParams: GeneralParams,
                    private $timeout: ng.ITimeoutService,
                    private $http: ng.IHttpService,
                    private $filter: ng.IFilterService,
                    private $menuService: MenuService,
                    private $dashboardService: DashboardService,
                    private $location: any) {

            $(window).resize(() => {
                this.resize();
            });

            this.$scope.groupPath = [];
            this.$scope.resultDataCopy = {};
            this.$scope.title = null;
            this.$scope.columnsTableDetail = [
                    {key: 'title', nameTranslate: 'L_VARIABLES_FROM_FORMULA', direction:"desc", template: "<span>{{entity.title}} <span class=\"click\" data-tooltip=\"{{entity.desc}}\"><i class=\"help circle icon\"></i></span></span>", sortable: true},
                    {key: 'calc', nameTranslate: 'LBL_VALUE', direction:"desc", template: "<span>{{entity.calc}}</span>", sortable: true},
                    {key: 'details', nameTranslate: 'L_DETAILS', template: "<p aling=\"center\" class=\"ui center aligned\"><a href=\"{{enity.details}}\"><i class='external icon'></i></a></p>"}
                ];
            this.$scope.reverseOrderDetail = false;
            this.$scope.reverseOrderParent = true;
            this.$scope.filter = {};
            this.$scope.reverseOrder = true;

            this.init();
        }

        public init = (): void => {
            this.$menuService.getCurrentUser().then((response) => {
                this.user.name = response.data[0].valor;
                this.user.login = response.data[0].chave;
            });
            
            this.$dashboardService.getIndicator().then((response) => {
                this.$scope.data = response.data;
                this.$scope.title = response.data.description;
                this.$scope.resultDataCopy = angular.copy(response.data);
                this.$scope.groupPath.push({name: response.data.description, level: 0, id: response.data.id, profile: response.data.profile});
                this.resize();
            });
            
            // if (typeof sessionStorage.dashboardData === 'undefined') {
            //     this.$http.get("indicadores.json").then((result: any) => {
            //     });
            // } else {
            //     var content = angular.fromJson(sessionStorage.dashboardData);
            //     this.$scope.data = content;
            //     this.$scope.title = content.description;
            //     this.$scope.resultDataCopy = angular.copy(content);
            //     this.$scope.groupPath = angular.fromJson(sessionStorage.dashboardPath);
            //     this.resize();
            // }
        }

        public clearFilterDetail = (): void => {
            this.$scope.filter = {
                page: 0, 
                entityFind: null,
                result: [],
                orderColumn: "title",
                orderDirection: "desc",
                pageCount: NaN
            }
        }

        public customFilterDetail = (): void => {
            this.$scope.filter.limit = this.$scope.data.detail.results.lenght;
            this.$scope.filter.result = this.$scope.data.detail.results;
            this.$scope.reverseOrderDetail = !this.$scope.reverseOrderDetail;
        };

        public clearFilterParent = (): void => {
            this.$scope.filter = {
                page: 0, 
                entityFind: null,
                result: [],
                orderColumn: "description",
                orderDirection: "asc",
                pageCount: NaN
            }
        }

        public customFilterParent = (): void => {
            this.$scope.columnsTableParent = [];

            this.$scope.filter.limit = [this.$scope.data].length;
            this.$scope.reverseOrderParent = !this.$scope.reverseOrderParent;
            

            var cols = [];
            var col = {};
            [this.$scope.data.groups][0].forEach((row, index) => {
                col['description'] = row.description;
                
                row.histories.forEach((subrow) => {
                    col[subrow.description] = subrow.value;
                });

                col['group'] = row;
                cols.push(col);
                col = {};
            });

            var header = [];
            header.push("description");
            
            [this.$scope.data.groups][0][0].histories.forEach((row) => {
                header.push(row.description);
            })

            this.$scope.filter.result = cols;

            this.$scope.columnsTableParent.push({key: header[0], nameTranslate: '', template: "<strong class=\"click link\" ng-click=\"controller.changeGroup(entity.group)\">{{entity."+header[0]+"}}</strong>", direction:"desc", sortable: true});
            for (var i = 1; i < header.length; ++i) {
                this.$scope.columnsTableParent.push({key: header[i], nameTranslate: 'MONTH_'+header[i], template: "<span>{{entity."+header[i]+"}}</span>", direction:"desc", sortable: true});
            }

        };

        public getUrlPhotoUser = (login: any): string => {
            return 'assets/img/user.png';
        }

        public chartMeter = (width: number, height: number, data: any): any => {
            if (data) {
                var chart: any = {
                    type: "Gauge",
                    "width": width,
                    "height": height,
                    options: {
                        redColor: '#c7c6c6', 
                        redFrom: 0,
                        redTo: 100,
                        minorTicks: 20
                    },
                    data: [
                        ['Label', 'Value'],
                        [data.indicator, {v: data.value, f: data.value + '%'}]
                    ]
                };
                
                return chart;
            }

            return {};
        }

        public chartColumn = (width: number, height: number, data: any): any => {
            var chart: any = {
                type: "ColumnChart",
                options: {
                    title: 'Evolução da ' + data.indicator
                },
                data: {
                    cols: [
                        {label: "-", type: "string"},
                        {label: data.indicator, type: "number"}
                    ],
                    rows: [
                    ]
                }
            };

            if (data && data.histories) {
                chart.rows = [];
                data.histories.forEach(e  => {
                    chart.data.rows.push({c: [{v: e.description}, {v: e.value, f: e.value+'%'}, ]});
                });
            }

            return chart;
        }

        private resize = (): void => {
            this.$scope.chartMeterEGR = this.chartMeter(600, 300, this.$scope.data);
            this.$scope.chartColumnHistEGR = this.chartColumn(800, 300, this.$scope.data);
            if (this.$scope.data.detail) {
                this.clearFilterDetail();
                this.customFilterDetail();
            } else {
                this.clearFilterParent();
                this.customFilterParent();
            }
        };

        public changeGroup = (data: any) => {
            // Busca os detalhes
            this.$dashboardService.getDetail(this.$scope.data, data).then((response) => {
                this.$scope.data = response;
                this.$scope.title = response.description;

                // Altera o groupPath
                this.$scope.groupPath.push({name: response.description, level: response.level, id: response.id, profile: response.profile});
                this.resize();

                sessionStorage.dashboardData = angular.toJson(this.$scope.data);
                sessionStorage.dashboardPath = angular.toJson(this.$scope.groupPath);
            });
        }

        public changePath = (selectedPath: any, currentPath: any) => {
            while(selectedPath.id != currentPath.id) {
                if (typeof currentPath.parent == 'undefined') {
                    break;
                } else {
                    this.$scope.groupPath.pop();
                    this.$scope.data = this.$scope.data.parent;
                    currentPath = currentPath.parent;
                }
            }

            this.resize();

            // sessionStorage.dashboardData = angular.toJson(this.$scope.data);
            // sessionStorage.dashboardPath = angular.toJson(this.$scope.groupPath);
        }
    }

}

app.controller('DashboardController', ['$scope', 'GeneralParams', '$timeout', '$http', '$filter', 'MenuService', 'DashboardService', '$location', Blank.DashboardController]);