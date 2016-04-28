// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])




  // {{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}{IONIC SHIT{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}//
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    
    });
  })

                      // {{{{{{{{END IONIC SHIT{{{{{//




  // @@@@@@@@@@@@@@@@@@@@@@@@@ START APP @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//
  .config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

  // Each tab has its own nav history stack:

      .state('tab.movies', {
        url: '/movies',
        views: {
          'tab-movies': {
            templateUrl: 'templates/tab-movies.html',
            controller: 'MoviesCtrl'
          }
        }
      })

      .state('tab.musics', {
          url: '/musics',
          views: {
            'tab-musics': {
              templateUrl: 'templates/tab-musics.html',
              controller: 'MusicsCtrl'
            }
          }
        })
        .state('tab.music-detail', {
          url: '/musics/:musicId',
          views: {
            'tab-musics': {
              templateUrl: 'templates/music-detail.html',
              controller: 'MusicDetailCtrl'
            }
          }
        })

      .state('tab.dramas', {
        url: '/dramas',
        views: {
          'tab-dramas': {
            templateUrl: 'templates/tab-dramas.html',
            controller: 'DramasCtrl'
          }
        }
      })


 
//-------------@@@@@@@@@@@ JAYS SHIT @@@@@@@@@@@@@@@@@@@@@@@@@@@----------///

     .state('tab.concert', {
          url: '/concert',
          views: {
            'hahaha': {
              templateUrl: 'templates/concert.html',
              controller: 'myC'
            }
          }
        })
                        //-----------SUB---------------
      
      .state('tab.tickets', {
          url: '/concert/:tixId',
          views: {
            'hahaha': {
              templateUrl: 'templates/tickets.html',
              controller: 'tickC'
            }
          }
        });



  




  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/movies');

});
