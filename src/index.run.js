angular
    .module('menu')
    .run(($rootScope, $state) => {
        $rootScope.$state = $state;
    });