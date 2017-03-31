(function() {
var listApp = angular.module("listApp",[]);
    listApp.controller("ListController", ['$http','$scope', function($http, $scope){
        var list = this;
        list.product = [];
        list.header = [];
        $scope.Math = window.Math;

        $scope.sortBy = function (propertyID) {
            $scope.reverse = ($scope.propertyID == propertyID) ? !$scope.reverse : false;
            $scope.propertyID = propertyID;
        };
       
        $scope.goForData = function (dataUrl) {
            $http.get(dataUrl).success(function(data){
                list.header = data.shift();
                list.product = data;
                $scope.maxPageCounter = Math.ceil(list.product.length / 50);
                });
                };

        $scope.createNewTable = function() {
            $scope.getElementById.insertAdjacentHTML('afterend', '<div id="two">two</div>');
        };
    }]);



})();