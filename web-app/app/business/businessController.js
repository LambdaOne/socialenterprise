(function() {
    'use strict';
    angular.module('siemer')
        .controller('BusinessController', businessController);

    businessController.$inject = ['$rootScope', '$scope', 'SiemerService','growl', '$stateParams', '$state'];


    function businessController($rootScope, $scope, SiemerService, growl, $stateParams,$state) {
        $scope.partnerSavedSuccessfully = false;
        $scope.partnerMembersSavedSuccessfully = false;
        $scope.cityViewEnabled = false;
        $scope.orgViewEnabled = false;
        $scope.orgReportViewEnabled = false;
        $scope.recordExists = false;

        $scope.saveCommunityInfo = function(){
            NProgress.start();
            console.log("Inside Login Data");
            var communityData = {
                "communityname": $scope.communityname,
                "address1": $scope.address1,
                "address2": $scope.address2,
                "city": $scope.city,
                "state": $scope.selectedState,
                "zip": $scope.zip,
                "businessId": $scope.businessId,
                "recordExists": $scope.recordExists
            };
            SiemerService.saveCommunityInfo(communityData).then(function(results){
                console.log("inside saveCommunityInfo", results);
                $scope.recordExists = false;
                if(results.status === "SUCCESS") {
                    growl.success("Community Information saved successfully.");
                    $scope.communityname = "";
                    $scope.address1 = "";
                    $scope.address2 = "";
                    $scope.city = "";
                    $scope.selectedState = "";
                    $scope.zip = "";
                    $scope.businessId = results.data.memberid;
                    NProgress.done();
                    window.history.back();
                } else {
                    growl.error("Community Information save Unsuccessful.");
                }
            });
            NProgress.inc();
        };

        $scope.savePartnerInfo = function(){
            NProgress.start();
            console.log("Inside Login Data");
            var partnerData = {
                "partnername": $scope.partnername,
                "address1": $scope.address1,
                "address2": $scope.address2,
                "city": $scope.city,
                "state": $scope.selectedState,
                "zip": $scope.zip,
                "businessId": $scope.businessId,
                "recordExists": $scope.recordExists,
                "communityId": $stateParams.communityId
            };
            SiemerService.savePartnerInfo(partnerData).then(function(results){
                console.log("inside savePartnerInfo", results);
                if(results.status === "SUCCESS") {
                    growl.success("Partner Information saved successfully.");
                    $scope.partnerSavedSuccessfully = true;
                    $scope.partnername = "";
                    $scope.address1 = "";
                    $scope.address2 = "";
                    $scope.city = "";
                    $scope.selectedState = "";
                    $scope.zip = "";
                    $scope.businessId = results.data.memberid;
                    NProgress.done();
                    window.history.back();
                } else {
                    growl.error("Partner Information save Unsuccessful.");
                }
            });
            NProgress.inc();
        };

        $scope.getCommunityData = function(){
            console.log("Inside getCommunityData");
            var businessId = $stateParams.businessId;
            if(businessId !== undefined) {
                NProgress.start();
                SiemerService.getCommunityData(businessId).then(function (results) {
                    console.log("inside getCommunityData", results);
                    if (results.status === "SUCCESS") {
                        growl.success("Community Information saved successfully.");
                        $scope.partnerSavedSuccessfully = true;
                        $scope.communityname = results.data.partnername;
                        $scope.address1 = results.data.address1;
                        $scope.address2 = results.data.address2;
                        $scope.city = results.data.city;
                        $scope.selectedState = results.data.selectedState;
                        $scope.zip = results.data.zip;
                        $scope.businessId = businessId;
                        $scope.recordExists = true;
                        NProgress.done();
                    } else {
                        growl.error("Community Information save Unsuccessful.");
                    }
                });
                NProgress.inc();
            }
        };

        $scope.getPartnerData = function(){
            console.log("Inside getPartnerData");
            var businessId = $stateParams.businessId;
            if(businessId !== undefined) {
                NProgress.start();
                SiemerService.getPartnerData(businessId).then(function (results) {
                    console.log("inside getPartnerData", results);
                    if (results.status === "SUCCESS") {
                        growl.success("Partner Information saved successfully.");
                        $scope.partnerSavedSuccessfully = true;
                        $scope.partnername = results.data.partnername;
                        $scope.address1 = results.data.address1;
                        $scope.address2 = results.data.address2;
                        $scope.city = results.data.city;
                        $scope.selectedState = results.data.selectedState;
                        $scope.zip = results.data.zip;
                        $scope.businessId = businessId;
                        $scope.recordExists = true;
                        NProgress.done();
                    } else {
                        growl.error("Partner Information save Unsuccessful.");
                    }
                });
                NProgress.inc();
            }
        };

        $scope.allCityView = function(){
            NProgress.start();
            SiemerService.allCityView().then(function(results){
                console.log("inside allCityView", results);
                if(results.status === "SUCCESS") {
                    growl.success("Loading city data successful.");
                    $scope.allCities = results.data;
                    $scope.cityViewEnabled = true;
                    $scope.orgViewEnabled = false;
                    $scope.orgReportViewEnabled = false;
                    NProgress.done();
                } else {
                    growl.error("Loading city data Unsuccessful.");
                }
            });
            NProgress.inc();
        };

        $scope.getAllOrgsByCity = function(cityName){
            NProgress.start();
            $state.go("all_partner_city_view", { 'cityName': cityName });
            NProgress.done();
        };

        $scope.backToCityView = function() {
            NProgress.start();
            NProgress.inc();
            $scope.cityViewEnabled = true;
            $scope.orgViewEnabled = false;
            $scope.orgReportViewEnabled = false;
            NProgress.done();
        };

        $scope.gotoReportsForBusinessId = function(businessId){
            NProgress.start();
            $state.go("reportView", { 'businessId': businessId });
            NProgress.done();
        };

        $scope.states = [{code:"AL", label:"Alabama"},
            {code:"AK", label:"Alaska"},
            {code:"AZ", label:"Arizona"},
            {code:"AR", label:"Arkansas"},
            {code:"CA", label:"California"},
            {code:"CO", label:"Colorado"},
            {code:"CT", label:"Connecticut"},
            {code:"DE", label:"Delaware"},
            {code:"DC", label:"District of Columbia"},
            {code:"FL", label:"Florida"},
            {code:"GA", label:"Georgia"},
            {code:"HI", label:"Hawaii"},
            {code:"ID", label:"Idaho"},
            {code:"IL", label:"Illinois"},
            {code:"IN", label:"Indiana"},
            {code:"IA", label:"Iowa"},
            {code:"KS", label:"Kansas"},
            {code:"KY", label:"Kentucky"},
            {code:"LA", label:"Louisiana"},
            {code:"ME", label:"Maine"},
            {code:"MD", label:"Maryland"},
            {code:"MA", label:"Massachusetts"},
            {code:"MI", label:"Michigan"},
            {code:"MN", label:"Minnesota"},
            {code:"MS", label:"Mississippi"},
            {code:"MO", label:"Missouri"},
            {code:"MT", label:"Montana"},
            {code:"NE", label:"Nebraska"},
            {code:"NV", label:"Nevada"},
            {code:"NH", label:"New Hampshire"},
            {code:"NJ", label:"New Jersey"},
            {code:"NM", label:"New Mexico"},
            {code:"NY", label:"New York"},
            {code:"NC", label:"North Carolina"},
            {code:"ND", label:"North Dakota"},
            {code:"OH", label:"Ohio"},
            {code:"OK", label:"Oklahoma"},
            {code:"OR", label:"Oregon"},
            {code:"PA", label:"Pennsylvania"},
            {code:"RI", label:"Rhode Island"},
            {code:"SC", label:"South Carolina"},
            {code:"SD", label:"South Dakota"},
            {code:"TN", label:"Tennessee"},
            {code:"TX", label:"Texas"},
            {code:"UT", label:"Utah"},
            {code:"VT", label:"Vermont"},
            {code:"VA", label:"Virginia"},
            {code:"WA", label:"Washington"},
            {code:"WV", label:"West Virginia"},
            {code:"WI", label:"Wisconsin"},
            {code:"WY", label:"Wyoming"}];

    }
})();