/**
 * Created by Sushant Nayak on 2/9/2017.
 */
(function () {
    'use strict';
    var validateSession = ['SiemerService', 'SiemerFactory',function(SiemerService, SiemerFactory){
        console.log("routeMap.validateSession: ");
        return SiemerFactory.validateSession().$promise.then(function(results){
	        	console.log("routeMap.validateSession: ",results);
	            return results;
	        }).catch(function(error){
	            console.error('Error while validating session :' , error);
	        });
    }];
    var routeMap = [
        {
            state: 'loginView',
            config: {
                url: '/loginView',
                views: {
                    'main': {
                        templateUrl: 'app/login/landing-login.html',
                        controller: 'LoginController'/*,
                        resolve: {
                            validateSession: validateSession
                        }*/
                    }
                }
            }
        },
        {
            state: 'forgotPwdView',
            config: {
                url: '/forgotPwd',
                views: {
                    'main': {
                        templateUrl: 'app/login/forgotPwd.html',
                        controller: 'LoginController'
                    }
                }
            }
        },
        {
            state: 'dashboard',
            config: {
                url: '/dashboard',
                views: {
                    'main': {
                        templateUrl: 'app/login/dashboard.html',
                        controller: 'LoginController'/*,
                        resolve : {
                        	validateSession: validateSession
                        }*/
                    }
                }
            }
        },
        {
            state: 'new_incomplete_assessment',
            config: {
                url: '/assessmenttype',
                views: {
                    'main': {
                        templateUrl: 'app/casemgmt/assessmentStatusType.html',
                        controller: 'LoginController'/*,
                        resolve : {
                        	validateSession: validateSession
                        }*/
                    }
                }
            }
        },
        {
            state: 'new_or_old_case',
            config: {
                url: '/neworoldcase',
                views: {
                    'main': {
                        templateUrl: 'app/casemgmt/newOldAssessment.html',
                        controller: 'CasemgmtController'/*,
                        resolve : {
                        	validateSession: validateSession
                        }*/
                    }
                }
            }
        },
        {
            state: 'language_choice',
            config: {
                url: '/langchoice',
                views: {
                    'main': {
                        templateUrl: 'app/casemgmt/languageType.html',
                        controller: 'AssessmentController'/*,
                        resolve : {
                        	validateSession: validateSession
                        }*/
                    }
                }
            }
        },
        {
            state: 'assessment_demographics',
            config: {
                url: '/demographics/:caseId',
                views: {
                    'main': {
                        templateUrl: 'app/assessment/demographics.html',
                        controller: 'AssessmentController'/*,
                        resolve : {
                        	validateSession: validateSession
                        }*/
                    }
                }
            }
        },
        {
            state: 'assessment_finances',
            config: {
                url: '/finances',
                views: {
                    'main': {
                        templateUrl: 'app/assessment/finances.html',
                        controller: 'AssessmentController'/*,
                        resolve : {
                        	validateSession: validateSession
                        }*/
                    }
                }
            }
        },
        {
            state: 'assessment_basicneeds',
            config: {
                url: '/basicneeds',
                views: {
                    'main': {
                        templateUrl: 'app/assessment/basic-needs.html',
                        controller: 'AssessmentController'/*,
                        resolve : {
                        	validateSession: validateSession
                        }*/
                    }
                }
            }
        },
        {
            state: 'assessment_education',
            config: {
                url: '/education',
                views: {
                    'main': {
                        templateUrl: 'app/assessment/education.html',
                        controller: 'AssessmentController'/*,
                        resolve : {
                        	validateSession: validateSession
                        }*/
                    }
                }
            }
        },
        {
            state: 'assessment_health',
            config: {
                url: '/health',
                views: {
                    'main': {
                        templateUrl: 'app/assessment/health.html',
                        controller: 'AssessmentController'/*,
                        resolve : {
                        	validateSession: validateSession
                        }*/
                    }
                }
            }
        },
        {
            state: 'assessment_community',
            config: {
                url: '/community',
                views: {
                    'main': {
                        templateUrl: 'app/assessment/community.html',
                        controller: 'AssessmentController'/*,
                        resolve : {
                        	validateSession: validateSession
                        }*/
                    }
                }
            }
        },
        {
            state: 'assessment_confirmation',
            config: {
                url: '/confirmation',
                views: {
                    'main': {
                        templateUrl: 'app/assessment/confirmation.html',
                        controller: 'AssessmentController'/*,
                        resolve : {
                        	validateSession: validateSession
                        }*/
                    }
                }
            }
        },
        {
            state: 'search',
            config: {
                url: '/search',
                views: {
                    'main': {
                        templateUrl: 'app/search/search.html',
                        controller: 'SearchController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        },
        {
            state: 'search_table',
            config: {
                url: '/searchtable',
                views: {
                    'main': {
                        templateUrl: 'app/search/cm18_SearchTable.html',
                        controller: 'SearchController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        },
        {
            state: 'incomplete_assessment_table',
            config: {
                url: '/incompleteAssessmentTable',
                views: {
                    'main': {
                        templateUrl: 'app/assessment/incomplete/incompleteAssessmentTable.html',
                        controller: 'IncompleteAssessmentController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        },
        {
            state: 'most_recent_results',
            config: {
                url: '/mostRecentResults/:caseId',
                views: {
                    'main': {
                        templateUrl: 'app/assessment/mostrecent/cm16_mostRecentResults.html',
                        controller: 'IncompleteAssessmentController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        },
        {
            state: 'national_partner',
            config: {
                url: '/nationalPartner',
                views: {
                    'main': {
                        templateUrl: 'app/business/a08_ntnlPartners_alphaSorter.html',
                        controller: 'BusinessController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        },
        {
            state: 'new_community',
            config: {
                url: '/newCommunity',
                views: {
                    'main': {
                        templateUrl: 'app/business/newCommunity.html',
                        controller: 'BusinessController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        },
        {
            state: 'edit_community',
            config: {
                url: '/editCommunity/:businessId',
                views: {
                    'main': {
                        templateUrl: 'app/business/editCommunity.html',
                        controller: 'BusinessController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        },
        {
            state: 'new_partner',
            config: {
                url: '/newPartner/:communityId',
                views: {
                    'main': {
                        templateUrl: 'app/business/newPartner.html',
                        controller: 'BusinessController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        },
        {
            state: 'edit_partner',
            config: {
                url: '/editPartner/:businessId',
                views: {
                    'main': {
                        templateUrl: 'app/business/editPartner.html',
                        controller: 'BusinessController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        },
        {
            state: 'new_director',
            config: {
                url: '/newDirector/:communityId',
                views: {
                    'main': {
                        templateUrl: 'app/users/newDirector.html',
                        controller: 'UsersController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        },
        {
            state: 'new_caseworker',
            config: {
                url: '/newCaseWorker/:businessId',
                views: {
                    'main': {
                        templateUrl: 'app/users/newCaseWorker.html',
                        controller: 'UsersController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        },
        {
            state: 'communityTeamView',
            config: {
                url: '/communityTeam/:businessId',
                views: {
                    'main': {
                        templateUrl: 'app/team_profile/community_team_list.html',
                        controller: 'TeamAndProfileController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        },
        {
            state: 'teamView',
            config: {
                url: '/team/:businessId',
                views: {
                    'main': {
                        templateUrl: 'app/team_profile/partner_team_list.html',
                        controller: 'TeamAndProfileController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        },
        {
            state: 'teamViewro',
            config: {
                url: '/teamro/:businessId',
                views: {
                    'main': {
                        templateUrl: 'app/team_profile/partner_team_list_ro.html',
                        controller: 'TeamAndProfileController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        },
        {
            state: 'editProfile',
            config: {
                url: '/editProfile/:memberId',
                views: {
                    'main': {
                        templateUrl: 'app/team_profile/edit_team_member.html',
                        controller: 'TeamAndProfileController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        },
        {
            state: 'newMember',
            config: {
                url: '/newMember/:businessId',
                views: {
                    'main': {
                        templateUrl: 'app/team_profile/new_team_member.html',
                        controller: 'TeamAndProfileController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        },
        {
            state: 'all_city_view',
            config: {
                url: '/allCityView',
                views: {
                    'main': {
                        templateUrl: 'app/business/citylist.html',
                        controller: 'BusinessController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        },
        {
            state: 'all_city_averages',
            config: {
                url: '/allCityAverages',
                views: {
                    'main': {
                        templateUrl: 'app/search/searchTable_cities.html',
                        controller: 'SearchController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        },
        {
            state: 'all_partner_city_view',
            config: {
                url: '/allPartnerByCityView/:cityName',
                views: {
                    'main': {
                        templateUrl: 'app/search/searchTable_partners.html',
                        controller: 'SearchController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        },
        {
            state: 'all_participants_partner_view',
            config: {
                url: '/allParticipantsByPartnerView/:businessId',
                views: {
                    'main': {
                        templateUrl: 'app/search/searchTable_participants.html',
                        controller: 'SearchController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        },
        {
            state: 'reportView',
            config: {
                url: '/report/:businessId',
                views: {
                    'main': {
                        templateUrl: 'app/reports/report_community_national_assessmenttype.html',
                        controller: 'ReportsController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        }, /** CM/PM reports */
        {
            state: 'reportsPmCM',
            config: {
                url: '/reportsPmCM/:partnerId',
                views: {
                    'main': {
                        templateUrl: 'app/reports/reports_pm_cm.html',
                        controller: 'ReportsController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        },
        {
            state: 'reportPartnerNationalAssessmentType',
            config: {
                url: '/reportPartnerNationalAssessmentType/:partnerId',
                views: {
                    'main': {
                        templateUrl: 'app/reports/report_partner_national_assessmenttype.html',
                        controller: 'ReportsController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        },
        {
            state: 'reportPartnerEntryExit',
            config: {
                url: '/reportPartnerEntryExit/:partnerId',
                views: {
                    'main': {
                        templateUrl: 'app/reports/report_partner_entry_exit.html',
                        controller: 'ReportsController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        },/** Director reports */
        {
            state: 'reportsDirector',
            config: {
                url: '/reportsDirector/:communityId',
                views: {
                    'main': {
                        templateUrl: 'app/reports/reports_director.html',
                        controller: 'ReportsController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        },
        {
            state: 'reportCommunityPartnerNationalAssessmenttype',
            config: {
                url: '/reportCommunityPartnerNationalAssessmenttype/:communityId',
                views: {
                    'main': {
                        templateUrl: 'app/reports/report_community_partner_national_assessmenttype.html',
                        controller: 'ReportsController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        },
        {
            state: 'reportCommunityPartnerEntryExit',
            config: {
                url: '/reportCommunityPartnerEntryExit/:communityId',
                views: {
                    'main': {
                        templateUrl: 'app/reports/report_community_partner_entry_exit.html',
                        controller: 'ReportsController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        },/** Admin reports */
        {
            state: 'reportsAdmin',
            config: {
                url: '/reportsAdmin',
                views: {
                    'main': {
                        templateUrl: 'app/reports/reports_admin.html',
                        controller: 'ReportsController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        },
        {
            state: 'reportCommunityNationalAssessmenttype',
            config: {
                url: '/reportCommunityNationalAssessmenttype',
                views: {
                    'main': {
                        templateUrl: 'app/reports/report_community_national_assessmenttype.html',
                        controller: 'ReportsController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        },
        {
            state: 'reportCommunityEntryExit',
            config: {
                url: '/reportCommunityEntryExit',
                views: {
                    'main': {
                        templateUrl: 'app/reports/report_community_entry_exit.html',
                        controller: 'ReportsController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        },
        {
            state: 'caseReportView',
            config: {
                url: '/casereport/:caseId',
                views: {
                    'main': {
                        templateUrl: 'app/reports/report_caseId.html',
                        controller: 'ReportsController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        },
        {
            state: 'sample_demographics',
            config: {
                url: '/sampleDemographics',
                views: {
                    'main': {
                        templateUrl: 'app/readOnly/demographicsReadOnly.html',
                        controller: 'AssessmentController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        },
        {
            state: 'sample_finances',
            config: {
                url: '/sampleFinances',
                views: {
                    'main': {
                        templateUrl: 'app/readOnly/financesReadOnly.html',
                        controller: 'AssessmentController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        },
        {
            state: 'sample_basic_needs',
            config: {
                url: '/sampleBasicNeeds',
                views: {
                    'main': {
                        templateUrl: 'app/readOnly/basic-needsReadOnly.html',
                        controller: 'AssessmentController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        },
        {
            state: 'sample_education',
            config: {
                url: '/sampleEducation',
                views: {
                    'main': {
                        templateUrl: 'app/readOnly/educationReadOnly.html',
                        controller: 'AssessmentController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        },
        {
            state: 'sample_health',
            config: {
                url: '/sampleHealth',
                views: {
                    'main': {
                        templateUrl: 'app/readOnly/healthReadOnly.html',
                        controller: 'AssessmentController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        },
        {
            state: 'sample_community',
            config: {
                url: '/sampleCommunity',
                views: {
                    'main': {
                        templateUrl: 'app/readOnly/communityReadOnly.html',
                        controller: 'AssessmentController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        },
        {
            state: 'assessmentReport',
            config: {
                url: '/assessmentReport/:caseId/:mgId',
                views: {
                    'main': {
                        templateUrl: 'app/reports/assessmentReport.html',
                        controller: 'ReportsController'/*,
                         resolve : {
                         validateSession: validateSession
                         }*/
                    }
                }
            }
        }

    ];
    angular.module('siemer')
           .constant('ROUTE_MAP', routeMap);
})();