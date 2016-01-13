/**
 * Created by Rye on 1/12/2016.
 */
app.factory('fmUser', function($resource) {
    var UserResource = $resource('/api/users/:_id', { _id: "@id" },
        {update: {method:'PUT', isArray:false}});
    UserResource.prototype.isAdmin = function () {
        return this.roles && this.roles.indexOf('admin') > -1;  }
    return UserResource;
});