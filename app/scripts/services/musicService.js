 angular.module('musicApp').service('musicService', ['$http', '$q','configService', function ($http, $q,configService) {

    var baseURL = configService.baseURL;
    
    this.getAlbumorArtist = function(data) {

        var deferred = $q.defer();
        $http.get(baseURL+'/search?q='+data+'&type=album').then(
            function (data) {
                var data = data.data
                deferred.resolve(data);
            },
            function (err, status) {
              deferred.reject(status); 
            });
        return deferred.promise;
    }


    this.getTrackList = function() {
        var deferred = $q.defer();
        $http.get("https://api.spotify.com/v1/albums/1M4anG49aEs4YimBdj96Oy").then(
            function (data) {
                var data = data.data
                deferred.resolve(data);
            },
            function (err, status) {
              deferred.reject(status); 
            });
        return deferred.promise;
    }

    


}])