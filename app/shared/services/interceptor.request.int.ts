app.config(['$httpProvider', ($httpProvider) => {
    $httpProvider.interceptors.push('HttpResponseErrorHandler');
}]);

app.factory('HttpResponseErrorHandler', ['GeneralParams', (GeneralParams) => {
    return {
        request: (req) => {
            if(req.url.includes("login.tpl.html") && typeof sessionStorage.dashboardData !== 'undefined') {
                if (angular.fromJson(sessionStorage.dashboardPath).length > 1) {
                    sessionStorage.dashboardData = angular.toJson(angular.fromJson(sessionStorage.dashboardData).parent);
                    sessionStorage.dashboardPath = angular.toJson(angular.fromJson(sessionStorage.dashboardPath).slice(0, -1));
                }
            }
            return req;
        },
        response: (r) => {
            if (r.status === 401) {
                sessionStorage.removeItem("token");
                window.location.href = "#";
            }
            return r;
        },
        responseError: (rejection) => {
            if (rejection.status === 401) {
                sessionStorage.removeItem("token");
                window.location.href = "#";
            }
            return rejection;
        }
    };
}]);