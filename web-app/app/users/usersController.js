(function() {
    'use strict';
    angular.module('siemer')
        .controller('UsersController', usersController);

    usersController.$inject = ['$rootScope', '$scope', 'SiemerService','growl', '$stateParams', '$state'];

    function usersController($rootScope, $scope, SiemerService, growl, $stateParams, $state) {
        $scope.partnerMembers = [{"fname":"","lname":"","title":"","email":"","pwd":"",
            "confirmpwd":"", "profileimg":"", "allowNonMember":""}];
        $scope.addNewPartnerMember = function() {
            var newItemNo = $scope.partnerMembers.length+1;
            var pfname = "fname"+newItemNo;
            var plname = "lname"+newItemNo;
            var ptitle = "title"+newItemNo;
            var pemail = "email"+newItemNo;
            var ppwd = "pwd"+newItemNo;
            var pconfirmpwd = "confirmpwd"+newItemNo;
            var pprofileimg = "profileimg"+newItemNo;
            var pallowNonMember = "allownonmember"+newItemNo;
            var formData = {"fname":"","lname":"","title":"","email":"","pwd":"",
                "confirmpwd":"", "profileimg":"", "allowNonMember":""};
            $scope.partnerMembers.push(formData);
        };

        $scope.savePartnerMembers = function(){
            NProgress.start();
            console.log("$stateParams: ", $stateParams.businessId);
            var businessId = $stateParams.businessId;
            SiemerService.savePartnerMembers($scope.partnerMembers, businessId).then(function(results){
                console.log("inside savePartnerMembers", results);

                if(results.status === "SUCCESS") {
                    growl.success("Partner Member(s) saved successfully.");
                    $scope.partnerMembersSavedSuccessfully = true
                    $scope.partnername = "";
                    $scope.address1 = "";
                    $scope.address2 = "";
                    $scope.city = "";
                    $scope.selectedState = "";
                    $scope.zip = "";
                    $scope.businessId = businessId;
                    NProgress.done();
                } else {
                    growl.error("Partner Member(s) save Unsuccessful.");
                }
            });
            NProgress.inc();
        };

    }
})();