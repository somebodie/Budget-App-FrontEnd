function EventController($http) {
 var self = this;
 var server = 'https://polar-retreat-61013.herokuapp.com';

 // var server = 'https://localhost:3000';


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
     self.newEvent = {};
   });
 }

 this.addEvent = addEvent;
}
