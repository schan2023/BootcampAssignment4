angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('https://fathomless-bastion-29959.herokuapp.com/api/listings');
    },

	create: function(listing) {
	  return $http.post('https://fathomless-bastion-29959.herokuapp.com/api/listings', listing);
    },

    delete: function(id) {
      return $http.delete('https://fathomless-bastion-29959.herokuapp.com/api/listings/'+id);
    }
  };

  return methods;
});
