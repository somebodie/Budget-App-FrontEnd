function BudgetController($http, $state, $scope, $rootScope, $window) {
  var self = this;
  self.itemId = null;
  self.option = false;
  var server = 'https://afternoon-reaches-46251.herokuapp.com';
  // var server = 'http://localhost:3000';

  console.log($window.localStorage);

  getItems($window.localStorage.eventId, $window.localStorage.eventBudgetTotal );

  function getItems(eventId, eventBudgetTotal){
    console.log("hit get items");
    $http.get(`${server}/users/${$window.localStorage.id}/events/${eventId}/items`)
    .then(function(response) {
      console.log(response);
      self.items = response.data;
      self.costTotal = 0;
      self.eventName = $window.localStorage.eventName;
      for(let i = 0; i < self.items.length; i++){
        console.log(self.items[i].cost);
        console.log(parseFloat(self.items[i].cost));
        self.costTotal += parseFloat(self.items[i].cost);
      }

      self.budgetTotal = parseFloat(eventBudgetTotal).toFixed(2);
      self.balance = self.budgetTotal - self.costTotal;
      $window.localStorage.setItem('balance', self.balance);
      console.log(localStorage);
      console.log(self.balance);

      console.log(self.costTotal);
    });
  }

  function AddItemFormToggleShow() {
     self.option = !self.option;
    if(self.option == true){
      $('#addItem').css('display', 'block');
    }else{
      $('#addItem').css('display', 'none');
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

  function addMoneyFormToggleShow () {
    self.option = !self.option;
   if(self.option == true){
     $('#addMoney').css('display', 'block');
   }else{
     $('#addMoney').css('display', 'none');
   }
  }

  // Item new post
  function addItem(newItem, currentUser) {
    // console.log("I'd like a new item please");
    console.log('hit add item');
    console.log(newItem);
    console.log($window.localStorage.eventId);
    console.log(currentUser);
    // self.event = event;

    let item = {
      name: newItem.name,
      cost: newItem.cost,
      event_id: $window.localStorage.event_id
    }

     $http.post(`${server}/users/${currentUser.id}/events/${$window.localStorage.eventId}/items`, item)
    .then(function(response) {
      console.log(response);
      //clear ng-model newItem variable
      self.newItem = {};
      getItems($window.localStorage.eventId, $window.localStorage.eventBudgetTotal);
      AddItemFormToggleShow();
      // self.items = response.data;
      // $state.go('/items', {items: response})
    });
  }

  // Item update page
  function updateItem(item) {
    console.log("NEED TO FIX SOMETHING!");
    console.log(item);
    console.log(self.itemId);
    console.log(localStorage);
    $http.patch(`${server}/items/${self.itemId}`, item )
    .then(function(response) {
      console.log(response);
      self.item = {};
      getItems($window.localStorage.eventId, $window.localStorage.eventBudgetTotal );
      closeUpdateItem();
    });
  }

  function openUpdateItem(item) {
    console.log(item);
    self.itemId = item.id;
    $('#editItem').css('display', 'block');
  }

  function closeUpdateItem() {
    $('#editItem').css('display', 'none');
  }

  // Item update page
  function deleteItem(eventId, itemId) {
    console.log("BYE BYE ITEM!");
    console.log(eventId);
    console.log(itemId);
    console.log(localStorage);
    $http.delete(`${server}/items/${itemId}`)
    .then(function(response) {
      console.log(response);

      getItems(eventId, $window.localStorage.eventBudgetTotal);
    });
  }

    self.closeUpdateItem = closeUpdateItem;
    self.openUpdateItem = openUpdateItem;
    self.addMoneyFormToggleShow = addMoneyFormToggleShow;
    self.editEventFormToggleShow = editEventFormToggleShow;
    self.AddItemFormToggleShow = AddItemFormToggleShow;
    self.addItem = addItem;
    self.getItems = getItems;
    self.updateItem = updateItem;
    self.deleteItem = deleteItem;
}
