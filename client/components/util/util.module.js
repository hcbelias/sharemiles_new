'use strict';

import angular from 'angular';
import {
  UtilService
} from './util.service';

export default angular.module('ap1App.util', [])
  .factory('Util', UtilService)
  .name;
