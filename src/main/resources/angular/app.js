angular.module('restaurants', ['restaurants.filters', 'restaurants.services', 'restaurants.directives', 'restaurants.controllers'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/restaurants',         {templateURL: 'restaurants.html',       controller: 'RestaurantListController'});
        $routeProvider.when('/restaurant-detail',   {templateURL: 'restaurant-detail.html', controller: 'RestaurantDetailController'});
        $routeProvider.when('/restaurant-create',   {templateURL: 'restaurant-create.html', controller: 'RestaurantCreationController'});
        $routeProvider.otherwise({redirectTo:'/restaurants'});
    }
]);