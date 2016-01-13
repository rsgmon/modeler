/**
 * Created by Rye on 1/12/2016.
 */
app.factory('fmAuth', function ($http, fmIdentity, $q, fmUser) {
    return {
        authenticateUser: function (username, password) {
            var dfd = $q.defer();
            $http.post('/login', {username: username, password: password}).then(function (response) {
                if (response.data.success) {
                    var user = new fmUser();
                    angular.extend(user, response.data.user);
                    fmIdentity.currentUser = user;
                    dfd.resolve(true);
                } else {
                    dfd.resolve(false);
                }
            });
            return dfd.promise;
        },
        logoutUser: function () {
            var dfd = $q.defer();
            $http.post('/logout', { logout: true }).then(function () {
                fmIdentity.currentUser = undefined;
                dfd.resolve();
            });
            return dfd.promise;
        }
    }
})
