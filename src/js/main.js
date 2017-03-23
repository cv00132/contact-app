import angular from 'angular';
import 'angular-ui-router';

import Config from './config';

import ContactController from './controllers/contacts';
import SingleController from './controllers/single';
import ContactAddController from './controllers/contact-add';

angular
  .module('app', ['ui.router'])
  .config(Config)
  .controller('ContactController', ContactController)
  .controller('SingleController', SingleController)
  .controller('ContactAddController', ContactAddController);
