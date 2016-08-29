var services = angular.module('restaurants.servces', ['ngResource']);

services.factory('RestaurantsFactory', function($resource){
    return $resource('/api/restaurants', {}, {
        query: {
            method: 'GET',
            isArray: true
        },
        create: {
            method: 'POST'
        }
    })
});

services.factory('RestaurantFactory', function($resouce){
    return $resource('/api/restaurant/:id', {}, {
        show: {
            method: 'GET'
        },
        update: {
            method: 'PUT',
            params: {
                id: '@id'
            }
        },
        delete: {
            method: 'DELETE',
            params: {
                id: '@id'
            }
        }
    })
});