'use strict';

import angular from 'angular';
import SettingsController from './settings.controller';

export default angular.module('ap1App.settings', [])
  .controller('SettingsController', SettingsController)
  .name;
