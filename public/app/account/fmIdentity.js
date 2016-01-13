/**
 * Created by Rye on 1/12/2016.
 */
app.factory('fmIdentity', function($window, fmUser){
    var currentUser;
    if(!!$window.bootstrappedUserObject) {
       currentUser = new fmUser();
       angular.extend(currentUser, $window.bootstrappedUserObject);
    }
    return {
        currentUser: currentUser,
        isAuthenticated: function () {
            return !!this.currentUser;
        },
        isAuthorized: function(role) {
            return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;

        }
    }
})