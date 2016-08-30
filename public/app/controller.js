'use strict';

var app = angular.module('restaurants.controllers', []);

app.controller('RestaurantListController', ['$scope', 'RestaurantsFactory', 'RestaurantFactory', '$location', 
    function($scope, RestaurantsFactory, RestaurantFactory, $location) {
        //callback for editRestaurant() [ng-click]
        $scope.editRestaurant = function(restaurantId) {
            console.log("editRestaurant("+restaurantId+")");
            $location.path('/restaurant-detail/' + restaurantId);
        };

        //callback for deleteRestaurant() [ng-click]
        $scope.deleteRestaurant = function(restaurantId) {
            RestaurantFactory.delete({ id: restaurantId });
            $scope.restaurants = RestaurantsFactory.query();
        };

        //callback for createRestaurant() [ng-click]
        $scope.createRestaurant = function() {
            $location.path('/restaurant-create');
        };

        $scope.restaurants = RestaurantsFactory.query();
}]);


app.controller('RestaurantDetailController', ['$scope', '$routeParams', 'RestaurantFactory', '$location',
    function($scope, $routeParams, RestaurantFactory, $location) {
        console.log('RestaurantDetailController');
        //callback for updateRestaurant [ng-click]
        $scope.updateRestaurant = function() {
            RestaurantFactory.update($scope.restaurant);
            $location.path('/restaurants');
        }

        //callback for cancel [ng-click]
        $scope.cancel = function() {
            $location.path('/restaurants');
        }
        
        console.log("$routeParams.id = "+$routeParams.id);
        $scope.restaurant = RestaurantFactory.show({ id: $routeParams.id });

}]);


app.controller('RestaurantCreationController', ['$scope', 'RestaurantsFactory', '$location', 
    function($scope, RestaurantsFactory, $location) {

        //callback for createNewRestaurant() [ng-click]
        $scope.createNewRestaurant = function() {
            RestaurantsFactory.create($scope.restaurant);
            $location.path('/restaurants');
        }

}]);