/**
 * Created by DELL on 2014-10-28.
 */
var myMain = angular.module('myMain',['ngTouch','ngAnimate','akoenig.deckgrid','ngRoute']);

myMain.config(['$routeProvider','$locationProvider',function ($routeProvider,$locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/layout/layout_content.ejs',
            controller: 'decrid'
        })
        .when('/chart', {
            templateUrl: 'views/layout/layout_chart.ejs',
            controller: 'ChartCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(false);
}]);