angular.module('budget-app', ['ui.router'])
  // .config(authInterceptor)
  .config(MainRouter);

  // function authInterceptor($httpProvider) {
  //   $httpProvider.interceptors.push('AuthInterceptor')
  // }

  function MainRouter($stateProvider, $urlRouterProvider) {
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
      parent: 'budget'
    });
    .state('budget', {
      url: '/:id', //'/user/:userId/events/:eventsID'
      templateUrl: '/partials/events.html',
      controller: 'BudgetController as budget'
    });

  }
