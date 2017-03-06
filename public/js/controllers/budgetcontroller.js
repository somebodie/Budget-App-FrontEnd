function BudgetController($http, $state, $scope, $rootScope, $window) {
  var self = this;
  // var server = 'https://polar-retreat-61013.herokuapp.com';
  var server = 'http://localhost:3000';

  self.option = false;
  console.log($window.localStorage);
  getItems($window.localStorage.eventId, $window.localStorage.eventBudgetTotal );
  //   // Item index page
  // $scope.$on('getEvent', function(event, events) {
  //   console.log('WE GETTING ITEMS!');
  //   // console.log(events);
  //
  //   $http.get(`${server}/users/${$window.localStorage.id}/events/:event_id/items`)
  //         .then(function(response) {
  //           console.log(response);
  //           $state.go('/items', {items: response})
  //         })
  // })

    function getItems(eventId, eventBudgetTotal){
      console.log("hit get items");
      $http.get(`${server}/users/${$window.localStorage.id}/events/${eventId}/items`)
      .then(function(response) {
        console.log(response);
        self.items = response.data;
        self.costTotal = 0;
        for(let i = 0; i < self.items.length; i++){
          console.log(self.items[i].cost);
          console.log(parseFloat(self.items[i].cost));
          self.costTotal += parseFloat(self.items[i].cost);
        }

        self.budgetTotal = parseFloat(eventBudgetTotal).toFixed(2);
        self.balance = self.budgetTotal - self.costTotal;
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

    // Item show page
    // function showItem() {
    //   console.log('SHOW ME THE ITEM!');
    //
    //   $http.get(`${server}/items/:id`)
    //         .then(function(items) {
    //           console.log(items);
    //           $state.go('/items', {items: items})
    //         })
    //     }


    // Item Create page
    // function createItem() {
    //   console.log("LET'S CREATE!");
    //   $http.get(`${server}/items/:id`)
    //         .then(function(response) {
    //           console.log(response);
    //           $state.go('/items', {item: response})
    //         })
    //     }


    // Item update page
    function updateItem() {
      console.log("NEED TO FIX SOMETHING!");
      $http.patch(`${server}/items/:id`)
            .then(function(response) {
              console.log(response);
            })
        }


    // Item update page
    function deleteItem(itemId, eventId) {
      console.log("BYE BYE ITEM!");
      $http.delete(`${server}/items/${itemId}`)
      .then(function(response) {
        console.log(response);
        getItems(eventId, $window.localStorage.eventBudgetTotal);
        // $state.go('/items')
      })
    }


    // self.getItems = getItems;
    self.AddItemFormToggleShow = AddItemFormToggleShow;
    self.addItem = addItem;
    self.getItems = getItems;
    // self.createItem = createItem;
    self.updateItem = updateItem;
    self.deleteItem = deleteItem;
}
