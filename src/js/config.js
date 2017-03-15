function Config ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('contacts', {
      url: '/contacts',
      templateUrl: 'templates/contacts.tpl.html',
      controller: 'ContactController'
    })
    .state('contacts-add', {
      url: '/contacts/add',
      templateUrl: 'templates/contact-add.tpl.html',
      controller: 'ContactAddController'
    })
    .state('contacts-id', {
      url: '/contacts/:id',
      templateUrl: 'templates/single-contact.tpl.html',
      controller: 'ContactController'
    })

    .state('page-not-found', {
      url: '/not-found',
      template: `<h2>No such page.</h2>`
    });

   $urlRouterProvider.when('', '/contacts');
   $urlRouterProvider.otherwise('/not-found');
};

Config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default Config;
