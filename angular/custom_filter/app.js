(function () {
    'use strict';

    angular.module('MsgApp',[])
        .controller('MsgController', MsgController)
        .filter('loves', LovesFilter);

    MsgController.$inject = ['$scope', 'lovesFilter'];

    function MsgController($scope, lovesFilter) {
        $scope.stateOfBeing = "hungry";
        $scope.smile = "no";

        $scope.sayMessage = function () {
            var msg = "Yaakov likes to eat healthy snacks at night!";
            return msg;
        };

        $scope.sayLovesMessage = function () {
            var msg = "Yaakov likes to eat healthy snacks at night!";
            msg = lovesFilter(msg);
            return msg;
        };

        $scope.feedYaakov = function () {
            if($scope.smile == "no"){
                $scope.stateOfBeing = "fed";
                $scope.smile= "yes";
                console.log($scope.smile);
            }else if($scope.smile=="yes"){
                $scope.stateOfBeing = "hungry";
                $scope.smile="no";
                console.log($scope.smile);
            }

        };
    }
    
function LovesFilter() {
    return function (input) {
        input = input || "";
        input = input.replace("likes", "loves");
        return input;
    };
}
})();