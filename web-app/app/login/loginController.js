(function() {
    'use strict';
    angular.module('siemer')
        .controller('LoginController', loginController);

    loginController.$inject = ['$q','$rootScope', '$scope', 'SiemerService','growl',
        '$stateParams', '$window', 'SiemerFactory', '$state'];

    function loginController($q, $rootScope, $scope, SiemerService, growl,
                             $stateParams,$window, SiemerFactory, $state) {
        $scope.title = "Login";
        $scope.$state = $state;
        $scope.incompleteCount = 9;
        $scope.getToday = function(){
            return moment(); //.format("DD MMM YYYY");
        };
        $scope.validateSession = function() {
            SiemerFactory.validateSession();
            $scope.$on('logged-in', function () {
                console.log("logged-in");
                //$window.location.href = "#/dashboard";
            });
            $scope.$on('logged-out', function () {
                console.log("logged-out");
                $window.location.href = "#/login";
            });
        };
        $scope.getValidated = function(){
            NProgress.start();
            console.log("Inside getValidated");
            var loginReqData = {
                "userId": $scope.userId ? $scope.userId : "",
                "passCode": $scope.passCode ? $scope.passCode : ""
            };

            SiemerFactory.getUserData(loginReqData);
            $scope.$on('logged-in', function () {
                $window.location.href = '#/dashboard';
                $scope.title = "Dashboard";
                NProgress.done();
            });

        };
        $scope.forgotPwdEmail = function() {
            NProgress.start();
            /*var emailTemplate = "mailto:?cc=" + $scope.currentUserEmail +
                "&subject=Siemer Reset Password Request&body=Hi, %0D%0A%0D%0APlease reset my password for the following email: %0D%0A" +
                $scope.currentUserEmail + " %0D%0A%0D%0AThanks";
            window.open(emailTemplate, "_self");*/

            console.log("Inside getValidated");

            SiemerService.sendForgotPwdEmail($scope.currentUserEmail).then(function(results){
                console.log("sendForgotPwdEmail results: ", results);
                if(results.status === "SUCCESS") {
                    growl.success("Forgot Password Email sent successfully.");

                }
                NProgress.done();
            });
            NProgress.inc();
        };

        $scope.gotoReports = function(){
            NProgress.start();
            $state.go("reportView", { 'businessId': ($scope.userData.memberRoleNumber == 300 || $scope.userData.memberRoleNumber == 400) ? $scope.userData.businessId : "" });
            NProgress.done();
        };
        $scope.gotoTeam = function(){
            NProgress.start();
            $state.go("teamView", { 'businessId': $scope.userData.businessId });
            NProgress.done();
        }
    }
})();