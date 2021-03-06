/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';
import {PropertyController} from  '../app/property/property.controller';
import GoComponent from '../app/components/go/go.component';
import {HousesController} from '../app/houses/houses.controller';
import {HouseDirective} from '../app/components/house/house.directive';
import {FavouritesController} from '../app/favourites/favourites.controller';
import {FavDirective} from '../app/components/fav/fav.directive';
import { NestoriaAPI } from '../app/components/nestoriaAPI/nestoria.service';
import { GeolocationService } from '../app/components/geolocation/geolocation.service';

angular.module('propertycross', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ngMaterial', 'toastr', 'ngMdIcons'])
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .service('githubContributor', GithubContributorService)
    .service('webDevTec', WebDevTecService)
    .service('NestoriaAPI', NestoriaAPI)
    .controller('MainController', MainController)
    .controller('PropertyController', PropertyController)
    .controller('HousesController', HousesController)
    .controller('FavouritesController', FavouritesController)
    .directive('acmeNavbar', NavbarDirective)
    .directive('acmeMalarkey', MalarkeyDirective)
    .directive('acmeHouse', HouseDirective)
    .directive('acmeFav', FavDirective)
    .component('acmeGo', GoComponent)
    .service('GeolocationService', GeolocationService)
;
