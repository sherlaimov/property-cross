export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('property', {
      url: '/property',
      templateUrl : 'app/property/property.html',
      controller: "PropertyController",
      controllerAs: 'property'
    })
  .state('houses', {
    url: '/houses',
    templateUrl: 'app/houses/houses.html',
    controller: 'HousesController',
    controllerAs: 'houses'
  })
  .state('favourites', {
      url: '/favourites',
      templateUrl: 'app/favourites/',
      controller: 'FavouritesController',
      controllerAs: 'favs'
    });

  $urlRouterProvider.otherwise('/');
}
