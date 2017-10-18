(function() {
    'use strict';

    angular.module('siemer')
            .service('SiemerService', siemerService);

    siemerService.$inject = ['$q','LoginResource','DemographicsResource','FinanceResource','BasicneedsResource',
                                'EducationResource','HealthResource','CommunitySupportResource','FindCaseNumberResource',
                                'InValidateSessionResource','ValidateSessionResource','SearchRequestResource',
                                'SetFoundClientResource', 'PrepopulateDemographicsResource','PrepopulateFinancesResource',
                                'PrepopulateBasicneedsResource','PrepopulateEducationResource','PrepopulateHealthResource',
                                'PrepopulateCommunityResource','FetchIncompleteAssessmentResource', 'GetCaseReportDetailsResource',
                                'SavePartnerInfoResource','SavePartnerMembersResource', 'GetTeamDataResource','GetProfileDataResource',
                                'DeleteProfileResource','SearchNatPartnerResource','AllCityViewResource','GetAllOrgsByCityResource',
                                'ShowReportByPartnerResource', 'SaveProfileEditResource','GetAllCitiesAveragesResource',
                                'GetParticipantsByPartnerResource','GetIndividualCaseReportResource', 'CreateNewUserResource',
                                'SaveLanguagePrefResource','UploadPhotoResource','ReadAndReturnImageResource',
                                'GetAnswersByCaseIdAndMgidResource', 'SendForgotPwdEmailResource','SaveCommunityInfoResource',
                                'GetCommunityDataResource','GetPartnerDataResource','UpdateClientStatusResource',
                                'ShowReportByPartnerAvgScoresResource','ShowReportByCommunityResource','GetPartnersForThisCommunityResource',
                                'GetAllNetworkCitiesResource','ShowReportByCityResource','ShowReportByCityAvgScoresResource',
                                'ShowReportByCommunityAvgScoresResource'];

    function siemerService($q,LoginResource,DemographicsResource,FinanceResource,BasicneedsResource,
                                EducationResource,HealthResource,CommunitySupportResource,FindCaseNumberResource,
                                InvalidateSessionResource,ValidateSessionResource, SearchRequestResource,
                                SetFoundClientResource, PrepopulateDemographicsResource,PrepopulateFinancesResource,
                                PrepopulateBasicneedsResource,PrepopulateEducationResource,PrepopulateHealthResource,
                                PrepopulateCommunityResource,FetchIncompleteAssessmentResource, GetCaseReportDetailsResource,
                                SavePartnerInfoResource,SavePartnerMembersResource, GetTeamDataResource,GetProfileDataResource,
                                DeleteProfileResource,SearchNatPartnerResource,AllCityViewResource,GetAllOrgsByCityResource,
                                ShowReportByPartnerResource, SaveProfileEditResource,GetAllCitiesAveragesResource,
                                GetParticipantsByPartnerResource, GetIndividualCaseReportResource, CreateNewUserResource,
                                SaveLanguagePrefResource, UploadPhotoResource, ReadAndReturnImageResource,
                                GetAnswersByCaseIdAndMgidResource, SendForgotPwdEmailResource, SaveCommunityInfoResource,
                                GetCommunityDataResource, GetPartnerDataResource,UpdateClientStatusResource,
                                ShowReportByPartnerAvgScoresResource,ShowReportByCommunityResource, GetPartnersForThisCommunityResource,
                                GetAllNetworkCitiesResource, ShowReportByCityResource, ShowReportByCityAvgScoresResource,
                                ShowReportByCommunityAvgScoresResource){
 
        this.validateLoginCredential = function (loginReqData) {
            console.log("Inside Login Data");
            var deferred = $q.defer();
            LoginResource.get({loginReqData: loginReqData}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };        
        this.saveDemographicsData = function (demographicsData) {
            console.log("Inside saveDemographicsData");
            var deferred = $q.defer();
            DemographicsResource.get({demographicsData: demographicsData}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.saveFinanceData = function (financeData) {
            console.log("Inside saveDemographicsData");
            var deferred = $q.defer();
            FinanceResource.get({financeData: financeData}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.saveBasicneedsData = function (basicneedsData) {
            console.log("Inside saveBasicneedsData");
            var deferred = $q.defer();
            BasicneedsResource.get({basicneedsData: basicneedsData}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.saveEducationData = function (educationData) {
            console.log("Inside saveEducationData");
            var deferred = $q.defer();
            EducationResource.get({educationData: educationData}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.saveHealthData = function (healthData) {
            console.log("Inside saveHealthData");
            var deferred = $q.defer();
            HealthResource.get({healthData: healthData}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.saveCommunitySupportData = function (communitySupportData) {
            console.log("Inside saveCommunitySupportData");
            var deferred = $q.defer();
            CommunitySupportResource.get({communitySupportData: communitySupportData}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.createNewCase = function () {
            console.log("Inside createNewCase");
            var deferred = $q.defer();
            CreateNewCaseResource.get({"generateCaseParams":generateCaseParams}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.findCaseNumber = function (caseNumber) {
            console.log("Inside findCaseNumber");
            var deferred = $q.defer();
            FindCaseNumberResource.get({"caseNumber":caseNumber}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.validateSession = function () {
            console.log("Inside validateSession");
            var deferred = $q.defer();
            ValidateSessionResource.get({}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.invalidateSession = function () {
            console.log("Inside invalidateSession");
            var deferred = $q.defer();
            InvalidateSessionResource.get({}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.searchRequest = function (searchReqData) {
            console.log("Inside searchRequest");
            var deferred = $q.defer();
            SearchRequestResource.get({"searchReqData":searchReqData}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.useFoundClient = function (caseID) {
            console.log("Inside useFoundClient");
            var deferred = $q.defer();
            SetFoundClientResource.get({"caseID":caseID}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.prepopulateDemographics = function (caseId) {
            console.log("Inside prepopulateDemographics");
            var deferred = $q.defer();
            PrepopulateDemographicsResource.get({"caseId":caseId}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.prepopulateFinances = function () {
            console.log("Inside prepopulateFinances");
            var deferred = $q.defer();
            PrepopulateFinancesResource.get({}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.prepopulateBasicneeds = function () {
            console.log("Inside prepopulateBasicneeds");
            var deferred = $q.defer();
            PrepopulateBasicneedsResource.get({}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.prepopulateEducation = function () {
            console.log("Inside prepopulateEducation");
            var deferred = $q.defer();
            PrepopulateEducationResource.get({}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.prepopulateHealth = function () {
            console.log("Inside prepopulateHealth");
            var deferred = $q.defer();
            PrepopulateHealthResource.get({}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.prepopulateCommunity = function () {
            console.log("Inside prepopulateCommunity");
            var deferred = $q.defer();
            PrepopulateCommunityResource.get({}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.fetchIncompleteAssessment = function () {
            console.log("Inside fetchIncompleteAssessment");
            var deferred = $q.defer();
            FetchIncompleteAssessmentResource.get({}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.getCaseReportDetails = function (caseNumberWithMgid) {
            console.log("Inside getCaseReportDetails");
            var deferred = $q.defer();
            GetCaseReportDetailsResource.get({"caseNumberWithMgid":caseNumberWithMgid}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.saveCommunityInfo = function (communityData) {
            console.log("Inside saveCommunityInfo");
            var deferred = $q.defer();
            SaveCommunityInfoResource.get({"communityData":communityData}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.savePartnerInfo = function (partnerData) {
            console.log("Inside savePartnerInfo");
            var deferred = $q.defer();
            SavePartnerInfoResource.get({"partnerData":partnerData}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.savePartnerMembers = function (partnerMemberData, businessId) {
            console.log("Inside savePartnerMembers");
            var deferred = $q.defer();
            SavePartnerMembersResource.get({"partnerMemberData":partnerMemberData, "businessId":businessId}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.getTeamData = function (businessId) {
            console.log("Inside getTeamData");
            var deferred = $q.defer();
            GetTeamDataResource.get({"businessId":businessId}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.getProfileData = function (memberId) {
            console.log("Inside getProfileData");
            var deferred = $q.defer();
            GetProfileDataResource.get({"memberId":memberId}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.deleteProfile = function (memberId) {
            console.log("Inside deleteProfile");
            var deferred = $q.defer();
            DeleteProfileResource.get({"memberId":memberId}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.searchNatPartner = function (searchBy) {
            console.log("Inside searchNatPartner");
            var deferred = $q.defer();
            SearchNatPartnerResource.get({"searchBy":searchBy}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.allCityView = function () {
            console.log("Inside allCityView");
            var deferred = $q.defer();
            AllCityViewResource.get({}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.getAllOrgsByCity = function (cityName) {
            console.log("Inside getAllOrgsByCity");
            var deferred = $q.defer();
            GetAllOrgsByCityResource.get({"cityName":cityName}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.getAllCitiesAverages = function () {
            console.log("Inside getAllCitiesAverages");
            var deferred = $q.defer();
            GetAllCitiesAveragesResource.get({}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };

        this.saveProfileEdit = function (profileData) {
            console.log("Inside saveProfileEdit");
            var deferred = $q.defer();
            SaveProfileEditResource.get({"profileData":profileData}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.getParticipantsByPartner = function (businessId) {
            console.log("Inside getParticipantsByPartner");
            var deferred = $q.defer();
            GetParticipantsByPartnerResource.get({"businessId":businessId}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.getIndividualCaseReport = function (caseId) {
            console.log("Inside getIndividualCaseReport");
            var deferred = $q.defer();
            GetIndividualCaseReportResource.get({"caseId":caseId}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.createNewUser = function (profileData) {
            console.log("Inside createNewUser");
            var deferred = $q.defer();
            CreateNewUserResource.get({"profileData":profileData}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.saveLanguagePref = function (langRef) {
            console.log("Inside saveLanguage");
            var deferred = $q.defer();
            SaveLanguagePrefResource.get({"langRef":langRef}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.uploadPhoto = function (photoFile) {
            console.log("Inside saveLanguage");
            var deferred = $q.defer();
            UploadPhotoResource.get({"photoFile":photoFile}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.readAndReturnImage = function () {
            console.log("Inside readAndReturnImage");
            var deferred = $q.defer();
            ReadAndReturnImageResource.get({}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };

        this.getAnswersByCaseIdAndMgid = function (caseId, mgId) {
            console.log("Inside readAndReturnImage");
            var deferred = $q.defer();
            GetAnswersByCaseIdAndMgidResource.get({"caseId":caseId, "mgId":mgId}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.sendForgotPwdEmail = function (email) {
            console.log("Inside sendForgotPwdEmail");
            var deferred = $q.defer();
            SendForgotPwdEmailResource.get({"email":email}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.getCommunityData = function (businessId) {
            console.log("Inside getCommunityData");
            var deferred = $q.defer();
            GetCommunityDataResource.get({"businessId":businessId}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };

        this.getPartnerData = function (businessId) {
            console.log("Inside getCommunityData");
            var deferred = $q.defer();
            GetPartnerDataResource.get({"businessId":businessId}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.updateClientStatus = function (caseId, clientStatus) {
            console.log("Inside updateClientStatus");
            var deferred = $q.defer();
            UpdateClientStatusResource.get({"caseId":caseId, "clientStatus": clientStatus}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.getPartnersForThisCommunity = function (communityId) {
            console.log("Inside getPartnersForThisCommunity");
            var deferred = $q.defer();
            GetPartnersForThisCommunityResource.get({"communityId":communityId}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.getAllNetworkCities = function () {
            console.log("Inside getAllNetworkCities");
            var deferred = $q.defer();
            GetAllNetworkCitiesResource.get({}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };

        /** ================== Reports ========= */
        this.showReportByPartner = function (partnerId, startDate, endDate, assessmentType) {
            console.log("Inside showReportByPartner");
            var deferred = $q.defer();
            ShowReportByPartnerResource.get({"partnerId":partnerId, "startDate": startDate,"endDate": endDate, "assessmentType":assessmentType}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.showReportByPartnerAvgScores = function (partnerId, startDate, endDate) {
            console.log("Inside showReportByPartner");
            var deferred = $q.defer();
            ShowReportByPartnerAvgScoresResource.get({"partnerId":partnerId, "startDate": startDate, "endDate": endDate}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        // Director
        this.showReportByCommunity = function (communityId, startDate, endDate, assessmentType, partnerId) {
            console.log("Inside showReportByPartner");
            var deferred = $q.defer();
            ShowReportByCommunityResource.get({"communityId":communityId, "startDate": startDate,"endDate": endDate, "assessmentType":assessmentType, "partnerId":partnerId}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.showReportByCommunityAvgScores = function (communityId, startDate, endDate, partnerId) {
            console.log("Inside showReportByPartner");
            var deferred = $q.defer();
            ShowReportByCommunityAvgScoresResource.get({"communityId":communityId, "partnerId":partnerId, "startDate": startDate, "endDate": endDate}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        // Admin
        this.showReportByCity = function (city, startDate, endDate, assessmentType) {
            console.log("Inside showReportByCity");
            var deferred = $q.defer();
            ShowReportByCityResource.get({"city":city, "startDate": startDate,"endDate": endDate, "assessmentType":assessmentType}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
        this.showReportByCityAvgScores = function (city, startDate, endDate) {
            console.log("Inside showReportByCityAvgScores");
            var deferred = $q.defer();
            ShowReportByCityAvgScoresResource.get({"city":city, "startDate": startDate,"endDate": endDate}
                , function (results) {
                    if (results.errors) {
                        deferred.reject(results.errors);
                    } else {
                        deferred.resolve(results);
                    }
                }, function (errors) {
                    deferred.reject(errors);
                });
            return deferred.promise;
        };
    }
})();