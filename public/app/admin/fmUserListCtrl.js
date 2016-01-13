/**
 * Created by Rye on 1/12/2016.
 */
app.controller('fmUserListCtrl', function ($scope, fmUser) {
    $scope.users = fmUser.query();
});