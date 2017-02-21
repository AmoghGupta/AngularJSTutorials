var app = angular.module("myapp23", []);

app.filter('base', function() {

    var convert = function(input, basenumber) {
        var parsed = parseInt(input, 10);
        var based = parseInt(basenumber, 10);
        if(isNaN(parsed)|| isNaN(based))
        return input;

        return parsed.toString(based);
    };
    return convert;
});


app.controller('app', function($scope) {});
