/**
 * Created by Sushant Nayak on 3/22/2017.
 */
(function(){
    'use strict';

    angular.module('siemer').filter('unsafe', ['$sce',unsafe]);

    function unsafe($sce) {
        return $sce.trustAsHtml;
    }

})();