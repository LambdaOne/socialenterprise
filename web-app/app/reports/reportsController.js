(function() {
    'use strict';
    angular.module('siemer')
        .controller('ReportsController', reportsController);

    reportsController.$inject = ['$rootScope', '$scope', 'SiemerService','growl', '$stateParams', '$state'];

        function reportsController($rootScope, $scope, SiemerService, growl, $stateParams, $state) {
            $scope.today = new Date(moment());
            $scope.oneMonthBack = new Date(moment().subtract('months', 1));
            $scope.data = [[0,0,0,0,0], [0,0,0,0,0]];
            $scope.partnerEntryExitData = [[0,0,0,0,0], [0,0,0,0,0]];
            $scope.datasetOverride = [
                {
                    fill: true,
                    backgroundColor: [
                        "#C3DA60",
                        "#C3DA60",
                        "#C3DA60",
                        "#C3DA60",
                        "#C3DA60",
                        "#C3DA60"
                    ]
                },
                {
                    fill: true,
                    backgroundColor: [
                        '#3294C0',
                        '#3294C0',
                        '#3294C0',
                        '#3294C0',
                        '#3294C0',
                        '#3294C0'
                    ]
                }];

            $scope.showReportByPartner = function() {
                NProgress.start();
                console.log("inside showReportByPartner businessId: ", $scope.assessmentType);
                var partnerId = $stateParams.partnerId;
                if($scope.startDate === undefined) {
                    $scope.startDate = $scope.oneMonthBack;
                }
                if($scope.endDate === undefined) {
                    $scope.endDate = $scope.today;
                }
                //
                //
                if($scope.assessmentType === undefined) {
                    $scope.assessmentType = "entry";
                }

                SiemerService.showReportByPartner(partnerId, $scope.startDate, $scope.endDate, $scope.assessmentType).then(function(results){
                    console.log("inside showReportByPartner", results);
                    if(results.status === "SUCCESS") {
                        growl.success("Loading of partner report successful.");
                        var partner = results.data.partner;
                        var network = results.data.national;
                        $scope.partnerCount = partner.count;
                        $scope.networkCount = network.count;

                        $scope.labels = ['Finances', 'Basic Needs', 'Education', 'Health', 'Community'];
                        $scope.series = ['Partner', 'Network'];
                        $scope.data = [
                            [partner.finances,partner.basicneeds, partner.education, partner.health, partner.community],
                            [network.finances,network.basicneeds, network.education, network.health, network.community]];

                        NProgress.done();
                    } else {
                        growl.error("Loading of partner report Unsuccessful.");
                    }
                });
                NProgress.inc();
            };

            $scope.showReportByPartnerAvgScores = function() {
                NProgress.start();
                var partnerId = $stateParams.partnerId;
                if($scope.startDate2 === undefined) {
                    $scope.startDate2 = $scope.oneMonthBack;
                }
                if($scope.endDate2 === undefined) {
                    $scope.endDate2 = $scope.today;
                }

                SiemerService.showReportByPartnerAvgScores(partnerId, $scope.startDate2, $scope.endDate2).then(function(results){
                    console.log("inside showReportByPartnerAvgScores", results);
                    if(results.status === "SUCCESS") {
                        growl.success("Loading of partner report successful.");
                        var entry = results.data.entry;
                        var exit = results.data.exit;
                        $scope.entryCount = entry.count;
                        $scope.exitCount = exit.count;

                        $scope.labels = ['Finances', 'Basic Needs', 'Education', 'Health', 'Community'];
                        $scope.partnerEntryExitSeries = ['Entry', 'Exit'];
                        $scope.partnerEntryExitData = [
                            [entry.finances, entry.basicneeds, entry.education, entry.health, entry.community],
                            [exit.finances, exit.basicneeds, exit.education, exit.health, exit.community]];

                        NProgress.done();
                    } else {
                        growl.error("Loading of partner report Unsuccessful.");
                    }
                });
                NProgress.inc();
            };
            /** Director */

            $scope.getPartnersForThisCommunity = function() {
                var communityId = $stateParams.communityId;
                SiemerService.getPartnersForThisCommunity(communityId).then(function(results){
                    console.log("inside getPartnersForThisCommunity", results);
                    if(results.status === "SUCCESS") {
                        growl.success("Loading of partner list successful.");
                        $scope.partnerList = results.data;
                        $scope.selectedParterId = $scope.partnerList[0].memberid;
                        $scope.selectedParterNum = $scope.partnerList[0].memberid;

                        NProgress.done();
                    } else {
                        growl.error("Loading of partner list Unsuccessful.");
                    }
                });
                NProgress.inc();

            };

            $scope.showReportByCommunity = function() {
                NProgress.start();
                console.log("inside showReportByPartner businessId: ", $scope.assessmentType);
                var communityId = $stateParams.communityId;
                if($scope.startDate === undefined) {
                    $scope.startDate = $scope.oneMonthBack;
                }
                if($scope.endDate === undefined) {
                    $scope.endDate = $scope.today;
                }
                if($scope.assessmentType === undefined) {
                    $scope.assessmentType = "entry";
                }

                SiemerService.showReportByCommunity(communityId, $scope.startDate, $scope.endDate, $scope.assessmentType, $scope.selectedParterId).then(function(results){
                    console.log("inside showReportByCommunity", results);
                    if(results.status === "SUCCESS") {
                        growl.success("Loading of partner report successful.");
                        var partner = results.data.partner;
                        var network = results.data.national;
                        $scope.partnerCount = partner.count;
                        $scope.networkCount = network.count;

                        $scope.labels = ['Finances', 'Basic Needs', 'Education', 'Health', 'Community'];
                        $scope.series = ['Community/Partner', 'Network'];
                        $scope.data = [
                            [partner.finances,partner.basicneeds, partner.education, partner.health, partner.community],
                            [network.finances,network.basicneeds, network.education, network.health, network.community]];

                        NProgress.done();
                    } else {
                        growl.error("Loading of partner report Unsuccessful.");
                    }
                });
                NProgress.inc();
            };

            $scope.showReportByCommunityAvgScores = function() {
                NProgress.start();
                var communityId = $stateParams.communityId;
                if($scope.startDate2 === undefined) {
                    $scope.startDate2 = $scope.oneMonthBack;
                }
                if($scope.endDate2 === undefined) {
                    $scope.endDate2 = $scope.today;
                }

                SiemerService.showReportByCommunityAvgScores(communityId, $scope.startDate2, $scope.endDate2, $scope.selectedParterNum).then(function(results){
                    console.log("inside showReportByCommunityAvgScores", results);
                    if(results.status === "SUCCESS") {
                        growl.success("Loading of community report successful.");
                        var entry = results.data.entry;
                        var exit = results.data.exit;
                        $scope.entryCount = entry.count;
                        $scope.exitCount = exit.count;

                        $scope.labels = ['Finances', 'Basic Needs', 'Education', 'Health', 'Community'];
                        $scope.partnerEntryExitSeries = ['Entry', 'Exit'];
                        $scope.partnerEntryExitData = [
                            [entry.finances, entry.basicneeds, entry.education, entry.health, entry.community],
                            [exit.finances, exit.basicneeds, exit.education, exit.health, exit.community]];

                        NProgress.done();
                    } else {
                        growl.error("Loading of community report Unsuccessful.");
                    }
                });
                NProgress.inc();
            };

            /** Admin Reports */

            $scope.getAllNetworkCities = function() {
                SiemerService.getAllNetworkCities().then(function(results){
                    console.log("inside getAllNetworkCities", results);
                    if(results.status === "SUCCESS") {
                        growl.success("Loading of city list successful.");
                        $scope.cityList = results.data;
                        $scope.selectedCityId = $scope.cityList[0].memberid;
                        $scope.selectedCityNum = $scope.cityList[0].memberid;

                        NProgress.done();
                    } else {
                        growl.error("Loading of city list Unsuccessful.");
                    }
                });
                NProgress.inc();

            };

            $scope.showReportByCity = function() {
                NProgress.start();
                console.log("inside showReportByCity");
                if($scope.startDate === undefined) {
                    $scope.startDate = $scope.oneMonthBack;
                }
                if($scope.endDate === undefined) {
                    $scope.endDate = $scope.today;
                }
                if($scope.assessmentType === undefined) {
                    $scope.assessmentType = "entry";
                }

                SiemerService.showReportByCity($scope.selectedCityId, $scope.startDate, $scope.endDate, $scope.assessmentType).then(function(results){
                    console.log("inside showReportByPartner", results);
                    if(results.status === "SUCCESS") {
                        growl.success("Loading of community city report successful.");
                        var partner = results.data.partner;
                        var network = results.data.national;
                        $scope.partnerCount = partner.count;
                        $scope.networkCount = network.count;

                        $scope.labels = ['Finances', 'Basic Needs', 'Education', 'Health', 'Community'];
                        $scope.series = ['Community', 'Network'];
                        $scope.data = [
                            [partner.finances,partner.basicneeds, partner.education, partner.health, partner.community],
                            [network.finances,network.basicneeds, network.education, network.health, network.community]];

                        NProgress.done();
                    } else {
                        growl.error("Loading of community city report Unsuccessful.");
                    }
                });
                NProgress.inc();
            };

            $scope.showReportByCityAvgScores = function() {
                NProgress.start();
                if($scope.startDate2 === undefined) {
                    $scope.startDate2 = $scope.oneMonthBack;
                }
                if($scope.endDate2 === undefined) {
                    $scope.endDate2 = $scope.today;
                }

                SiemerService.showReportByCityAvgScores($scope.selectedCityNum, $scope.startDate2, $scope.endDate2).then(function(results){
                    console.log("inside showReportByCityAvgScores", results);
                    if(results.status === "SUCCESS") {
                        growl.success("Loading of network report successful.");
                        var entry = results.data.entry;
                        var exit = results.data.exit;
                        $scope.entryCount = entry.count;
                        $scope.exitCount = exit.count;

                        $scope.labels = ['Finances', 'Basic Needs', 'Education', 'Health', 'Community'];
                        $scope.partnerEntryExitSeries = ['Entry', 'Exit'];
                        $scope.partnerEntryExitData = [
                            [entry.finances, entry.basicneeds, entry.education, entry.health, entry.community],
                            [exit.finances, exit.basicneeds, exit.education, exit.health, exit.community]];

                        NProgress.done();
                    } else {
                        growl.error("Loading of network report Unsuccessful.");
                    }
                });
                NProgress.inc();
            };
            /** End of Admin reports */

            $scope.newMembers = function(businessId) {
                console.log("Going to add new members for partner: ", businessId);
                $state.go('new_caseworker', { 'businessId': businessId } );
            };

            $scope.getIndividualCaseReport = function() {
                NProgress.start();
                console.log("inside getIndividualCaseReport businessId: ", $stateParams.businessId);
                $scope.caseId = $stateParams.caseId;
                SiemerService.getIndividualCaseReport($scope.caseId).then(function(results){
                    console.log("inside getIndividualCaseReport", results);
                    if(results.status === "SUCCESS") {
                        growl.success("Loading of Case Report successful.");
                        $scope.caseReportData = results.data;
                        var maxIndex = $scope.caseReportData.list.length - 1;
                        $scope.currentMgId = maxIndex+1;
                        $scope.mostRecent = $scope.caseReportData.list[maxIndex];
                        $scope.labels = ['Finances', 'Basic Needs', 'Education', 'Health', 'Community'];
                        $scope.series = ['Value'];
                        $scope.data = [$scope.mostRecent.financesTotal,$scope.mostRecent.basicneedsTotal,
                            $scope.mostRecent.educationTotal,$scope.mostRecent.healthTotal,
                            $scope.mostRecent.communityTotal];

                        NProgress.done();
                    } else {
                        growl.success("Loading of Case Report Unsuccessful.");
                    }
                });
                NProgress.inc();
            };

            $scope.getAssessmentData = function(itemIndex) {
                $scope.currentMgId = itemIndex+1;
                $scope.mostRecent = $scope.caseReportData.list[itemIndex];
                $scope.labels = ['Finances', 'Basic Needs', 'Education', 'Health', 'Community'];
                $scope.series = ['Value'];
                $scope.data = [$scope.mostRecent.financesTotal,$scope.mostRecent.basicneedsTotal,
                    $scope.mostRecent.educationTotal,$scope.mostRecent.healthTotal,
                    $scope.mostRecent.communityTotal];

            };

            $scope.getAnswersByCaseIdAndMgid = function() {
                var caseId = $stateParams.caseId;
                var mgId = $stateParams.mgId;

                SiemerService.getAnswersByCaseIdAndMgid(caseId, mgId).then(function(results){
                    console.log("inside getAnswersByCaseIdAndMgid", results);
                    if(results.status === "SUCCESS") {
                        growl.success("Loading of Case Report successful.");
                        $scope.data = results.data;
                        NProgress.done();
                    } else {
                        growl.success("Loading of Case Report Unsuccessful.");
                    }
                });
                NProgress.inc();
            };

            $scope.exportData = function (exportable) {
                //SiemerFactory.validateSession();
                var blob = new Blob([document.getElementById(exportable).innerHTML], {
                    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
                });
                saveAs(blob, "Assessment-Report.xls");
            };
        }
})();