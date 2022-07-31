var app=angular.module("myApp",[]);
app.controller("Main", Main);

function Main($scope)
{
    $scope.Operation = function(button)
    {
        $scope.operator=button;
    }

    
    $scope.calculate = function()
    {
        if($scope.operator=='+')
        {
            $scope.ans=$scope.num1+$scope.num2;
        }

        if($scope.operator=='-')
        {
            $scope.ans=$scope.num1-$scope.num2;
        }

        if($scope.operator=='*')
        {
            $scope.ans=$scope.num1*$scope.num2;
        }

        if($scope.operator=='/')
        {
            $scope.ans=$scope.num1/$scope.num2;
        }

    }


}