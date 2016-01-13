/**
 * Created by Rye on 1/13/2016.
 */
app.controller('fmOptimizeCtrl', function($scope, fmPortfolio, fmPortCRUD) {
    $scope.positions =  fmPortfolio.portfolioResource.query(function ()
    {
        $scope.assetTypes = sort_unique(get_assetType($scope.positions[0]["positions"], "assetType"));
        //console.log($scope.assetTypesUnique);
        $scope.regions = sort_unique_objects(arr_obj_pos_re_at($scope.positions[0]["positions"]));
        $scope.assetClasses = sort_unique_objects_2(arr_obj_pos_re_at_2($scope.positions[0]["positions"]));

    });
    $scope.portUpdate = function () {
        $scope.positions[0].$update();

    }
});

function sort_unique(arr) {
    arr = _.map(_.sortBy(arr, ['assetType'], _.values))
    var ret = [arr[0]];
    for (var i = 1; i < arr.length; i++) { // start loop at 1 as element 0 can never be a duplicate
        if (!angular.equals(arr[i-1],arr[i])) {
            ret.push(arr[i]);
        }
    }
    return ret;
}

function sort_unique_objects(arr) {

    //arr = arr.sort(sort_by(st_sort_type, false, function(a){return a.toUpperCase()}))
    arr = _.map(_.sortBy(arr, ['region', 'assetType'], _.values))
    var ret = [arr[0]];
    for (var i = 1; i < arr.length; i++) { // start loop at 1 as element 0 can never be a duplicate
        if (!angular.equals(arr[i-1],arr[i])) {
            ret.push(arr[i]);
        }
    }

    return ret;
}

function sort_unique_objects_2(arr) {

    //arr = arr.sort(sort_by(st_sort_type, false, function(a){return a.toUpperCase()}))
    arr = _.map(_.sortBy(arr, ['region', 'assetType', 'assetClass'], _.values))
    var ret = [arr[0]];
    for (var i = 1; i < arr.length; i++) { // start loop at 1 as element 0 can never be a duplicate
        if (!angular.equals(arr[i-1],arr[i])) {
            ret.push(arr[i]);
        }
    }
    return ret;
}

var sort_by = function(field, reverse, primer){

    var key = primer ?
        function(x) {return primer(x[field])} :
        function(x) {return x[field]};

    reverse = !reverse ? 1 : -1;

    return function (a, b) {
        return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
    }
}




function get_assetType(collection, filterType) {
    arr_collection_prop = []
    for (var i in collection) {
        arr_collection_prop.push(collection[i][filterType])
    }
    return arr_collection_prop;
}

function arr_obj_pos_re_at(collection) {
    arr_collection_prop = []
    for (var i in collection) {
        obj_prop = {};
        obj_prop["assetType"] = collection[i]["assetType"];
        obj_prop["region"] = collection[i]["region"];
        arr_collection_prop.push(obj_prop);
    }
    return arr_collection_prop;
}

function arr_obj_pos_re_at_2(collection) {
    arr_collection_prop = []
    for (var i in collection) {
        obj_prop = {};
        obj_prop["assetType"] = collection[i]["assetType"];
        obj_prop["region"] = collection[i]["region"];
        obj_prop["assetClass"] = collection[i]["assetClass"];
        arr_collection_prop.push(obj_prop);
    }
    return arr_collection_prop;
}