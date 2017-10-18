(function() {
    'use strict';

    angular.module('siemer')
        .factory('SiemerFactory', siemerFactory);

    siemerFactory.$inject = ['$rootScope','SiemerService','$log', '$window', 'growl', '$location','$anchorScroll'];

    function siemerFactory($rootScope,SiemerService,$log, $window, growl, $location, $anchorScroll) {

        var userData = {};

        userData.getUserData = function(loginReqData) {
            NProgress.inc();
            SiemerService.validateLoginCredential(loginReqData).then(function(results){
                console.log("Login Data", results);
                if(results.status === "SUCCESS") {
                    growl.success("Login Successful");
                    siemerFactory.userData = results.data;
                    $rootScope.userData = results.data;
                    NProgress.inc();
                    $rootScope.$broadcast('logged-in');
                } else {
                    growl.error("Login unsuccessful, please try again.");
                    $rootScope.$broadcast('logged-out');
                    NProgress.done();
                }
            }).catch(function (error) {
                console.log("Login Data", error);
                growl.error("Login unsuccessful, please try again.");
            });
        };

        userData.validateSession = function(){
            NProgress.start();
            console.log("Inside validateSession");

            SiemerService.validateSession().then(function(results){
                console.log("validateSession Data", results);
                if(results.status === "SUCCESS") {
                    siemerFactory.userData = results.data;
                    $rootScope.userData = results.data;
                    NProgress.inc();
                    $rootScope.$broadcast('logged-in');
                } else {
                    $window.location.href = "#/login";
                    $rootScope.$broadcast('logged-out');
                }
                NProgress.done();
            });
            NProgress.inc();
        };

        userData.setLoggedOut = function(data) {
            siemerFactory.userInfo = data;
            $rootScope.$broadcast('logged-out');
        };

        userData.scrollTo = function(id) {
            $location.hash(id);
            $anchorScroll();
        };

        $window.onbeforeunload = function () {
            userData.validateSession();
            // handle the exit event
            console.log("$window.onbeforeunload");
        };
        return userData;
    }

})();
