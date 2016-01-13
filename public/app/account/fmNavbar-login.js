/**
 * Created by Rye on 1/12/2016.
 */
app.controller('fmLoginCtrl', function($scope, $http, fmNotifier, fmIdentity, fmAuth)
{
    $scope.identity = fmIdentity;
    $scope.signin = function(username, password) {
        fmAuth.authenticateUser(username, password).then(function(success) {
            if(success) {
                fmNotifier.notify('Sucess');
            } else {
                fmNotifier.notify('FAIL');
            }
        })
    }
});
//include this later
// ,$http fmAuth, $location) {
//    $scope.identity = fmIdentity;
//
//    $scope.signin = function(username, password)  {
//        fmAuth.authenticateUser(username, password).then(
//            function(success) {
//                if(success) {
//                    fmNotifier.notify('Logged in ');
//                } else fmNotifier.notify('failed to log in');
//            });
//    },
//        $scope.signout = function () {
//            fmAuth.logoutUser().then(function () {
//                $scope.username = "";
//                $scope.password = "";
//                fmNotifier.notify('you have successfully logged out');
//                $location.path('/');
//            })
//        }
//});