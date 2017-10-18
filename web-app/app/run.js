/**
 * Created by Sushant Nayak on 2/9/2017.
 */
(function(){
    'use strict';

    angular.module('siemer').run(run);

    run.$inject = ['$stateParams', '$rootScope'];

    function run($stateParams, $rootScope){
        $rootScope.$stateParams = $stateParams;
    }
})();