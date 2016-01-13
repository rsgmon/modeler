/**
 * Created by Rye on 1/12/2016.
 */
app.factory('fmIdentity', function($window){
    var currentUser;
    if(!!$window.bootstrappedUserObject) {
       currentUser = $window.bootstrappedUserObject;
    }
    return {
        currentUser: currentUser,
        isAuthenticated: function () {
            return !!this.currentUser;
        }
    }
})