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
      url: '/user/:userId/events',
      templateUrl: '/partials/user.html',
      controller: 'EventController as event'
      // parent: 'budget'
    });
    // .state('budget', {
    //   url: '/:ID/item' //'/user/:userId/events/:eventsID'
    //   templateUrl: '/partials/events.html',
    //   controller: 'BudgetController as budget'
    // });

  }
