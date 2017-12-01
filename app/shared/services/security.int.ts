/// <reference path="../../app.d.ts" />

app.run(['$rootScope', '$http','$window','GeneralParams', '$location',
    ($rootScope, $http, $window, GeneralParams, $location) => {
        $rootScope.$on('$stateChangeStart', (event, next) => {

            //Checar se o usuário ainda tem uma sessao valida no servidor.
            // if (next.name.indexOf('login') == -1) { 
            //     $http.get(GeneralParams.baseUrl + "/home");
            // } else {
            //      $http.get(GeneralParams.baseUrl + "/home").then((response) => {
            //          if (response.status === 200) {
            //              $window.location.href = "#!/home";
            //          }
            //      });
            // }

            if (typeof sessionStorage.userCurrent !== 'undefined') {
                $http.defaults.headers.common['X-TOKEN'] = angular.fromJson(sessionStorage.userCurrent).token;
            }

            var autorizado: boolean;
            if (next.access) {
                var urlPrincipal = $window.location.href.substring(0, $window.location.href.indexOf("#"));
                
                $http.get(GeneralParams.baseUrl + "/menu/permissao/check/" + next.access).then((response) => {
                    if (response.data === true) {
                        event.preventDefault();
                    } else {
                        $window.location.href = urlPrincipal;
                    }
                }, (data) => {
                    $window.location.href = urlPrincipal;
                });
            }
        });
}]);