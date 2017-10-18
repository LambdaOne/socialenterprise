(function() {
    'use strict';
    angular.module('siemer')
        .controller('AssessmentController', assessmentController);

    assessmentController.$inject = ['$rootScope', '$scope', 'SiemerService','growl',
        '$stateParams', '$window', 'SiemerFactory', '$translate','localStorageService'];

    function assessmentController($rootScope, $scope, SiemerService, growl, $stateParams,
                                  $window, SiemerFactory, $translate,localStorageService) {
        $rootScope.title = "Assessment | Demographics";
        $scope.currentAssessment = "";
        $scope.continueLaterFinances = false;
        $scope.continueLaterBasicneeds = false;
        $scope.continueLaterEducation = false;
        $scope.continueLaterHealth = false;
        $scope.continueLaterCommunity = false;
        $scope.currentPage = '';

        $scope.getToday = function(){
            $scope.todayDate = new Date(); //.format("DD MMM YYYY");
        };

        $scope.saveDemographics = function(continueLater){
            NProgress.start();
            console.log("Inside saveDemographics");
            var demographicsData = {
                "firstName": $scope.firstname,
                "lastName": $scope.lastname,
                "gender": $scope.selectedGender,
                "chkAfricanAmerican": $scope.chkAfricanAmerican,
                "chkAsianAmerican": $scope.chkAsianAmerican,
                "chkHawaiinPacific": $scope.chkHawaiinPacific,
                "chkLatinoHispanic": $scope.chkLatinoHispanic,
                "chkMidEasternArabAmerican": $scope.chkMidEasternArabAmerican,
                "chkNativeIndianAlaskanAmerican": $scope.chkNativeIndianAlaskanAmerican,
                "chkEuropeanAmerican": $scope.chkEuropeanAmerican,
                "chkOtherRace": $scope.chkOtherRace,
                "numKidsHsehld": $scope.numKidsHsehld,
                "numKidsSchl": $scope.numKidsSchl,
                "numAdults": $scope.numAdults,
                "resiZipCode": $scope.resiZipCode,
                "assessmentType": $scope.selectedAssessmentType,
                "continueLater": continueLater
            };
            SiemerService.saveDemographicsData(demographicsData).then(function(results){         
                console.log("saveDemographicsData results ", results);
                if(results.status === "SUCCESS") {
                    growl.success("Demographics saved Successful");
                    $scope.userData = results.data;
                    $rootScope.caseId = results.caseId;
                    if(continueLater) {
                        $window.location.href = '#/dashboard';
                    } else {
                        $window.location.href = '#/finances';
                    }
                    $rootScope.title = "Assessment | Finance";
                }
                NProgress.done();
            });
            NProgress.inc();
        };
        $scope.saveFinance = function(isAssessmentComplete){
            NProgress.start();
            console.log("Inside saveFinance");
            var financeData = {
                "income": $scope.income,
                "incomeAdequate": $scope.incomeAdequate,
                "incomeSavings": $scope.incomeSavings,
                "incomeStable": $scope.incomeStable,
                "incomeComment": $scope.incomeComment,
                "job": $scope.job,
                "jobFullTime": $scope.jobFullTime,
                "jobAdequate": $scope.jobAdequate,
                "jobPermanent": $scope.jobPermanent,
                "legalHistory": $scope.legalHistory,
                "adultPartner": $scope.adultPartner,
                "adultPartnerJob": $scope.adultPartnerJob,
                "adultPartnerJobFullTime": $scope.adultPartnerJobFullTime,
                "adultPartnerJobAdequate": $scope.adultPartnerJobAdequate,
                "adultPartnerJobPermanent": $scope.adultPartnerJobPermanent,
                "legalHistoryOtherAdult": $scope.legalHistoryOtherAdult,
                "employmentComment": $scope.employmentComment,
                "creditHistory": $scope.creditHistory,
                "creditAdequate": $scope.creditAdequate,
                "creditJudgements": $scope.creditJudgements,
                "creditRepair": $scope.creditRepair,
                "creditHistoryComment": $scope.creditHistoryComment,
                "debt": $scope.debt,
                "debtOutstanding": $scope.debtOutstanding,
                "debtPaid": $scope.debtPaid,
                "debtSaving": $scope.debtSaving,
                "debtComment": $scope.debtComment,
                "isAssessmentComplete": isAssessmentComplete,
                "continueLater": $scope.continueLaterFinances
            };
            SiemerService.saveFinanceData(financeData).then(function(results){
                console.log("saveFinanceData results ", results);
                if(results.status === "SUCCESS") {
                    growl.success("Finances saved Successful");
                    localStorageService.set('financesPercent', 0);
                    $scope.userData = results.data;
                    $rootScope.caseId = results.caseId;
                    if(isAssessmentComplete) {
                        $window.location.href = '#/confirmation';
                        $rootScope.title = "Confirmation";
                    } if($scope.continueLaterFinances) {
                        $window.location.href = '#/dashboard';
                    } else {
                        $window.location.href = '#/basicneeds';
                        $rootScope.title = "Assessment | Basic Needs";
                    }
                }
                NProgress.done();
            });

            NProgress.inc();
        };
        $scope.saveBasicneeds = function(isAssessmentComplete){
            NProgress.start();
            console.log("Inside saveBasicneeds");
            var basicneedsData = {
                "housing": $scope.housing,
                "housingSafe": $scope.housingSafe,
                "housingAdequate": $scope.housingAdequate,
                "housingUnsubsidized": $scope.housingUnsubsidized,
                "housingComment": $scope.housingComment,
                "food": $scope.food,
                "foodMeet": $scope.foodMeet,
                "foodStamps": $scope.foodStamps,
                "foodDesire": $scope.foodDesire,
                "foodComment": $scope.foodComment,
                "children": $scope.children,
                "childcareAccess": $scope.childcareAccess,
                "childcareAffordable": $scope.childcareAffordable,
                "childcareQuality": $scope.childcareQuality,
                "childcareSubsidy": $scope.childcareSubsidy,
                "childrenComment": $scope.childrenComment,
                "transportation": $scope.transportation,
                "transportationReliable": $scope.transportationReliable,
                "transportationAccessible": $scope.transportationAccessible,
                "transportationAffordable": $scope.transportationAffordable,
                "transportationComment": $scope.transportationComment,
                "safeHome": $scope.safeHome,
                "safeOutside": $scope.safeOutside,
                "violenceLow": $scope.violenceLow,
                "crimeLow": $scope.crimeLow,
                "safeHomeComment": $scope.safeHomeComment,
                "isAssessmentComplete": isAssessmentComplete,
                "continueLater": $scope.continueLaterBasicneeds
            };
            SiemerService.saveBasicneedsData(basicneedsData).then(function(results){         
                console.log("saveBasicneedsData results ", results);
                if(results.status === "SUCCESS") {
                    growl.success("Basicneeds saved Successful");
                    localStorageService.set('basicneedsPercent', 0);
                    $scope.userData = results.data;
                    $rootScope.caseId = results.caseId;
                    if(isAssessmentComplete) {
                        $window.location.href = '#/confirmation';
                        $rootScope.title = "Confirmation";
                    } else if($scope.continueLaterBasicneeds) {
                        $window.location.href = '#/dashboard';
                    } else {
                        $window.location.href = '#/education';
                        $rootScope.title = "Assessment | Education";
                    }
                }
                NProgress.done();
            });
            NProgress.inc();
        };
        $scope.saveEducation = function(isAssessmentComplete){
            NProgress.start();
            console.log("Inside saveEducation");
            var educationData = {
                "children": $scope.children,
                "childrenEnrolled": $scope.childrenEnrolled,
                "childrenAttending": $scope.childrenAttending,
                "childrenMove": $scope.childrenMove,
                "childrenAccess": $scope.childrenAccess,
                "childrenEducationComment": $scope.childrenEducationComment,
                "literacy": $scope.literacy,
                "diploma": $scope.diploma,
                "educationTraining": $scope.educationTraining,
                "educationComplete": $scope.educationComplete,
                "adultEducationComment": $scope.adultEducationComment,
                "isAssessmentComplete": isAssessmentComplete,
                "continueLater": $scope.continueLaterEducation
            };
            SiemerService.saveEducationData(educationData).then(function(results){
                console.log("saveEducationData results ", results);
                if(results.status === "SUCCESS") {
                    growl.success("Education saved Successful");
                    localStorageService.set('educationPercent', 0);
                    $scope.userData = results.data;
                    $rootScope.caseId = results.caseId;
                    if(isAssessmentComplete) {
                        $window.location.href = '#/confirmation';
                        $rootScope.title = "Confirmation";
                    } else if($scope.continueLaterEducation) {
                        $window.location.href = '#/dashboard';
                    } else {
                        $window.location.href = '#/health';
                        $rootScope.title = "Assessment | Health";
                    }
                }
                NProgress.done();
            });
            NProgress.inc();
        };
        $scope.saveHealth = function(isAssessmentComplete){
            NProgress.start();
            console.log("Inside saveHealth");
            var healthData = {
                "medicalCoverage": $scope.medicalCoverage,
                "immediateHealthNeed": $scope.immediateHealthNeed,
                "unsubsidizedHealthPlan": $scope.unsubsidizedHealthPlan,
                "insuranceAffordable": $scope.insuranceAffordable,
                "basicHealthComment": $scope.basicHealthComment,
                "untreatedMental": $scope.untreatedMental,
                "mentalDanger": $scope.mentalDanger,
                "mentalDifficulty": $scope.mentalDifficulty,
                "mentalTreatment": $scope.mentalTreatment,
                "mentalHealthComment": $scope.mentalHealthComment,
                "substanceDependent": $scope.substanceDependent,
                "substanceRehab": $scope.substanceRehab,
                "substanceRecurrent": $scope.substanceRecurrent,
                "substanceAbuse": $scope.substanceAbuse,
                "substanceAbuseComment": $scope.substanceAbuseComment,
                "disabilities": $scope.disabilities,
                "severeSymptoms": $scope.severeSymptoms,
                "disruptDaily": $scope.disruptDaily,
                "chronicSymptoms": $scope.chronicSymptoms,
                "disabilityComment": $scope.disabilityComment,
                "isAssessmentComplete": isAssessmentComplete,
                "continueLater": $scope.continueLaterHealth
            };
            SiemerService.saveHealthData(healthData).then(function(results){         
                console.log("saveHealthData results", results);
                if(results.status === "SUCCESS") {
                    growl.success("Health saved Successful");
                    localStorageService.set('healthPercent', 0);
                    $scope.userData = results.data;
                    $rootScope.caseId = results.caseId;
                    if(isAssessmentComplete) {
                        $window.location.href = '#/confirmation';
                        $rootScope.title = "Confirmation";
                    } else if($scope.continueLaterHealth) {
                        $window.location.href = '#/dashboard';
                    } else {
                        $window.location.href = '#/community';
                        $rootScope.title = "Assessment | Community Support";
                    }
                }
                NProgress.done();
            });
            NProgress.inc();
        };        
        $scope.saveCommunitySupport = function(isAssessmentComplete){
            NProgress.start();
            console.log("Inside saveCommunitySupport");
            var communitySupportData = {
                "support": $scope.support,
                "relateWell": $scope.relateWell,
                "strongSupport": $scope.strongSupport,
                "networkExpanding": $scope.networkExpanding,
                "socialComment": $scope.socialComment,
                "crisisMode": $scope.crisisMode,
                "skills": $scope.skills,
                "knowledge": $scope.knowledge,
                "activelyInvolved": $scope.activelyInvolved,
                "involvementComment": $scope.involvementComment,
                "legalInvolvement": $scope.legalInvolvement,
                "legalRepresentation": $scope.legalRepresentation,
                "legalAction": $scope.legalAction,
                "resolve": $scope.resolve,
                "legalComment": $scope.legalComment,
                "isAssessmentComplete": isAssessmentComplete,
                "continueLater": $scope.continueLaterCommunity
            };
            SiemerService.saveCommunitySupportData(communitySupportData).then(function(results){
                console.log("saveCommunitySupportData results: ", results);
                if(results.status === "SUCCESS") {
                    growl.success("Community Support saved Successful");
                    localStorageService.set('communityPercent', 0);
                    $scope.userData = results.data;
                    $rootScope.caseId = results.caseId;
                    if(isAssessmentComplete) {
                        $window.location.href = '#/confirmation';
                        $rootScope.title = "Confirmation";
                    } else if($scope.continueLaterCommunity) {
                        $window.location.href = '#/dashboard';
                    } else {
                        $window.location.href = '#/confirmation';
                        $rootScope.title = "Confirmation";
                    }
                }
                NProgress.done();
            });
            NProgress.inc();
        };

        $scope.prepopulateDemographics = function () {
            NProgress.start();
            $scope.currentPage = "demographics";
            $rootScope.useFoundClient = true;
            var caseId = $stateParams.caseId;
            localStorageService.set('caseId', caseId);
            SiemerService.prepopulateDemographics(caseId).then(function(results){
                console.log("prepopulateDemographics results: ", results);
                if(results.status === "SUCCESS") {
                    growl.success("Demographics Loaded successfully.");
                    $scope.financesPercent = results.data.percent.finances;
                    $scope.basicneedsPercent = results.data.percent.basicneeds;
                    $scope.educationPercent = results.data.percent.education;
                    $scope.healthPercent = results.data.percent.health;
                    $scope.communityPercent = results.data.percent.community;
                    localStorageService.set('financesPercent', results.data.percent.finances);
                    localStorageService.set('basicneedsPercent', results.data.percent.basicneeds);
                    localStorageService.set('educationPercent', results.data.percent.education);
                    localStorageService.set('healthPercent', results.data.percent.health);
                    localStorageService.set('communityPercent', results.data.percent.community);
                    $scope.firstname = results.data.contacts.firstname;
                    $scope.lastname = results.data.contacts.lastname;
                    $scope.selectedGender = results.data.mgd.dropdown01;
                    $scope.chkAfricanAmerican = results.data.mgd.dropdown02 == 'Yes'?true:false;
                    $scope.chkAsianAmerican = results.data.mgd.dropdown03 == 'Yes'?true:false;
                    $scope.chkHawaiinPacific = results.data.mgd.dropdown04 == 'Yes'?true:false;
                    $scope.chkLatinoHispanic = results.data.mgd.dropdown05 == 'Yes'?true:false;
                    $scope.chkMidEasternArabAmerican = results.data.mgd.dropdown06 == 'Yes'?true:false;
                    $scope.chkNativeIndianAlaskanAmerican = results.data.mgd.dropdown07 == 'Yes'?true:false;
                    $scope.chkEuropeanAmerican = results.data.mgd.dropdown08 == 'Yes'?true:false;
                    $scope.chkOtherRace = results.data.mgd.dropdown09 == 'Yes'?true:false;
                    $scope.numKidsHsehld = results.data.mgd.int01;
                    $scope.numKidsSchl = results.data.mgd.int02;
                    $scope.numAdults = results.data.mgd.int03;
                    $scope.resiZipCode = results.data.contactAddress.zip;
                    $scope.assessmentType = results.data.mgd.dropdown10;
                    $scope.currentAssessment = results.data.mgd.dropdown10;
                    $scope.assessmentComplete = results.data.mgd.dropdown11;
                }
                if($scope.currentAssessment == 'Entry' && $scope.assessmentComplete == 'No') {
                    $scope.selectedAssessmentType = 'Entry';
                } else if($scope.currentAssessment == 'Entry' && $scope.assessmentComplete == 'Yes') {
                    $scope.selectedAssessmentType = 'Interim';
                } else if($scope.currentAssessment == 'Interim') {
                    $scope.selectedAssessmentType = 'Interim';
                } else if($scope.currentAssessment == 'Exit' && $scope.assessmentComplete == 'No') {
                    $scope.selectedAssessmentType = 'Exit';
                } else if($scope.currentAssessment == 'Exit' && $scope.assessmentComplete == 'Yes') {
                    $scope.selectedAssessmentType = 'PostExit';
                }
                NProgress.done();
            });
            NProgress.inc();
        };
        $scope.prepopulateFinances = function () {
            NProgress.start();
            $scope.currentPage = "finances";
            $rootScope.useFoundClient = true;
            SiemerFactory.scrollTo('caseId');
            var caseId = localStorageService.get('caseId');
            SiemerService.prepopulateFinances(caseId).then(function(results){
                console.log("prepopulateFinances results: ", results);
                $scope.m = results.messages;
                if(results.status === "SUCCESS") {
                    growl.success("Finances Loaded successfully.");
                    $scope.financesPercent = results.data.percent.finances;
                    $scope.basicneedsPercent = results.data.percent.basicneeds;
                    $scope.educationPercent = results.data.percent.education;
                    $scope.healthPercent = results.data.percent.health;
                    $scope.communityPercent = results.data.percent.community;
                    localStorageService.set('financesPercent', results.data.percent.finances);
                    localStorageService.set('basicneedsPercent', results.data.percent.basicneeds);
                    localStorageService.set('educationPercent', results.data.percent.education);
                    localStorageService.set('healthPercent', results.data.percent.health);
                    localStorageService.set('communityPercent', results.data.percent.community);
                    if(results.data.mgd) {
                        $scope.income = results.data.mgd.string01==null?'':results.data.mgd.string01 == 'Yes' ? "1" : "0";
                        $scope.incomeAdequate = results.data.mgd.string02==null?'':results.data.mgd.string02 == 'Yes' ? "1" : "0";
                        $scope.incomeSavings = results.data.mgd.string03==null?'':results.data.mgd.string03 == 'Yes' ? "1" : "0";
                        $scope.incomeStable = results.data.mgd.string04==null?'':results.data.mgd.string04 == 'Yes' ? "1" : "0";

                        $scope.job = results.data.mgd.string05==null?'':results.data.mgd.string05 == 'Yes' ? "1" : "0";
                        $scope.jobFullTime = results.data.mgd.string06==null?'':results.data.mgd.string06 == 'Yes' ? "1" : "0";
                        $scope.jobAdequate = results.data.mgd.string07==null?'':results.data.mgd.string07 == 'Yes' ? "1" : "0";
                        $scope.jobPermanent = results.data.mgd.string08==null?'':results.data.mgd.string08 == 'Yes' ? "1" : "0";

                        $scope.legalHistory = results.data.mgd.string09==null?'':results.data.mgd.string09 == 'Yes' ? "1" : "0";

                        $scope.adultPartner = results.data.mgd.string10==null?'':results.data.mgd.string10 == 'Yes' ? "1" : "0";

                        $scope.adultPartnerJob = results.data.mgd.string11==null?'':results.data.mgd.string11 == 'Yes' ? "1" : "0";
                        $scope.adultPartnerJobFullTime = results.data.mgd.string12==null?'':results.data.mgd.string12 == 'Yes' ? "1" : "0";
                        $scope.adultPartnerJobAdequate = results.data.mgd.string13==null?'':results.data.mgd.string13 == 'Yes' ? "1" : "0";
                        $scope.adultPartnerJobPermanent = results.data.mgd.string14==null?'':results.data.mgd.string14 == 'Yes' ? "1" : "0";
                        $scope.legalHistoryOtherAdult = results.data.mgd.string15==null?'':results.data.mgd.string15 == 'Yes' ? "1" : "0";

                        $scope.creditHistory = results.data.mgd.dropdown01==null?'':results.data.mgd.dropdown01 == 'Yes' ? "1" : "0";
                        $scope.creditAdequate = results.data.mgd.dropdown02==null?'':results.data.mgd.dropdown02 == 'Yes' ? "1" : "0";
                        $scope.creditJudgements = results.data.mgd.dropdown03==null?'':results.data.mgd.dropdown03 == 'Yes' ? "1" : "0";
                        $scope.creditRepair = results.data.mgd.dropdown04==null?'':results.data.mgd.dropdown04 == 'Yes' ? "1" : "0";

                        $scope.debt = results.data.mgd.dropdown05==null?'':results.data.mgd.dropdown05 == 'Yes' ? "1" : "0";
                        $scope.debtOutstanding = results.data.mgd.dropdown06==null?'':results.data.mgd.dropdown06 == 'Yes' ? "1" : "0";
                        $scope.debtPaid = results.data.mgd.dropdown07==null?'':results.data.mgd.dropdown07 == 'Yes' ? "1" : "0";
                        $scope.debtSaving = results.data.mgd.dropdown08==null?'':results.data.mgd.dropdown08 == 'Yes' ? "1" : "0";

                        $scope.incomeComment = results.data.mgt.text01;
                        $scope.employmentComment = results.data.mgt.text02;
                        $scope.creditHistoryComment = results.data.mgt.text03;
                        $scope.debtComment = results.data.mgt.text04;

                        $scope.currentAssessment = results.data.assessmentType;
                        /*var totalPointsSaved = (results.data.mgd.int01>0?1:0) + (results.data.mgd.int02>0?1:0)
                             + (results.data.mgd.int03>0?1:0) + (results.data.mgd.int04>0?1:0) +(results.data.mgd.int05>0?1:0);
                        $scope.financesPercent = Math.round((totalPointsSaved / 5) * 100);
                        localStorageService.set('financesPercent', $scope.financesPercent);*/
                    }
                    $rootScope.caseId = results.caseId;
                    $scope.$on('LocalStorageModule.notification.setItem', function(event, parameters) {
                        console.log("localstorage: ", parameters);
                        parameters.key;  // contains the key that changed
                        parameters.newvalue;  // contains the new value
                    });
                }
                NProgress.done();
            });

            NProgress.inc();
        };
        $scope.prepopulateBasicneeds = function () {
            NProgress.start();
            $scope.currentPage = "basicneeds";
            SiemerFactory.scrollTo('caseId');
            $rootScope.useFoundClient = true;
            var caseId = localStorageService.get('caseId');
            SiemerService.prepopulateBasicneeds(caseId).then(function(results){
                console.log("prepopulateBasicneeds results: ", results);
                $scope.m = results.messages;
                if(results.status === "SUCCESS") {
                    growl.success("Basicneeds Loaded successfully.");
                    $scope.financesPercent = results.data.percent.finances;
                    $scope.basicneedsPercent = results.data.percent.basicneeds;
                    $scope.educationPercent = results.data.percent.education;
                    $scope.healthPercent = results.data.percent.health;
                    $scope.communityPercent = results.data.percent.community;
                    localStorageService.set('financesPercent', results.data.percent.finances);
                    localStorageService.set('basicneedsPercent', results.data.percent.basicneeds);
                    localStorageService.set('educationPercent', results.data.percent.education);
                    localStorageService.set('healthPercent', results.data.percent.health);
                    localStorageService.set('communityPercent', results.data.percent.community);
                    if(results.data.mgd) {
                        $scope.housing = results.data.mgd.string01==null?'':results.data.mgd.string01 == 'Yes' ? "1" : "0";
                        $scope.housingSafe = results.data.mgd.string02==null?'':results.data.mgd.string02 == 'Yes' ? "1" : "0";
                        $scope.housingAdequate = results.data.mgd.string03==null?'':results.data.mgd.string03 == 'Yes' ? "1" : "0";
                        $scope.housingUnsubsidized = results.data.mgd.string04==null?'':results.data.mgd.string04 == 'Yes' ? "1" : "0";

                        $scope.food = results.data.mgd.string05==null?'':results.data.mgd.string05 == 'Yes' ? "1" : "0";
                        $scope.foodMeet = results.data.mgd.string06==null?'':results.data.mgd.string06 == 'Yes' ? "1" : "0";
                        $scope.foodStamps = results.data.mgd.string07==null?'':results.data.mgd.string07 == 'Yes' ? "1" : "0";
                        $scope.foodDesire = results.data.mgd.string08==null?'':results.data.mgd.string08 == 'Yes' ? "1" : "0";

                        $scope.children = results.data.mgd.string09==null?'':results.data.mgd.string09 == 'Yes' ? "1" : "0";

                        $scope.childcareAccess = results.data.mgd.string10==null?'':results.data.mgd.string10 == 'Yes' ? "1" : "0";
                        $scope.childcareAffordable = results.data.mgd.string11==null?'':results.data.mgd.string11 == 'Yes' ? "1" : "0";
                        $scope.childcareQuality = results.data.mgd.string12==null?'':results.data.mgd.string12 == 'Yes' ? "1" : "0";
                        $scope.childcareSubsidy = results.data.mgd.string13==null?'':results.data.mgd.string13 == 'Yes' ? "1" : "0";

                        $scope.transportation = results.data.mgd.string14==null?'':results.data.mgd.string14 == 'Yes' ? "1" : "0";
                        $scope.transportationReliable = results.data.mgd.string15==null?'':results.data.mgd.string15 == 'Yes' ? "1" : "0";
                        $scope.transportationAccessible = results.data.mgd.dropdown01==null?'':results.data.mgd.dropdown01 == 'Yes' ? "1" : "0";
                        $scope.transportationAffordable = results.data.mgd.dropdown02==null?'':results.data.mgd.dropdown02 == 'Yes' ? "1" : "0";

                        $scope.safeHome = results.data.mgd.dropdown03==null?'':results.data.mgd.dropdown03 == 'Yes' ? "1" : "0";
                        $scope.safeOutside = results.data.mgd.dropdown04==null?'':results.data.mgd.dropdown04 == 'Yes' ? "1" : "0";
                        $scope.violenceLow = results.data.mgd.dropdown05==null?'':results.data.mgd.dropdown05 == 'Yes' ? "1" : "0";
                        $scope.crimeLow = results.data.mgd.dropdown06==null?'':results.data.mgd.dropdown06 == 'Yes' ? "1" : "0";

                        $scope.housingComment = results.data.mgt.text01;
                        $scope.foodComment = results.data.mgt.text02;
                        $scope.childrenComment = results.data.mgt.text03;
                        $scope.transportationComment = results.data.mgt.text04;
                        $scope.safeHomeComment = results.data.mgt.text05;

                        $scope.currentAssessment = results.data.assessmentType;
                        /*var totalPointsSaved = (results.data.mgd.int01>0?1:0) + (results.data.mgd.int02>0?1:0)
                            + (results.data.mgd.int03>0?1:0) + (results.data.mgd.int04>0?1:0) +(results.data.mgd.int05>0?1:0);
                        $scope.basicneedsPercent = Math.round((totalPointsSaved / 5) * 100);
                        localStorageService.set('basicneedsPercent', $scope.basicneedsPercent);*/
                    }

                    $rootScope.caseId = results.caseId;
                }
                NProgress.done();
            });
            NProgress.inc();
        };
        $scope.prepopulateEducation = function () {
            NProgress.start();
            $scope.currentPage = "education";
            SiemerFactory.scrollTo('caseId');
            $rootScope.useFoundClient = true;
            var caseId = localStorageService.get('caseId');
            SiemerService.prepopulateEducation(caseId).then(function(results){
                console.log("prepopulateEducation results: ", results);
                $scope.m = results.messages;
                if(results.status === "SUCCESS") {
                    growl.success("Education Loaded successfully.");
                    $scope.financesPercent = results.data.percent.finances;
                    $scope.basicneedsPercent = results.data.percent.basicneeds;
                    $scope.educationPercent = results.data.percent.education;
                    $scope.healthPercent = results.data.percent.health;
                    $scope.communityPercent = results.data.percent.community;
                    localStorageService.set('financesPercent', results.data.percent.finances);
                    localStorageService.set('basicneedsPercent', results.data.percent.basicneeds);
                    localStorageService.set('educationPercent', results.data.percent.education);
                    localStorageService.set('healthPercent', results.data.percent.health);
                    localStorageService.set('communityPercent', results.data.percent.community);
                    if(results.data.mgd) {
                        $scope.children = results.data.mgd.string01==null?'':results.data.mgd.string01 == 'Yes' ? "1" : "0";

                        $scope.childrenEnrolled = results.data.mgd.string02==null?'':results.data.mgd.string02 == 'Yes' ? "1" : "0";
                        $scope.childrenAttending = results.data.mgd.string03==null?'':results.data.mgd.string03 == 'Yes' ? "1" : "0";
                        $scope.childrenMove = results.data.mgd.string04==null?'':results.data.mgd.string04 == 'Yes' ? "1" : "0";
                        $scope.childrenAccess = results.data.mgd.string05==null?'':results.data.mgd.string05 == 'Yes' ? "1" : "0";

                        $scope.literacy = results.data.mgd.string06==null?'':results.data.mgd.string06 == 'Yes' ? "1" : "0";
                        $scope.diploma = results.data.mgd.string07==null?'':results.data.mgd.string07 == 'Yes' ? "1" : "0";
                        $scope.educationTraining = results.data.mgd.string08==null?'':results.data.mgd.string08 == 'Yes' ? "1" : "0";
                        $scope.educationComplete = results.data.mgd.string09==null?'':results.data.mgd.string09 == 'Yes' ? "1" : "0";

                        $scope.childrenEducationComment = results.data.mgt.text01;
                        $scope.adultEducationComment = results.data.mgt.text02;

                        $scope.currentAssessment = results.data.assessmentType;
                        /*var totalPointsSaved = (results.data.mgd.int01>0?1:0) + (results.data.mgd.int02>0?1:0)
                            + (results.data.mgd.int03>0?1:0) + (results.data.mgd.int04>0?1:0) +(results.data.mgd.int05>0?1:0);
                        $scope.educationPercent = Math.round((totalPointsSaved / 5) * 100);
                        localStorageService.set('educationPercent', $scope.educationPercent);*/
                    }
                    $rootScope.caseId = results.caseId;

                }
                NProgress.done();
            });
            NProgress.inc();
        };
        $scope.prepopulateHealth = function () {
            NProgress.start();
            $scope.currentPage = "health";
            SiemerFactory.scrollTo('caseId');
            $rootScope.useFoundClient = true;
            var caseId = localStorageService.get('caseId');
            SiemerService.prepopulateHealth(caseId).then(function(results){
                console.log("prepopulateHealth results: ", results);
                $scope.m = results.messages;
                if(results.status === "SUCCESS") {
                    growl.success("Health Loaded successfully.");
                    $scope.financesPercent = results.data.percent.finances;
                    $scope.basicneedsPercent = results.data.percent.basicneeds;
                    $scope.educationPercent = results.data.percent.education;
                    $scope.healthPercent = results.data.percent.health;
                    $scope.communityPercent = results.data.percent.community;
                    localStorageService.set('financesPercent', results.data.percent.finances);
                    localStorageService.set('basicneedsPercent', results.data.percent.basicneeds);
                    localStorageService.set('educationPercent', results.data.percent.education);
                    localStorageService.set('healthPercent', results.data.percent.health);
                    localStorageService.set('communityPercent', results.data.percent.community);
                    if(results.data.mgd) {
                        $scope.medicalCoverage = results.data.mgd.string01==null?'':results.data.mgd.string01 == 'Yes' ? "1" : "0";
                        $scope.immediateHealthNeed = results.data.mgd.string02==null?'':results.data.mgd.string02 == 'Yes' ? "1" : "0";
                        $scope.unsubsidizedHealthPlan = results.data.mgd.string03==null?'':results.data.mgd.string03 == 'Yes' ? "1" : "0";
                        $scope.insuranceAffordable = results.data.mgd.string04==null?'':results.data.mgd.string04 == 'Yes' ? "1" : "0";

                        $scope.untreatedMental = results.data.mgd.string05==null?'':results.data.mgd.string05 == 'Yes' ? "1" : "0";
                        $scope.mentalDanger = results.data.mgd.string06==null?'':results.data.mgd.string06 == 'Yes' ? "1" : "0";
                        $scope.mentalDifficulty = results.data.mgd.string07==null?'':results.data.mgd.string07 == 'Yes' ? "1" : "0";
                        $scope.mentalTreatment = results.data.mgd.string08==null?'':results.data.mgd.string08 == 'Yes' ? "1" : "0";

                        $scope.substanceDependent = results.data.mgd.string09==null?'':results.data.mgd.string09 == 'Yes' ? "1" : "0";
                        $scope.substanceRehab = results.data.mgd.string10==null?'':results.data.mgd.string10 == 'Yes' ? "1" : "0";
                        $scope.substanceRecurrent = results.data.mgd.string11==null?'':results.data.mgd.string11 == 'Yes' ? "1" : "0";
                        $scope.substanceAbuse = results.data.mgd.string12==null?'':results.data.mgd.string12 == 'Yes' ? "1" : "0";

                        $scope.disabilities = results.data.mgd.string13==null?'':results.data.mgd.string13 == 'Yes' ? "1" : "0";
                        $scope.severeSymptoms = results.data.mgd.string14==null?'':results.data.mgd.string14 == 'Yes' ? "1" : "0";
                        $scope.disruptDaily = results.data.mgd.string15==null?'':results.data.mgd.string15 == 'Yes' ? "1" : "0";
                        $scope.chronicSymptoms = results.data.mgd.dropdown01==null?'':results.data.mgd.dropdown01 == 'Yes' ? "1" : "0";

                        $scope.basicHealthComment = results.data.mgt.text01;
                        $scope.mentalHealthComment = results.data.mgt.text02;
                        $scope.substanceAbuseComment = results.data.mgt.text03;
                        $scope.disabilityComment = results.data.mgt.text04;

                        $scope.currentAssessment = results.data.assessmentType;
                        /*var totalPointsSaved = (results.data.mgd.int01>0?1:0) + (results.data.mgd.int02>0?1:0)
                            + (results.data.mgd.int03>0?1:0) + (results.data.mgd.int04>0?1:0) +(results.data.mgd.int05>0?1:0);
                        $scope.healthPercent = Math.round((totalPointsSaved / 5) * 100);
                        localStorageService.set('healthPercent', $scope.healthPercent);*/
                    }
                    $rootScope.caseId = results.caseId;
                }
                NProgress.done();
            });
            NProgress.inc();
        };
        $scope.prepopulateCommunity = function () {
            NProgress.start();
            $scope.currentPage = "community";
            SiemerFactory.scrollTo('caseId');
            $rootScope.useFoundClient = true;
            var caseId = localStorageService.get('caseId');
            SiemerService.prepopulateCommunity(caseId).then(function(results){
                console.log("prepopulateCommunity results: ", results);
                $scope.m = results.messages;
                if(results.status === "SUCCESS") {
                    growl.success("Community Support Loaded successfully.");
                    $scope.financesPercent = results.data.percent.finances;
                    $scope.basicneedsPercent = results.data.percent.basicneeds;
                    $scope.educationPercent = results.data.percent.education;
                    $scope.healthPercent = results.data.percent.health;
                    $scope.communityPercent = results.data.percent.community;
                    localStorageService.set('financesPercent', results.data.percent.finances);
                    localStorageService.set('basicneedsPercent', results.data.percent.basicneeds);
                    localStorageService.set('educationPercent', results.data.percent.education);
                    localStorageService.set('healthPercent', results.data.percent.health);
                    localStorageService.set('communityPercent', results.data.percent.community);
                    if(results.data.mgd) {
                        $scope.support = results.data.mgd.string01==null?'':results.data.mgd.string01 == 'Yes' ? "1" : "0";
                        $scope.relateWell = results.data.mgd.string02==null?'':results.data.mgd.string02 == 'Yes' ? "1" : "0";
                        $scope.strongSupport = results.data.mgd.string03==null?'':results.data.mgd.string03 == 'Yes' ? "1" : "0";
                        $scope.networkExpanding = results.data.mgd.string04==null?'':results.data.mgd.string04 == 'Yes' ? "1" : "0";

                        $scope.crisisMode = results.data.mgd.string05==null?'':results.data.mgd.string05 == 'Yes' ? "1" : "0";
                        $scope.skills = results.data.mgd.string06==null?'':results.data.mgd.string06 == 'Yes' ? "1" : "0";
                        $scope.knowledge = results.data.mgd.string07==null?'':results.data.mgd.string07 == 'Yes' ? "1" : "0";
                        $scope.activelyInvolved = results.data.mgd.string08==null?'':results.data.mgd.string08 == 'Yes' ? "1" : "0";

                        $scope.legalInvolvement = results.data.mgd.string09==null?'':results.data.mgd.string09 == 'Yes' ? "1" : "0";
                        $scope.legalRepresentation = results.data.mgd.string10==null?'':results.data.mgd.string10 == 'Yes' ? "1" : "0";
                        $scope.legalAction = results.data.mgd.string11==null?'':results.data.mgd.string11 == 'Yes' ? "1" : "0";
                        $scope.resolve = results.data.mgd.string12==null?'':results.data.mgd.string12 == 'Yes' ? "1" : "0";

                        $scope.socialComment = results.data.mgt.text01;
                        $scope.involvementComment = results.data.mgt.text02;
                        $scope.legalComment = results.data.mgt.text03;

                        $scope.currentAssessment = results.data.assessmentType;
                        /*var totalPointsSaved = (results.data.mgd.int01>0?1:0) + (results.data.mgd.int02>0?1:0)
                            + (results.data.mgd.int03>0?1:0) + (results.data.mgd.int04>0?1:0) +(results.data.mgd.int05>0?1:0);
                        $scope.communityPercent = Math.round((totalPointsSaved / 5) * 100);
                        localStorageService.set('communityPercent', $scope.communityPercent);*/
                    }
                    $rootScope.caseId = results.caseId;
                }
                NProgress.done();
            });
            NProgress.inc();
        };

        $scope.saveLanguagePref = function(langRef) {
            NProgress.start();
            console.log("Language ref: ", langRef);
            SiemerService.saveLanguagePref(langRef).then(function(results){
                console.log("saveLanguagePref results: ", results);
                if(results.status === "SUCCESS") {
                    $translate.use(langRef);
                    growl.success("Language preference saved successfully.");
                }else {
                    growl.error("Language preference not saved.");
                }
                NProgress.done();
            });
            NProgress.inc();
        };
        $scope.financesPercent = 0;
        $scope.basicneedsPercent = 0;
        $scope.educationPercent = 0;
        $scope.healthPercent = 0;
        $scope.communityPercent = 0;

        $scope.financesChange = function() {
            $scope.oldFinValue = Math.round($scope.financesPercent);
            var totalQuestions = 5;
            var totalAnswered = 0;
            if($scope.income === "0" || $scope.income === "1") {
                totalAnswered = totalAnswered + 1;
            }
            if($scope.job === "0" || $scope.job === "1") {
                totalAnswered = totalAnswered + 1;
            }
            if($scope.adultPartner === "0" || $scope.adultPartner === "1") {
                totalAnswered = totalAnswered + 1;
            }
            if($scope.creditHistory === "0" || $scope.creditHistory === "1") {
                totalAnswered = totalAnswered + 1;
            }
            if($scope.debt === "0" || $scope.debt === "1") {
                totalAnswered = totalAnswered + 1;
            }
            //console.log('totalAnswered: ', totalAnswered);

            $scope.financesPercent = Math.round((totalAnswered / totalQuestions) * 100);
            localStorageService.set('financesPercent', $scope.financesPercent);
        };
        $scope.basicneedsChange = function() {
            $scope.oldBasValue = Math.round($scope.basicneedsPercent);
            var totalQuestions = 5;
            var totalAnswered = 0;
            if($scope.housing === "0" || $scope.housing === "1") {
                totalAnswered = totalAnswered + 1;
            }
            if($scope.food === "0" || $scope.food === "1") {
                totalAnswered = totalAnswered + 1;
            }
            if($scope.children === "0" || $scope.children === "1") {
                totalAnswered = totalAnswered + 1;
            }
            if($scope.transportation === "0" || $scope.transportation === "1") {
                totalAnswered = totalAnswered + 1;
            }
            if($scope.safeHome === "0" || $scope.safeHome === "1") {
                totalAnswered = totalAnswered + 1;
            }
            //console.log('totalAnswered: ', totalAnswered);

            $scope.basicneedsPercent = Math.round((totalAnswered / totalQuestions) * 100);
            localStorageService.set('basicneedsPercent', $scope.basicneedsPercent);
        };
        $scope.educationChange = function() {
            $scope.oldEduValue = Math.round($scope.educationPercent);
            var totalQuestions = 2;
            var totalAnswered = 0;
            if($scope.children === "0" || $scope.children === "1") {
                totalAnswered = totalAnswered + 1;
            }
            if($scope.literacy === "0" || $scope.literacy === "1") {
                totalAnswered = totalAnswered + 1;
            }

            //console.log('totalAnswered: ', totalAnswered);

            $scope.educationPercent = Math.round((totalAnswered / totalQuestions) * 100);
            localStorageService.set('educationPercent', $scope.educationPercent);
        };
        $scope.healthChange = function() {
            $scope.oldHeaValue = Math.round($scope.healthPercent);
            var totalQuestions = 4;
            var totalAnswered = 0;
            if($scope.medicalCoverage === "0" || $scope.medicalCoverage === "1") {
                totalAnswered = totalAnswered + 1;
            }
            if($scope.untreatedMental === "0" || $scope.untreatedMental === "1") {
                totalAnswered = totalAnswered + 1;
            }
            if($scope.substanceDependent === "0" || $scope.substanceDependent === "1") {
                totalAnswered = totalAnswered + 1;
            }
            if($scope.disabilities === "0" || $scope.disabilities === "1") {
                totalAnswered = totalAnswered + 1;
            }
            //console.log('totalAnswered: ', totalAnswered);

            $scope.healthPercent = Math.round((totalAnswered / totalQuestions) * 100);
            localStorageService.set('healthPercent', $scope.healthPercent);
        };
        $scope.communityChange = function() {
            $scope.oldValue = Math.round($scope.communityPercent);
            var totalQuestions = 3;
            var totalAnswered = 0;
            if($scope.support === "0" || $scope.support === "1") {
                totalAnswered = totalAnswered + 1;
            }
            if($scope.crisisMode === "0" || $scope.crisisMode === "1") {
                totalAnswered = totalAnswered + 1;
            }
            if($scope.legalInvolvement === "0" || $scope.legalInvolvement === "1") {
                totalAnswered = totalAnswered + 1;
            }
            //console.log('totalAnswered: ', totalAnswered);
            $scope.communityPercent = Math.round((totalAnswered / totalQuestions) * 100);
            localStorageService.set('communityPercent', $scope.communityPercent);
        };
    }

})();
