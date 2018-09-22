angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    var getListings = function () {
        Listings.getAll().then(function(response) {
        $scope.listings = response.data;
      }, function(error) {
        console.log('Unable to retrieve listings:', error);
      });
    }

    getListings();
    $scope.detailedInfo = undefined;

    $scope.addListing = function() {
      Listings.create($scope.newListing).then(function(response) {
        getListings();
       }, function(error) {
         console.log(error);
       });

       $scope.newListing = null;
    };

    $scope.deleteListing = function(index) {
      $scope.detailedInfo = $scope.listings[index];
       Listings.delete($scope.listings[index]._id).then(function(response) {
         getListings();
        }, function(error) {
          console.log(error);
        });
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);
