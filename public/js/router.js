angular.module('budget-app', ['ui.router'])
  // .config(authInterceptor)
  .config(MainRouter);

  // function authInterceptor($httpProvider) {
  //   $httpProvider.interceptors.push('AuthInterceptor')
  // }

  function MainRouter($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }
