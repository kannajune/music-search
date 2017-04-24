angular.module('musicApp').controller('homeCtrl',  ['$scope','configService','musicService', function ($scope,configService,musicService) {

	$scope.search_query = ''
	$scope.showResults = false
	$scope.search = function(){
		 musicService.getAlbumorArtist($scope.search_query).then(function (data) {
	        $scope.musicList = data.albums.items.slice(0, 12)
	        $scope.showResults = true
	    },function (data, status) {
	        console.log("Data not loaded")
	        $scope.showResults = false
	    });
	}

    $scope.modalShown = false;
	$scope.toggleModal = function(data) {
	    $scope.modalShown = !$scope.modalShown;
	   		 $scope.imagelg = data.images[0].url
	   		 $scope.imagesm = data.images[2].url
	   		 $scope.author = data.artists[0].name
	    musicService.getTrackList().then(function (obj) {
	        $scope.trackList = obj.tracks.items.slice(0, 5)
	    },function (data, status) {
	         console.log("Data not loaded")
	    });
	};

   $scope.scollDown =  function(){
   	window.scrollBy(0, 350);
   }


}]);

// ABBA Gold


