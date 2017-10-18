(function() {
    'use strict';
    angular.module('siemer')
        .controller('TeamAndProfileController', teamAndProfileController);

    teamAndProfileController.$inject = ['$rootScope', '$scope', 'SiemerService','growl', '$stateParams', '$timeout',
        'SiemerFactory', '$state','Upload'];

    function teamAndProfileController($rootScope, $scope, SiemerService, growl, $stateParams, $timeout,
                                      SiemerFactory, $state, Upload) {
        $scope.showEditProfile = false;
        $scope.deleteConfirmation=false;

        $scope.getTeamData = function () {
            NProgress.start();
            var businessId = $stateParams.businessId;
            //var isNewOrg = ($scope.userData.memberRoleNumber == 300 || $scope.userData.memberRoleNumber == 400) ? false:true;
            SiemerService.getTeamData(businessId).then(function(results){
                console.log("inside getTeamData", results);
                if(results.status === "SUCCESS") {
                    growl.success("Getting Team data successful.");
                    $scope.showEditProfile = false;
                    $scope.deleteConfirmation=false;
                    $scope.teammemberList = results.data;
                } else {
                    growl.error("Getting Team data Unsuccessful.");
                }
                $scope.roleNumber = results.roleNumber;
                $scope.businessId = businessId;
                NProgress.done();
            });
            NProgress.inc();
        }

        $scope.editProfile = function () {
            NProgress.start();
            var memberId = $stateParams.memberId;
            var businessId = $scope.businessId;
           /* SiemerService.readAndReturnImage().then(function(results){
                console.log("Image results: ", results);
                $scope.croppedDataUrl = results;
            });*/
            SiemerService.getProfileData(memberId).then(function(results){
                console.log("inside getProfileData", results);
                if(results.status === "SUCCESS") {
                    growl.success("Profile data loaded successfully.");
                    $scope.showEditProfile = true;
                    $scope.profileData = results.data;
                    $scope.savedImageUrl = memberId+".png";
                    $scope.businessId = businessId;
                } else {
                    growl.error("Profile data loaded Unsuccessfully.");
                }
                NProgress.done();
            });
            NProgress.inc();
        }

        $scope.hideEditProfile = function(){
            //$scope.showEditProfile=false;
            //$state.go('teamView', { 'businessId': $scope.businessId }, {reload: true} );
            window.history.back();
        }

        $scope.showDeleteConfirmation = function(){
            $scope.deleteConfirmation=true;
        }

        $scope.deleteProfile = function (memberId) {
            NProgress.start();
            SiemerService.deleteProfile(memberId).then(function(results){
                console.log("inside deleteProfile", results);
                if(results.status === "SUCCESS") {
                    growl.success("Deleted Profile data successfully.");
                    //$route.reload();
                    $scope.showEditProfile = false;
                    $scope.deleteConfirmation=false;
                    //$window.location.href = "#/teamView";
                    $state.go('teamView', { 'businessId': results.businessId }, {reload: true} );
                } else {
                    growl.error("Deleted Profile data Unsuccessfully.");
                }
                NProgress.done();
            });
            NProgress.inc();
        };

        $scope.saveProfileEdit = function () {
            NProgress.start();

            SiemerService.saveProfileEdit($scope.profileData).then(function(results){
                console.log("inside saveProfileEdit", results);
                if(results.status === "SUCCESS") {
                    growl.success("Profile edit Successful.");
                    //$route.reload();
                    $scope.showEditProfile = false;
                    $scope.deleteConfirmation=false;
                    $state.go('teamView', { 'businessId': results.data.businessId }, {reload: true} );
                } else {
                    growl.error("Profile edit Unsuccessful.");
                }
                NProgress.done();
            });
            NProgress.inc();
        };

        $scope.createNewUser = function () {
            NProgress.start();
            var businessId = $stateParams.businessId;
            var profileData = {
                "fname": $scope.firstname,
                "lname": $scope.lastname,
                "title": $scope.title,
                "email": $scope.email,
                "userId": $scope.userId,
                "pwd": $scope.pwd,
                "confirmPwd": $scope.confirmPwd,
                "businessId": businessId
            }
            SiemerService.createNewUser(profileData).then(function(results){
                console.log("inside createNewUser", results);
                if(results.status === "SUCCESS") {
                    growl.success("New user saved successfully.");
                    $scope.showEditProfile = false;
                    $scope.deleteConfirmation=false;
                    $state.go('teamView', { 'businessId': businessId }, {reload: true} );
                } else {
                    growl.error("New user could not be saved successfully.");
                }
                NProgress.done();
            });
            NProgress.inc();
        };

        $scope.validateSession = function() {
            NProgress.start();
            SiemerFactory.validateSession();
            NProgress.done();
        };

        /** Image Cropper **/
        $scope.upload = function (dataUrl, name) {
            Upload.upload({
                url: location.origin+location.pathname+'uploadPhoto',
                data: {
                    file: Upload.dataUrltoBlob(dataUrl, name)
                },
            }).then(function (response) {
                $timeout(function () {
                    $scope.result = response.data;
                    //$state.reload();
                });
            }, function (response) {
                if (response.status > 0) $scope.errorMsg = response.status
                    + ': ' + response.data;
            }, function (evt) {
                $scope.progress = parseInt(100.0 * evt.loaded / evt.total);
            });
        }

    }
})();