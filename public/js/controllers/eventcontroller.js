function EventController($http, $scope, $window, $state) {
 var self = this;
 self.option = false;

//  var server = 'https://afternoon-reaches-46251.herokuapp.com';

 var server = 'https://polar-retreat-61013.herokuapp.com';

 // var server = 'http://localhost:3000';

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

     $scope.$broadcast('getEvent', {events: response})

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
   let store = $window.localStorage;
   store.setItem('eventId', eventDetails.id);
   store.setItem('eventBudgetTotal', parseFloat(eventDetails.budget));
   store.setItem('eventName', eventDetails.name);

   self.name = eventDetails.name;
   self.budget = parseFloat(eventDetails.budget);
   self.eventId = eventDetails.id;

   console.log(self.name);
   console.log(self.eventId);
   console.log(self.budget);
   console.log(store);

   //make div size smaller to display event details
   $("#events").toggleClass("s12 s8");
   //make the cards bigger
   $(".eventCards").toggleClass("m4 m6");
   //display event details div
   $("#eventDetails").css("display", "block");

   $state.go('budget', {reload:true});
 }

 function closeEventDetails() {
   //hide event details div
   $("#eventDetails").css("display", "none");

   //make  event div bigger
     $("#events").toggleClass("s8 s12");

   //make the cards smaller
    $(".eventCards").toggleClass("m6 m4");

    $window.localStorage.removeItem('eventId');
    $window.localStorage.removeItem('eventBudgetTotal');
    $window.localStorage.removeItem('eventName');

    console.log($window.localStorage);
    $state.go('event', {reload: true});
 }


 function editEvent(userId, updatedEvent, selection){
   console.log('hit editEvent');
   console.log(userId);
   console.log(localStorage);
   console.log(updatedEvent);


   if (selection == 'money'){

     var updateEvent = {
       name: localStorage.eventName,
       budget: parseFloat(localStorage.eventBudgetTotal) + updatedEvent.money
     }
     $window.localStorage.setItem('eventBudgetTotal', updateEvent.budget);
     $window.localStorage.setItem('balance', parseFloat(localStorage.balance) - updatedEvent.money);
     console.log(updateEvent);

     $http.put(`${server}/users/${userId}/events/${localStorage.eventId}`, updateEvent)
     .then(function(response){
       console.log(response);

       self.updatedEvent = {}
       closeAddMoneyForm();
       getEvents();
       console.log(localStorage);
       $state.reload('event');
       $state.reload('budget');
       $state.go('event', {reload: true});
       $state.go('budget', {reload: true});
      // //  //make the cards bigger
      //  $(".eventCards").toggleClass("m4 m6");
     });
    //  //make the cards bigger
    //  $(".eventCards").toggleClass("m4 m6");

      $state.reload('budget');
      $state.reload('event');
      $state.go('event', {reload: true});
      $state.go('budget', {reload: true});
      // //make the cards bigger
      // $(".eventCards").toggleClass("m4 m6");

   }else {
     var updateEvent = {
       name: updatedEvent.name,
       budget: updatedEvent.budget
     }
     let newBalance = localStorage.balace
     $window.localStorage.setItem('eventBudgetTotal', updateEvent.budget);
     $window.localStorage.setItem('eventName', updateEvent.name);
    //  $window.localStorage.setItem('balance', parseFloat(localStorage.balance) - updatedEvent.money);

     console.log(updateEvent);

     $http.put(`${server}/users/${userId}/events/${localStorage.eventId}`, updateEvent)
     .then(function(response){
       console.log(response);
       self.updatedEvent = {}
      $state.reload('budget');
       getEvents();
       closeEditEventForm();
       $state.reload('budget');
       $state.reload('event');
       $state.go('event', {reload: true});

       $state.go('budget', {reload: true});
     });
     $state.reload('budget');
     $state.reload('event');
      $state.go('budget', {reload: true});
     //make the cards bigger
     $(".eventCards").toggleClass("m4 m6");

   }
 }

 function editEventFormToggleShow () {
   self.option = !self.option;
  if(self.option == true){
    $('#editEvent').css('display', 'block');
  }else{
    $('#editEvent').css('display', 'none');
  }
 }

 function closeEditEventForm() {
   $('#editEvent').css('display', 'none');
 }

 function addMoneyFormToggleShow () {
   self.option = !self.option;
  if(self.option == true){
    $('#addMoney').css('display', 'block');
  }else{
    $('#addMoney').css('display', 'none');
  }
 }

 function closeAddMoneyForm(){
   $('#addMoney').css('display', 'none');
 }

 self.closeAddMoneyForm = closeAddMoneyForm;
 self.closeEditEventForm = closeEditEventForm;
 self.addMoneyFormToggleShow = addMoneyFormToggleShow;
 self.editEventFormToggleShow = editEventFormToggleShow;
 self.closeEventDetails = closeEventDetails;
 self.getEventDetails = getEventDetails;
 self.editEvent = editEvent;
 self.deleteEvent = deleteEvent;
 self.getEvents = getEvents;
 self.addEvent = addEvent;
}
