import angular from 'angular';
import 'angular-ui-router';

import Config from './config';

import ContactController from './controllers/contacts';
import ContactAddController from './controllers/contact-add';

angular
  .module('app', ['ui.router'])
  .config(Config)
  .controller('ContactController', ContactController)
  .controller('ContactAddController', ContactAddController);
