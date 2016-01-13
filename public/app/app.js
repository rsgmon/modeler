var app = angular.module('app',['ngRoute', 'ngResource']);

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', { templateUrl: '/partials/main/fmMain', controller: 'fmMainCtrl' })
        .when('/admin/users', { templateUrl: '/partials/admin/user-list',
            controller: 'fmUserListCtrl',
        resolve: {
            auth: function(fmIdentity, $q) {
                if(fmIdentity.currentUser && fmIdentity.currentUser.roles.indexOf('admin') > -1) {
                    return true;
                } else {
                    return $q.reject('not authorized');
                }
            }
        }})
});

app.run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection ){
        if(rejection === 'not authorized') {
            $location.path('/');
        }
    })
})