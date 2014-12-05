/**
 * Created by Administrator on 14-9-1.
 */
var app = angular.module('myApp', ['ngTouch']);



app.controller('MainCtrl', function($scope) {

    $scope.greet = function() {

       alert('hello myApp');

    }
    $scope.hello = function() {

        alert('ok myApp');
    }
});