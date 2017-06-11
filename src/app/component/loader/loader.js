angular.module('menu')
    .component('menuLoader', {
        bindings    : {
            visible: '='
        },
        templateUrl : 'app/component/loader/loader.html',
        controllerAs: 'loader',
        controller() {
            const loader = this;

        }
    });