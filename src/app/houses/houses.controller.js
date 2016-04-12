export class HousesController {
  constructor($rootScope, $log, $state){
    'ngInject';
    this.list = $rootScope.listings;
    if (!this.list){
      $state.go('home');
    }
    this.test = function test(){
      console.log('Huyest');
    }
  }
}
