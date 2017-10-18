(function(){
    'use strict';

    angular.module('siemer')
            .factory('LoginResource', loginResource)
            .factory('DemographicsResource', demographicsResource)
            .factory('FinanceResource', financeResource)
            .factory('BasicneedsResource', basicneedsResource)
            .factory('EducationResource', educationResource)
            .factory('HealthResource', healthResource)
            .factory('CommunitySupportResource', communitySupportResource)
            .factory('CreateNewCaseResource', createNewCaseResource)
            .factory('FindCaseNumberResource', findCaseNumberResource)
            .factory('InValidateSessionResource', inValidateSessionResource)
            .factory('ValidateSessionResource', validateSessionResource)
            .factory('SearchRequestResource', searchRequestResource)
            .factory('SetFoundClientResource', setFoundClientResource)
            .factory('PrepopulateDemographicsResource', prepopulateDemographicsResource)
            .factory('PrepopulateFinancesResource', prepopulateFinancesResource)
            .factory('PrepopulateBasicneedsResource', prepopulateBasicneedsResource)
            .factory('PrepopulateEducationResource', prepopulateEducationResource)
            .factory('PrepopulateHealthResource', prepopulateHealthResource)
            .factory('PrepopulateCommunityResource', prepopulateCommunityResource)
            .factory('FetchIncompleteAssessmentResource', fetchIncompleteAssessmentResource)
            .factory('GetCaseReportDetailsResource', getCaseReportDetailsResource)
            .factory('SavePartnerInfoResource', savePartnerInfoResource)
            .factory('SavePartnerMembersResource', savePartnerMembersResource)
            .factory('GetTeamDataResource', getTeamDataResource)
            .factory('GetProfileDataResource', getProfileDataResource)
            .factory('DeleteProfileResource', deleteProfileResource)
            .factory('SearchNatPartnerResource', searchNatPartnerResource)
            .factory('AllCityViewResource', allCityViewResource)
            .factory('GetAllOrgsByCityResource', getAllOrgsByCityResource)
            .factory('GetAllCitiesAveragesResource', getAllCitiesAveragesResource)
            .factory('ShowReportByPartnerResource', showReportByPartnerResource)
            .factory('SaveProfileEditResource', saveProfileEditResource)
            .factory('GetParticipantsByPartnerResource', getParticipantsByPartnerResource)
            .factory('GetIndividualCaseReportResource', getIndividualCaseReportResource)
            .factory('CreateNewUserResource', createNewUserResource)
            .factory('SaveLanguagePrefResource', saveLanguagePrefResource)
            .factory('UploadPhotoResource', uploadPhotoResource)
            .factory('ReadAndReturnImageResource', readAndReturnImageResource)
            .factory('GetAnswersByCaseIdAndMgidResource', getAnswersByCaseIdAndMgidResource)
            .factory('SendForgotPwdEmailResource', sendForgotPwdEmailResource)
            .factory('SaveCommunityInfoResource', saveCommunityInfoResource)
            .factory('GetCommunityDataResource', getCommunityDataResource)
            .factory('GetPartnerDataResource', getPartnerDataResource)
            .factory('UpdateClientStatusResource', updateClientStatusResource)
            .factory('ShowReportByPartnerAvgScoresResource', showReportByPartnerAvgScoresResource)
            .factory('ShowReportByCommunityResource', showReportByCommunityResource)
            .factory('GetPartnersForThisCommunityResource', getPartnersForThisCommunityResource)
            .factory('GetAllNetworkCitiesResource', getAllNetworkCitiesResource)
            .factory('ShowReportByCityResource', showReportByCityResource)
            .factory('ShowReportByCityAvgScoresResource', showReportByCityAvgScoresResource)
            .factory('ShowReportByCommunityAvgScoresResource', showReportByCommunityAvgScoresResource);

    loginResource.$inject = ['$resource'];
    demographicsResource.$inject = ['$resource'];
    financeResource.$inject = ['$resource'];
    basicneedsResource.$inject = ['$resource'];
    educationResource.$inject = ['$resource'];
    healthResource.$inject = ['$resource'];
    communitySupportResource.$inject = ['$resource'];
    createNewCaseResource.$inject = ['$resource'];
    findCaseNumberResource.$inject = ['$resource'];
    inValidateSessionResource.$inject = ['$resource'];
    validateSessionResource.$inject = ['$resource'];
    searchRequestResource.$inject = ['$resource'];
    setFoundClientResource.$inject = ['$resource'];
    prepopulateDemographicsResource.$inject = ['$resource'];
    prepopulateFinancesResource.$inject = ['$resource'];
    prepopulateBasicneedsResource.$inject = ['$resource'];
    prepopulateEducationResource.$inject = ['$resource'];
    prepopulateHealthResource.$inject = ['$resource'];
    prepopulateCommunityResource.$inject = ['$resource'];
    fetchIncompleteAssessmentResource.$inject = ['$resource'];
    getCaseReportDetailsResource.$inject = ['$resource'];
    savePartnerInfoResource.$inject = ['$resource'];
    savePartnerMembersResource.$inject = ['$resource'];
    getTeamDataResource.$inject = ['$resource'];
    getProfileDataResource.$inject = ['$resource'];
    deleteProfileResource.$inject = ['$resource'];
    searchNatPartnerResource.$inject = ['$resource'];
    allCityViewResource.$inject = ['$resource'];
    getAllOrgsByCityResource.$inject = ['$resource'];
    getAllCitiesAveragesResource.$inject = ['$resource'];
    showReportByPartnerResource.$inject = ['$resource'];
    saveProfileEditResource.$inject = ['$resource'];
    getParticipantsByPartnerResource.$inject = ['$resource'];
    getIndividualCaseReportResource.$inject = ['$resource'];
    createNewUserResource.$inject = ['$resource'];
    saveLanguagePrefResource.$inject = ['$resource'];
    uploadPhotoResource.$inject = ['$resource'];
    readAndReturnImageResource.$inject = ['$resource'];
    getAnswersByCaseIdAndMgidResource.$inject = ['$resource'];
    sendForgotPwdEmailResource.$inject = ['$resource'];
    saveCommunityInfoResource.$inject = ['$resource'];
    getCommunityDataResource.$inject = ['$resource'];
    getPartnerDataResource.$inject = ['$resource'];
    updateClientStatusResource.$inject = ['$resource'];
    showReportByPartnerAvgScoresResource.$inject = ['$resource'];
    showReportByCommunityResource.$inject = ['$resource'];
    getPartnersForThisCommunityResource.$inject = ['$resource'];
    getAllNetworkCitiesResource.$inject = ['$resource'];
    showReportByCityResource.$inject = ['$resource'];
    showReportByCityAvgScoresResource.$inject = ['$resource'];
    showReportByCommunityAvgScoresResource.$inject = ['$resource'];

    function loginResource ($resource) {
        return $resource('validate', {} , {
            'getData': {method: 'POST', isArray: false}
        });
    }
    function demographicsResource ($resource) {
        return $resource('saveDemographicsData', {} , {
            'saveDemographicsData': {method: 'POST', isArray: false}
        });
    }
    function financeResource ($resource) {
        return $resource('saveFinanceData', {} , {
            'saveFinanceData': {method: 'POST', isArray: false}
        });
    }
    function basicneedsResource ($resource) {
        return $resource('saveBasicneedsData', {} , {
            'saveBasicneedsData': {method: 'POST', isArray: false}
        });
    }
    function educationResource ($resource) {
        return $resource('saveEducationData', {} , {
            'saveEducationData': {method: 'POST', isArray: false}
        });
    }
    function healthResource ($resource) {
        return $resource('saveHealthData', {} , {
            'saveHealthData': {method: 'POST', isArray: false}
        });
    }
    function communitySupportResource ($resource) {
        return $resource('saveCommunitySupportData', {} , {
            'saveCommunitySupportData': {method: 'POST', isArray: false}
        });
    }
    function createNewCaseResource ($resource) {
        return $resource('generateNewCase', {} , {
            'generateNewCase': {method: 'POST', isArray: false}
        });
    }
    function findCaseNumberResource ($resource) {
        return $resource('findCaseNumber', {} , {
            'findCaseNumber': {method: 'POST', isArray: false}
        });
    }
    function validateSessionResource ($resource) {
        return $resource('validateSession', {} , {
            'validateSession': {method: 'POST', isArray: false}
        });
    }
    function inValidateSessionResource ($resource) {
        return $resource('signout', {} , {
            'signout': {method: 'POST', isArray: false}
        });
    }
    function searchRequestResource ($resource) {
        return $resource('searchRequest', {} , {
            'searchRequest': {method: 'POST', isArray: true}
        });
    }
    function setFoundClientResource ($resource) {
        return $resource('preserveClientCaseId', {} , {
            'preserveClientCaseId': {method: 'POST', isArray: false}
        });
    }
    function prepopulateDemographicsResource ($resource) {
        return $resource('prepopulateDemographics', {} , {
            'prepopulateDemographics': {method: 'POST', isArray: false}
        });
    }
    function prepopulateFinancesResource ($resource) {
        return $resource('prepopulateFinances', {} , {
            'prepopulateFinances': {method: 'POST', isArray: false}
        });
    }
    function prepopulateBasicneedsResource ($resource) {
        return $resource('prepopulateBasicneeds', {} , {
            'prepopulateBasicneeds': {method: 'POST', isArray: false}
        });
    }
    function prepopulateEducationResource ($resource) {
        return $resource('prepopulateEducation', {} , {
            'prepopulateEducation': {method: 'POST', isArray: false}
        });
    }
    function prepopulateHealthResource ($resource) {
        return $resource('prepopulateHealth', {} , {
            'prepopulateHealth': {method: 'POST', isArray: false}
        });
    }
    function prepopulateCommunityResource ($resource) {
        return $resource('prepopulateCommunity', {} , {
            'prepopulateCommunity': {method: 'POST', isArray: false}
        });
    }
    function fetchIncompleteAssessmentResource ($resource) {
        return $resource('fetchIncompleteAssessment', {} , {
            'fetchIncompleteAssessment': {method: 'POST', isArray: false}
        });
    }
    function getCaseReportDetailsResource ($resource) {
        return $resource('getCaseReportDetails', {} , {
            'getCaseReportDetails': {method: 'POST', isArray: false}
        });
    }
    function saveCommunityInfoResource ($resource) {
        return $resource('saveCommunityInfo', {} , {
            'saveCommunityInfo': {method: 'POST', isArray: false}
        });
    }
    function savePartnerInfoResource ($resource) {
        return $resource('savePartnerInfo', {} , {
            'savePartnerInfo': {method: 'POST', isArray: false}
        });
    }
    function savePartnerMembersResource ($resource) {
        return $resource('savePartnerMembers', {} , {
            'savePartnerMembers': {method: 'POST', isArray: false}
        });
    }
    function getTeamDataResource ($resource) {
        return $resource('getTeamData', {} , {
            'getTeamData': {method: 'POST', isArray: false}
        });
    }
    function getProfileDataResource ($resource) {
        return $resource('getProfileData', {} , {
            'getProfileData': {method: 'POST', isArray: false}
        });
    }
    function deleteProfileResource ($resource) {
        return $resource('deleteProfile', {} , {
            'deleteProfile': {method: 'POST', isArray: false}
        });
    }
    function searchNatPartnerResource ($resource) {
        return $resource('searchNationalPartner', {} , {
            'searchNationalPartner': {method: 'POST', isArray: false}
        });
    }
    function allCityViewResource ($resource) {
        return $resource('allCityView', {} , {
            'allCityView': {method: 'POST', isArray: false}
        });
    }
    function getAllOrgsByCityResource ($resource) {
        return $resource('getAllOrgsByCity', {} , {
            'getAllOrgsByCity': {method: 'POST', isArray: false}
        });
    }
    function getAllCitiesAveragesResource ($resource) {
        return $resource('getAllCitiesAverages', {} , {
            'getAllCitiesAverages': {method: 'POST', isArray: false}
        });
    }
    function showReportByPartnerResource ($resource) {
        return $resource('showReportByPartner', {} , {
            'showReportByPartner': {method: 'POST', isArray: false}
        });
    }
    function showReportByPartnerAvgScoresResource ($resource) {
        return $resource('showReportByPartnerAvgScores', {} , {
            'showReportByPartnerAvgScores': {method: 'POST', isArray: false}
        });
    }
    function showReportByCommunityResource ($resource) {
        return $resource('showReportByCommunity', {} , {
            'showReportByCommunity': {method: 'POST', isArray: false}
        });
    }
    function saveProfileEditResource ($resource) {
        return $resource('saveProfileEdit', {} , {
            'saveProfileEdit': {method: 'POST', isArray: false}
        });
    }
    function getParticipantsByPartnerResource ($resource) {
        return $resource('getParticipantsByPartner', {} , {
            'getParticipantsByPartner': {method: 'POST', isArray: false}
        });
    }
    function getIndividualCaseReportResource ($resource) {
        return $resource('getIndividualCaseReport', {} , {
            'getIndividualCaseReport': {method: 'POST', isArray: false}
        });
    }
    function createNewUserResource ($resource) {
        return $resource('createNewUser', {} , {
            'createNewUser': {method: 'POST', isArray: false}
        });
    }
    function saveLanguagePrefResource ($resource) {
        return $resource('saveLanguagePref', {} , {
            'saveLanguagePref': {method: 'POST', isArray: false}
        });
    }
    function uploadPhotoResource ($resource) {
        return $resource('uploadPhoto', {} , {
            'uploadPhoto': {method: 'POST',
                withCredentials: true,
                transformRequest: angular.identity,
                headers: {'Content-Type':undefined, enctype:'multipart/form-data'}}
        });
    }
    function readAndReturnImageResource ($resource) {
        return $resource('readAndReturnImage', {} , {
            'readAndReturnImage': {method: 'POST', isArray: false}
        });
    }
    function getAnswersByCaseIdAndMgidResource ($resource) {
        return $resource('getAnswersByCaseIdAndMgid', {} , {
            'getAnswersByCaseIdAndMgid': {method: 'POST', isArray: false}
        });
    }
    function sendForgotPwdEmailResource ($resource) {
        return $resource('sendForgotPwdEmail', {} , {
            'sendForgotPwdEmail': {method: 'POST', isArray: false}
        });
    }
    function getCommunityDataResource ($resource) {
        return $resource('getCommunityData', {} , {
            'getCommunityData': {method: 'POST', isArray: false}
        });
    }
    function getPartnerDataResource ($resource) {
        return $resource('getPartnerData', {} , {
            'getPartnerData': {method: 'POST', isArray: false}
        });
    }
    function updateClientStatusResource ($resource) {
        return $resource('updateClientStatus', {} , {
            'updateClientStatus': {method: 'POST', isArray: false}
        });
    }
    function getPartnersForThisCommunityResource ($resource) {
        return $resource('getPartnersForThisCommunity', {} , {
            'getPartnersForThisCommunity': {method: 'POST', isArray: false}
        });
    }
    function getAllNetworkCitiesResource ($resource) {
        return $resource('getAllNetworkCities', {} , {
            'getAllNetworkCities': {method: 'POST', isArray: false}
        });
    }
    function showReportByCityResource ($resource) {
        return $resource('showReportByCity', {} , {
            'showReportByCity': {method: 'POST', isArray: false}
        });
    }
    function showReportByCityAvgScoresResource ($resource) {
        return $resource('showReportByCityAvgScores', {} , {
            'showReportByCityAvgScores': {method: 'POST', isArray: false}
        });
    }
    function showReportByCommunityAvgScoresResource ($resource) {
        return $resource('showReportByCommunityAvgScores', {} , {
            'showReportByCommunityAvgScores': {method: 'POST', isArray: false}
        });
    }


})();