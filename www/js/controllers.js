angular.module('starter.controllers', [])


//----------------@@@@@@@@@@@@@ START Movies Controller @@@@@@@@@@@@---------------//
  .controller('MoviesCtrl', function($scope,moviesService) {
    moviesService.getMovies().then(function(response){
          $scope.movies=response;
        }) ;
  }) 

                          //- - - - - - END- - - - - - - //


//----------------@@@@@@@@@@@@@ START Music Controller @@@@@@@@@@@@---------------//
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

                  //- - - - - - END- - - - - - - //


   //__________________________SUB____________________________________//
  .controller('MusicDetailCtrl', function($scope, $stateParams, Musicservice) {
    $scope.music = Musicservice.get($stateParams.musicId);
  })





                          //- - - - - - END- - - - - - - //



//----------------@@@@@@@@@@@@@ START DRAMA Controller @@@@@@@@@@@@---------------//
  .controller('DramasCtrl', function($scope) {
    $scope.settings = {
      enableDramas: true
     };

    $scope.commentOn={
      checked: true 
    };
  })
                          //- - - - - - END- - - - - - - //





//--------------@@@@@@@@@@@@ JAYS STUFF @@@@@@@@@@@@@@@@@@@@---------------------------------------------------------------------
 
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  .controller('myC', function($scope,letmewatch) {
    letmewatch.getTix().then(function(response){
          $scope.aiya=response;
        }) 
  }) 



    //-----------SUB---------------
  .controller('tickC', function($scope, $stateParams, letmewatch) {
   $scope.sian = letmewatch.get($stateParams.tixId);
  })



  ;






