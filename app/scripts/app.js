'use strict';

angular.module('blurApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
    .factory('StackMobService', function(){
        StackMob.init({
            appName: "blur",
            publicKey: "9997a6a3-2032-42a7-9dee-efb63005265e",
            apiVersion: 0
        });

        var User = StackMob.Model.extend( {schemaName:"user"} );
        var Users = StackMob.Collection.extend( { model: User } );

        var Photo = StackMob.Model.extend( {schemaName:"photo"} );
        var Photos = StackMob.Collection.extend( { model: Photo } );

        var Genre = StackMob.Model.extend( {schemaName:"genre"} );
        var Genres = StackMob.Collection.extend( { model: Genre } );

        var StackMobService = {
            name: "StackMob"


        };

        return StackMobService;
    });
