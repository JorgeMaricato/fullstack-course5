(function() {

    'use strict;'

    angular.module("MsgAPP", [])
    .controller("MsgController", MsgController);

    MsgController.$inject = ['$scope', '$filter'];
    function MsgController ($scope, $filter) {
        $scope.name="Jorge";
        $scope.tangerineCost = .45;

        $scope.sayMessage = function () {
            var msg = "Jorge gosta de mexerica!";
            var output = $filter('uppercase')(msg);

            return output;
        }

        $scope.tangerine = "black";
        $scope.giveTangerine = function() {
            $scope.tangerine = "orange";
        }
    };
})();