/**
 * Created by Rye on 1/12/2016.
 */
app.factory('fmIdentity', function(){
    return {
        currentUser: undefined,
        isAuthenticated: function () {
            return !!this.currentUser;
        }
    }
})