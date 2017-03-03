function BudgetController($http, $state) {
  var self = this;
  var server = 'https://polar-retreat-61013.herokuapp.com/'


    // Item index page
  function getItem() {
    $http.get(`${server}/users/:user_id/events/:event_id/items`)
          .then(function(response) {
            console.log(response);
            $state.go('/items', {items: response})
          })
      }

    // Item new post
    function newItem() {
      $http.post(`${server}/users/:user_id/events/:event_id/items`)
            .then(function(response) {
              console.log(response);
              $state.go('/items', {items: response})
            })
        }

    // Item show page
    function showItem() {
      $http.get(`${server}/items/:id`)
            .then(function(response) {
              console.log(response);
              $state.go('/items', {item: response})
            })
        }


    // Item Create page
    function createItem() {
      $http.get(`${server}/items/:id`)
            .then(function(response) {
              console.log(response);
              $state.go('/items', {item: response})
            })
        }


    // Item update page
    function updateItem() {
      $http.patch(`${server}/items/:id`)
            .then(function(response) {
              console.log(response);
              $state.go('/items', {item: response})
            })
        }


    // Item update page
    function deleteItem() {
      $http.delete(`${server}/items/:id`)
            .then(function(response) {
              console.log(response);
              $state.go('/items', {item: response})
            })
        }


    self.getItem = getItem;
    self.newItem = newItem;
    self.showItem = showItem;
    self.createItem = createItem;
    self.updateItem = updateItem;
    self.deleteItem = deleteItem;
}
