function HomeController($scope, $http, $window) {
  var self = this;

  let store = $window.localStorage;

  $scope.$on('userLoggedIn', function(event, data){
    //add user info to localStorage
    store.setItem('name', data.name);
    store.setItem('email', data.email);
    store.setItem('id', data.id);

    self.currentUser = data;

    console.log(store);
    console.log(self.currentUser);
  });

  $scope.$on('userLoggedOut', function(event, data) {
    //remove userinfo from localStorage
    store.removeItem('name');
    store.removeItem('email');
    store.removeItem('id');
    self.currentUser = null;
  });

  function openHomeModal(option){
    if (option == 'signup'){
      $("#signupModal").css("display", "block");
    }else {
      $("#loginModal").css("display", "block");
    }
  }

  function closeHomeModal(option){
    if (option == 'signup'){
      $("#signupModal").css("display", "none");
    }else {
      $("#loginModal").css("display", "none");
    }
  }

  self.closeHomeModal = closeHomeModal;
  self.openHomeModal= openHomeModal;
}
