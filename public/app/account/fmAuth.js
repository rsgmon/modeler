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
        createUser: function (newUserData) {
            var newUser = new fmUser(newUserData);
            var dfd = $q.defer();
            newUser.$save().then(function(){
            fmIdentity.currentUser = newUser;
            dfd.resolve();
            }, function(response) {
                dfd.reject(response.data.reason)
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
        },
        authorizeCurrentUserForRoute: function(role) {
            if(fmIdentity.isAuthorized(role)) {
                return true;
            } else {
                return $q.reject('not authorized');
            }
        }
    }
})
