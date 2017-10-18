(function() {
    'use strict';
    angular.module('siemer')
        .controller('IncompleteAssessmentController', incompleteAssessmentController);

    incompleteAssessmentController.$inject = ['$rootScope', '$scope', 'SiemerService', 'SiemerFactory', 'growl', '$stateParams', '$window'];

    function incompleteAssessmentController($rootScope, $scope, SiemerService, SiemerFactory, growl, $stateParams,$window) {

        $scope.validateSession = function() {
            SiemerFactory.validateSession();
        };
        $scope.today = new Date();
        $scope.getIncompleteAssessmentList = function () {
            NProgress.start();
            SiemerService.fetchIncompleteAssessment().then(function(results){
                console.log("fetchIncompleteAssessment results: ", results);
                if(results.status === "SUCCESS") {
                    growl.success("Incomplete Assessments Loaded successfully.");
                    $scope.clientCaseList = results.data[0];
                }
                NProgress.done();
            });
            NProgress.inc();
        }

        $scope.getCaseReportDetails = function (caseNumberWithMgid) {
            console.log("Inside getCaseReportDetails: ", caseNumberWithMgid);
            NProgress.start();
            SiemerService.getCaseReportDetails(caseNumberWithMgid).then(function(results){
                console.log("getCaseReportDetails results: ", results);
                if(results.status === "SUCCESS") {
                    growl.success("Case Reports Loaded successfully.");
                }
                NProgress.done();
            });
            NProgress.inc();

        }
    }

})();
