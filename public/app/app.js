var app = angular.module('app',['ngRoute', 'ngResource']);

app.config(function ($routeProvider, $locationProvider) {
    var routeRoleChecks = {
        admin: {auth: function(fmAuth) {
            return fmAuth.authorizeCurrentUserForRoute('admin')
        }}
    }
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', { templateUrl: '/partials/main/fmMain', controller: 'fmMainCtrl' })
        .when('/admin/users', { templateUrl: '/partials/admin/user-list',
            controller: 'fmUserListCtrl', resolve: routeRoleChecks.admin
        })
        .when('/signup', {templateUrl: 'partials/account/signup',
            controller: 'fmSignUpCtrl'})
        .when('/portfolios', {templateUrl: 'partials/tools/tooloptimize',
            controller: 'fmOptimizeCtrl'
        });

});

app.run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection ){
        if(rejection === 'not authorized') {
            $location.path('/');
        }
    })
})