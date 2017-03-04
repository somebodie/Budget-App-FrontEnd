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
      url: '/user/events',
      templateUrl: '/partials/user.html',
      controller: 'EventController as event',
    })
    .state('budget', {
      url: '/item', // actual link is: /user/events/item
      templateUrl: '/partials/events.html',
      controller: 'BudgetController as budget',
      parent: 'event'
    })
  }
