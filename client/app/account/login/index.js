'use strict';

import angular from 'angular';
import LoginController from './login.controller';

export default angular.module('ap1App.login', [])
  .controller('LoginController', LoginController)
  .name;
