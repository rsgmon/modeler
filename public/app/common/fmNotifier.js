/**
 * Created by Rye on 1/12/2016.
 */

app.value('fmToastr', toastr);
app.factory('fmNotifier', function(fmToastr){
    return {
        notify: function (msg) {
            fmToastr.success(msg);
            console.log(msg);
        },
        error: function(msg) {
            fmToastr.error(msg);
            console.log(msg);
        }
    }
})