export function FavDirective() {
  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/fav/fav.html',
    scope: {
      house: '='
    },
    bindToController: true,
    controller: FavController,
    controllerAs: 'vm'
  }
  return directive;
}

class FavController {

}
