(function() {

    'use strict;'

    angular.module("myFirstApp", [])
    .controller("MyFirstController", function ($scope) {
        $scope.name="Jorge";
        
        $scope.sayHello = function () {
            return "Hello Coursera!";
        }
    });
})();