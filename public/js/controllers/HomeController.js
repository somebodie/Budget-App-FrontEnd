function HomeController($scope, $http) {
  var self = this;

  $scope.$on('userLoggedIn', function(event, data){
    self.currentUser = data;
  });

  $scope.$on('userLoggedOut', function(event, data) {
    self.currentUser = null;
  });

  function signupModal(){
    $("#myModal").css("display", "block");

    // var modal = document.getElementById('#myModal');
    // modal.style.display = block;

  }

  function closeSignupModal(){
    $("#myModal").css("display", "none");
  }

  self.closeSignupModal = closeSignupModal;
  self.signupModal= signupModal;
}
