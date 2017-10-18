/**
 * Created by Sushant Nayak on 3/10/2017.
 */
(function() {
    'use strict';
    angular.module('siemer')
        .controller('SearchController', searchController);

    searchController.$inject = ['$rootScope', '$scope', 'SiemerService','growl', '$stateParams', '$state', 'SiemerFactory'];

    function searchController($rootScope, $scope, SiemerService, growl, $stateParams, $state, SiemerFactory) {
        $rootScope.title = "Search View";
        $scope.validateSession = function() {
            SiemerFactory.validateSession();
        };
        $scope.search = function(){
            //SiemerFactory.validateSession();
            NProgress.start();
            console.log("Inside search");
            var searchReqData = {
                "caseId": $scope.caseID,
                "firstName": $scope.firstName? $scope.firstName : $scope.firstNm,
                "lastName": $scope.lastName? $scope.lastName : $scope.lastNm,
                "partnerName": $scope.partnerName,
                "assessmentDate": $scope.assessmentDate? $scope.assessmentDate : $scope.assessmentDt
            };
            SiemerService.searchRequest(searchReqData).then(function(results){
                console.log("searchReqData results ", results);
                if(results.status === "SUCCESS") {
                    growl.success("Search successful.");
                    $scope.searchResults = results.data;
                    console.log("searchResults ", $scope.searchResults);
                    $scope.searchFormActive = false;
                    $scope.sortOrder = 'assessmentDate';
                }else {
                    growl.success("Search Unsuccessful.");
                    $scope.searchResults = [];
                }
                NProgress.done();
            });
            NProgress.inc();
        };

        $scope.exportData = function (exportable) {
            //SiemerFactory.validateSession();
            var blob = new Blob([document.getElementById(exportable).innerHTML], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
            });
            saveAs(blob, "Search-Report.xls");
        };
        $scope.getAllOrgsByCity = function() {
            NProgress.start();
            var cityName = $stateParams.cityName;
            SiemerService.getAllOrgsByCity(cityName).then(function(results){
                console.log("inside getAllCitiesOrOrgsByCity", results);
                $scope.communityName = results.communityName;
                $scope.communityId = results.communityId;
                if(results.status === "SUCCESS") {
                    growl.success("Getting all Partners successful.");
                    $scope.allOrgs = results.data;
                    $scope.cityName = results.cityName;
                    $scope.communityId = results.communityId;
                    $scope.cityViewEnabled = false;
                    $scope.orgViewEnabled = true;
                    $scope.orgReportViewEnabled = false;
                    NProgress.done();
                } else {
                    growl.error("No partners found for community - \n"+results.communityName);
                }
            });
            NProgress.inc();
        };

        $scope.getAllCitiesAverages = function() {
            NProgress.start();
            SiemerService.getAllCitiesAverages().then(function(results){
                console.log("inside getAllCities", results);
                if(results.status === "SUCCESS") {
                    growl.success("Getting all City Averages successful.");
                    $scope.allCities = results.data;
                    $scope.cityViewEnabled = false;
                    $scope.orgViewEnabled = true;
                    $scope.orgReportViewEnabled = false;
                    NProgress.done();
                } else {
                    growl.error("Getting all City Averages Unsuccessful.");
                }
            });
            NProgress.inc();
        };
        $scope.gotoTeamView = function(businessId) {
            console.log("Going to add new members for partner: ", businessId);
            $state.go('teamView', { 'businessId': businessId } );
        };
        $scope.showReportByOrg = function(orgId) {
            NProgress.start();
            $state.go("reportsPmCM", { 'partnerId': orgId });
            NProgress.done();
        };

        $scope.showAllOrgsByCity = function(cityName){
            NProgress.start();
            $state.go("all_partner_city_view", { 'cityName': cityName });
            NProgress.done();
        };

        $scope.showParticipantsByPartner = function () {
            var businessId = $stateParams.businessId;
            NProgress.start();
            SiemerService.getParticipantsByPartner(businessId).then(function(results){
                console.log("inside getParticipantsByPartner", results);
                if(results.status === "SUCCESS") {
                    growl.success("Getting all Participants successful.");
                    $scope.allParticipants = results.data;
                    NProgress.done();
                } else {
                    growl.error("Getting all Participants successful.");
                }
            });
            NProgress.inc();
        };
        $scope.updateClientStatus = function (caseId, clientStatus) {
            console.log("inside updateClientStatus", caseId);
            NProgress.start();
            SiemerService.updateClientStatus(caseId, clientStatus).then(function(results){
                console.log("inside updateClientStatus", results);
                if(results.status === "SUCCESS") {
                    growl.success("Updated client status successfully.");
                    $scope.allParticipants = results.data;
                    NProgress.done();
                } else {
                    growl.error("Error during update, changes not saved.");
                }
            });
            NProgress.inc();
        };
        /*$scope.searchPageFinder = function() {
            $scope.roleNum = $stateParams.role;

        };
        $scope.launchSearchScreen = function(row) {
            $state.go('searchView', { 'role': $scope.roleNum, 'caseId': $scope.caseId } );
        }*/
    }
})();