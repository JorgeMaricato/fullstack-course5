(function() {

    'use strict;'

    angular.module("MsgAPP", [])
    .controller("MsgController", MsgController)
    .filter('ama', amaFilter)
    .filter('truth', truthFilter);

    MsgController.$inject = ['$scope', 'amaFilter'];
    function MsgController ($scope, amaFilter) {
        $scope.name="Jorge";
        $scope.tangerineCost = .45;

        $scope.sayMessage = function () {
            var msg = "Jorge gosta de mexerica!";

            return msg;
        }

        $scope.sayAmaMessage = function () {
            var msg = "Jorge gosta de mexerica!";
            var output = amaFilter(msg);

            return output;
        }

        $scope.tangerine = "black";
        $scope.giveTangerine = function() {
            $scope.tangerine = "orange";
        }
    
    };
    
    function amaFilter () {
        return function (input) {
            input = input || "";
            input = input.replace("gosta", "ama");

            return input;
        }
    }

    function truthFilter () {
        return function (input, target, replace) {
            input = input || "";
            input = input.replace(target, replace);

            return input;
        }
    }

})();