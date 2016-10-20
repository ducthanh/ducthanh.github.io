(function () {
    'user strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    function LunchCheckController($scope) {
        $scope.listItem = "";
        $scope.getItem = function () {
            if($scope.listItem==""){
                $scope.messages = "Please enter data first";
            }else{
                li = $scope.listItem.split(',');
                if(li.length > 3){
                    $scope.messages = "Too much!";
                }else{
                    $scope.messages = "Enjoy!";
                }
            }
        }
    }
})();