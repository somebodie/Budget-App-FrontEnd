function BudgetController($http, $state, $scope, $rootScope) {
  var self = this;
  var server = 'https://polar-retreat-61013.herokuapp.com/'


    // Item index page
  function getItem(eventInfo) {
    console.log('WE GETTING ITEMS!');
    console.log(eventInfo);
    // $http.get(`${server}/users/:user_id/events/:event_id/items`)
    //       .then(function(response) {
    //         console.log(response);
    //         $state.go('/items', {items: response})
    //       })
      }

    // Item new post
    function newItem() {
      console.log("I'd like a new item please");
      // $http.post(`${server}/users/:user_id/events/:event_id/items`)
      //       .then(function(response) {
      //         console.log(response);
      //         $state.go('/items', {items: response})
      //       })
        }

    // Item show page
    function showItem() {
      console.log('SHOW ME THE ITEM!');
      // $http.get(`${server}/items/:id`)
      //       .then(function(response) {
      //         console.log(response);
      //         $state.go('/items', {item: response})
      //       })
        }


    // Item Create page
    function createItem() {
      console.log("LET'S CREATE!");
      // $http.get(`${server}/items/:id`)
      //       .then(function(response) {
      //         console.log(response);
      //         $state.go('/items', {item: response})
      //       })
        }


    // Item update page
    function updateItem() {
      console.log("NEED TO FIX SOMETHING!");
      // $http.patch(`${server}/items/:id`)
      //       .then(function(response) {
      //         console.log(response);
      //         $state.go('/items', {item: response})
      //       })
        }


    // Item update page
    function deleteItem() {
      console.log("BYE BYE ITEM!");
      // $http.delete(`${server}/items/:id`)
      //       .then(function(response) {
      //         console.log(response);
      //         $state.go('/items', {item: response})
      //       })
        }


    self.getItem = getItem;
    self.newItem = newItem;
    self.showItem = showItem;
    self.createItem = createItem;
    self.updateItem = updateItem;
    self.deleteItem = deleteItem;
}
