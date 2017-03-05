function EventController($http, $scope, $window) {
 var self = this;
 var server = 'https://polar-retreat-61013.herokuapp.com';
 getEvents();
 console.log($window.localStorage);

 function addEvent(eventInfo, currentUser){
   //closes the add bar when add event button is clciked
   $(".collapsible-header").removeClass("active");
   $(".collapsible-body").css("display", "none");

   console.log(eventInfo);
   console.log(currentUser.id);

   var newEvent = {
     name: eventInfo.name,
     budget: eventInfo.budget,
     user_id:currentUser.id
   }

   console.log(newEvent);

   $http.post(`${server}/users/${currentUser.id}/events`,
     newEvent )
   .then(function(response) {
     console.log(response);
     //clear ng-model variable on the new event form on user.html
     self.newEvent = {};
     //get updated events to dispay on user.html
     getEvents();
   });
 }

 function getEvents(){
   $http.get(`${server}/users/${$window.localStorage.id}/events`)
   .then(function(response) {
     console.log(response);
     self.events = response.data;
     $scope.$broadcast('getEvent', {event: response.data})
   });
 }

 function deleteEvent(userId, eventId) {
   console.log(userId);
   console.log(eventId);
   $http.delete(`${server}/users/${userId}/events/${eventId}`)
   .then(function(response){
     console.log(response);
     getEvents();
   });
 }

 function getEventDetails(eventDetails) {
   console.log(eventDetails);
   self.name = eventDetails.name;
   self.budget = parseFloat(eventDetails.budget);
   console.log(self.name);
   console.log(typeof(self.budget));

   //make div size smaller to display event details
   $("#events").toggleClass("s12 s8");
   //make the cards bigger
   $(".eventCards").toggleClass("m4 m6");
   //display event details div
   $("#eventDetails").css("display", "block");
 }

 function closeEventDetails() {
   //hide event details div
   $("#eventDetails").css("display", "none");

   //make  event div bigger
     $("#events").toggleClass("s8 s12");

   //make the cards smaller
    $(".eventCards").toggleClass("m6 m4");
 }



 function editEvent(userId, eventId){
   console.log('hit editEvent');

  //  var updatedEvent = {
  //    name: self.name,
  //    budget: self.budget,
  //   //  user_id:currentUser.id
  //  }
   //
  //  $http.put(`${server}/users/${userId}/events/${eventId}`, {name: self.name, budget: self.budget})
  //  .then(function(response){
  //    console.log(response);
  //    self.name = '';
  //    self.budget = null;
  //    getEvents();
  //  });

 }

 self.closeEventDetails = closeEventDetails;
 self.getEventDetails = getEventDetails;
 self.editEvent = editEvent;
 self.deleteEvent = deleteEvent;
 self.getEvents = getEvents;
 self.addEvent = addEvent;
}
