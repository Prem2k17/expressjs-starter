(function ()
{
    'use strict';
    
    angular
        .module('appmodule')
        .config(appmoduleConfig);

    function appmoduleConfig($stateProvider){
        
    	/*Inject UI-Router module for using $stateprovider*/
    	  $stateProvider  	        
      	.state('appmodule', {
            url: "/appmodule",      
            views    : {
                'root@'                      : {
                    templateUrl: 'modules/appmodule/appmodule.html',
                    controller : 'appmoduleController as vm'
                }
            },          
            data: {pageTitle: 'appmodule'}
          });
    }

})();