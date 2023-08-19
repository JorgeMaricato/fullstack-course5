(function() {

    'use strict;'

    angular.module("MsgAPP", [])
    .controller("MsgController", MsgController);

    MsgController.$inject = ['$scope'];
    function MsgController ($scope) {
        $scope.name="Jorge";

        $scope.sayMessage = function () {
            return "Jorge gosta de mexerica!";
        }

        $scope.tangerine = "black";
        $scope.giveTangerine = function() {
            $scope.tangerine = "orange";
        }
    };
})();