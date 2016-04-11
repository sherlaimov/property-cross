export class FavouritesController {
  constructor($rootScope, $log, $state){
    'ngInject';
    this.list = $rootScope.listings;
    if (!this.list){
      $state.go('home');
    }
  }
}
