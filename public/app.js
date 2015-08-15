/**
 * Created by gthardy on 8/15/15.
 */
'use strict';

var app = angular.module('SnapConfRooms', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider){
        $routeProvider

            // Home Page
            .when('/', {
                templateUrl: '/views/main/third.html',
                controller: 'mainController'
            })
            .when('/first', {
                templateUrl: '/views/main/first.html',
                controller: 'mainController'
            })
            .when('/second', {
                templateUrl: '/views/main/second.html',
                controller: 'mainController'
            })
            .when('/third', {
                templateUrl: '/views/main/third.html',
                controller: 'mainController'
            })

            .otherwise({ redirectTo: '/' });

        $locationProvider.html5Mode(true);
    }]);