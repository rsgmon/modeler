var app = angular.module('app',['ngRoute', 'ngResource']);

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', { templateUrl: '/partials/main/', controller: 'mainCtrl' })
});

app.controller('mainCtrl', function($scope) {
    $scope.myVar = "This sucks."
})