/**
 * Created by Sushant Nayak on 2/9/2017.
 */
(function(){
    'use strict';

    angular.module('siemer').config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', 'ROUTE_MAP', '$compileProvider','ChartJsProvider',
        '$translateProvider','growlProvider','localStorageServiceProvider'];

    function config($stateProvider, $urlRouterProvider, ROUTE_MAP, $compileProvider, ChartJsProvider,
                    $translateProvider, growlProvider, localStorageServiceProvider){

        growlProvider.globalPosition('top-center');
        growlProvider.globalTimeToLive({success: 3000, error: 3000, warning: 3000, info: 4000});

        localStorageServiceProvider
            .setPrefix('myApp')
            .setStorageType('sessionStorage')
            .setNotify(true, true);

        ChartJsProvider.setOptions(
            { colors : [ '#113B62', '#EC7C4F', '#2DC0D5', '#C3DA60', '#3294C0'],
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }] }});
        $translateProvider.useSanitizeValueStrategy("sanitize");
        $translateProvider.preferredLanguage('es');

        for (var i = 0, max = ROUTE_MAP.length; i < max; i++) {
            var mapping = ROUTE_MAP[i];
            $stateProvider.state(mapping.state, mapping.config);
        }
        $urlRouterProvider.otherwise('/loginView');
        //$compileProvider.aHrefSanitizationWhitelist(/\s*(https?|ftp|mailto|ijet2):/);   //Allows application links to open IJET (ijet2:// protocol)
    }
})();
