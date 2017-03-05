function AuthController($http, $state, $scope, $rootScope, AuthTokenFactory) {
  var self = this;
  // var server = 'https://polar-retreat-61013.herokuapp.com'
  var server = 'http://localhost:3000';


  function signup(userPass) {

    console.log(userPass);
    $http.post(`${server}/users`, { user: userPass } )
      .then(function(response) {
        console.log(response);
        //clear ng-model variable on the signup form on home.html
        self.newUser={};
        $state.go('home');
      });
  }

  function login(userPass) {

    console.log(userPass);
    $http.post(`${server}/users/login`, { user: userPass } )
      .then(function(response) {
        console.log(response);
        console.log(response.data)
        AuthTokenFactory.setToken(response.data.token)

        $scope.$emit('userLoggedIn', response.data.user);
        $rootScope.$emit('fetchData', response.data.user);
        $state.go('event', {userId: response.data.user.id });
    });
  }

  function logout() {
    AuthTokenFactory.setToken()

    $scope.$emit('userLoggedOut');
    $state.go('home');
  }

  this.signup = signup;
  this.login = login;
  this.logout = logout;
}
