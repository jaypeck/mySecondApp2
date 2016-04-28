angular.module('starter.services', [])



//------------@@@@@@ MOVIE SERVICE @@@@@@@@------------------//

  .factory("moviesService",function($http,$q){
    return{
      getMovies:function(){
        var deferred=$q.defer();
        $http.get("json/movies.json")
        
        .success(function(data){
          deferred.resolve(data);
        })
        .error(function(err){
          deferred.reject(err);
        })
        
        return deferred.promise;
      }
    }
  })
         //__________END______________//



//------------@@@@@@ MUSIC  SERVICE @@@@@@@@------------------//
  .factory('Musicservice', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var musicslist = [{
      id: 0,
      name: 'Big Bang',
      lastText: 'Bang Bang Bang!',
      face: 'img/profile1.jpg'
    }, {
      id: 1,
      name: 'Zico',
      lastText: 'Mali Yes or No',
      face: 'img/profile2.png'
    }, {
      id: 2,
      name: 'Winner',
      lastText: 'Currently filming Cool Kindergarten...',
      face: 'img/profile3.jpg'
    }, {
      id: 3,
      name: 'Zion T',
      lastText: 'No make up',
      face: 'img/profile4.jpg'
    }, {
      id: 4,
      name: 'Ikon',
      lastText: 'Da li da da da da la di da',
      face: 'img/profile6.jpg'
    }];

    return {
      all: function() {
        return musicslist;
      },
      remove: function(music) {
        musicslist.splice(musicslist.indexOf(music), 1);
      },
      get: function(musicId) {
        for (var i = 0; i < musicslist.length; i++) {
          if (musicslist[i].id === parseInt(musicId)) {
            return musicslist[i];
          }
        }
        return null;
      }
    };
  }) 
          //__________END______________//  




//------------@@@@@@ CONCERT SERVICE @@@@@@@@------------------//

  .factory("letmewatch",function($http,$q){
    return{
      getTix:function(){
        var deferred=$q.defer();
        $http.get("json/somestuff.json")
        
        .success(function(data){
          deferred.resolve(data);
        })
        .error(function(err){
          deferred.reject(err);
        })
        
        return deferred.promise;
      }
    }
  })
         //__________END______________//



;


