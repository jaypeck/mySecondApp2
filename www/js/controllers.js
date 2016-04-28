angular.module('starter.controllers', [])

.controller('MoviesCtrl', function($scope,moviesService) {
  moviesService.getMovies().then(function(response){
        $scope.movies=response;
      }) ;
})



.controller('MusicsCtrl', function($scope, Musicservice) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.musics = Musicservice.all();
  $scope.remove = function(music) {
    Musicservice.remove(music);
  };
})

.controller('MusicDetailCtrl', function($scope, $stateParams, Musicservice) {
  $scope.music = Musicservice.get($stateParams.musicId);
})








.controller('DramasCtrl', function($scope) {
  $scope.settings = {
    enableDramas: true
   };

  $scope.commentOn={
    checked: true 
  };
}); 


//--------------@@@@@@@@@@@@ JAYS STUFF @@@@@@@@@@@@@@@@@@@@--------------------
 
.controller('myC', function($scope, Musicservice) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.musics = Musicservice.all();
  $scope.remove = function(music) {
    Musicservice.remove(music);
  };
})



//-----------SUB---------------

.controller('MusicDetailCtrl', function($scope, $stateParams, Musicservice) {
  $scope.music = Musicservice.get($stateParams.musicId);
})






