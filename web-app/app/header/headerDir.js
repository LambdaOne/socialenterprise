(function() {
    'use strict';

    angular.module('siemer')
        .directive('header', header);

    header.$inject = [];

    function header() {
        return {
            templateUrl: 'app/header/header.html',
            replace: true,
            controller: ['$scope','SiemerService','$window', 'SiemerFactory','growl',
                            function($scope, SiemerService,$window,SiemerFactory, growl) {
                $scope.incompleteCount = 0;
                $scope.validateSession = function() {
                    console.log("Header validateSession");
                    SiemerFactory.validateSession();
                };
            	$scope.invalidateSession = function() {
            		SiemerService.invalidateSession().then(function(results){         
                        console.log("invalidateSession results ", results);
                        if(results.signoutResponse === "SUCESSFULL-SIGNOUT") {
                            growl.success("Log out successful.");
                            $window.location.href = '#/';                            
                        } else {
                            growl.error("Log out Unsuccessful.");
                        }
                    });
            		
            	}
            }],
            scope:  {
                sectionData: "="
            },
            restrict: 'AEC'
        };
    }
})();