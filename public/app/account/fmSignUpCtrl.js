/**
 * Created by Rye on 1/12/2016.
 */
app.controller('fmSignUpCtrl', function ($scope, fmUser, fmNotifier, $location, fmAuth) {
    $scope.signup = function () {
        var newUserData = {
            username: $scope.username,
            password: $scope.password,
            firstName: $scope.fname,
            lastName: $scope.lname
        };

        fmAuth.createUser(newUserData).then(function () {
            fmNotifier.notify('User account created!');
            $location.path('/');
        }, function (reason) {
            fmNotifier.error(reason);
        })
    }
})
