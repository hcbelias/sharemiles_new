'use strict';

import angular from 'angular';

export default angular.module('ap1App.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
