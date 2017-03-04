angular.module('budget-app', ['ui.materialize', 'ui.router',])
  .config(authInterceptor)
  .config(MainRouter);

  MainRouter.$inject = ['$urlRouterProvider','$stateProvider'];

  function authInterceptor($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor')
  }

  function MainRouter($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/partials/home.html',
      controller: 'AuthController as auth'
    })
    .state('event', {
      url: '/user/events',
      templateUrl: '/partials/user.html',
<<<<<<< HEAD
      controller: 'EventController as event',
    })
    .state('budget', {
      url: '/item', // actual link is: /user/events/item
      templateUrl: '/partials/events.html',
      controller: 'BudgetController as budget',
      parent: 'event'
    })
=======
      controller: 'EventController as event'
      // parent: 'budget'
    });
    // .state('budget', {
    //   url: '/:ID/item' //'/user/:userId/events/:eventsID'
    //   templateUrl: '/partials/events.html',
    //   controller: 'BudgetController as budget'
    // });

>>>>>>> a0622f34fbb2cb7491de6627446ec79ffed6a485
  }
