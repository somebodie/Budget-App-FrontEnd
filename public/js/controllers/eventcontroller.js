function EventController($http, $scope, $window) {
 var self = this;
 var server = 'https://polar-retreat-61013.herokuapp.com';
 getEvents();
 console.log($window.localStorage);

 function addEvent(eventInfo, currentUser){
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

 function getEvents(currentUser){
   $http.get(`${server}/users/${$window.localStorage.id}/events`)
   .then(function(response) {
     console.log(response);
     self.events = response.data;
     $scope.$emit('userEvent', response);
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

 self.deleteEvent = deleteEvent;
 self.getEvents = getEvents;
 self.addEvent = addEvent;
}
