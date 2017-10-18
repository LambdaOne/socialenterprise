(function() {
    'use strict';
    angular.module('siemer')
        .controller('CasemgmtController', casemgmtController);

    casemgmtController.$inject = ['$rootScope', '$scope', 'SiemerService', 'SiemerFactory','growl', '$state', '$window','$timeout'];

    function casemgmtController($rootScope, $scope, SiemerService, SiemerFactory, growl, $state,$window, $timeout) {

        $scope.validateSession = function() {
            SiemerFactory.validateSession();
        };
        $scope.findCaseNumber = function() {
            NProgress.start();
            SiemerService.findCaseNumber($scope.caseID).then(function(results){
                console.log("findCaseNumber results: ", results);
                if(results.status === "SUCCESS") {
                    growl.success("Case Search successful.");
                    $scope.result = results;
                    $scope.memberAlreadyExists = true;
                    //$window.location.href = '#/langchoice';
                } else {
                    growl.info("Case Search Unsuccessful, using external caseId.");
                    $scope.result = {};
                    $scope.memberAlreadyExists = false;
                }
                NProgress.done();
            });
            NProgress.inc();
        };

        $scope.useFoundClient = function (caseId) {
            NProgress.start();
            $rootScope.useFoundClient = true;
            SiemerService.useFoundClient(caseId).then(function(results){
                console.log("useFoundClient results: ", results);
                if(results.status === "SUCCESS") {
                    //growl.success("Case Search successful.", {ttl: 6000});
                    $window.location.href = "#/langchoice";
                }
                NProgress.done();
            });
            NProgress.inc();
        }
    }
})();