angular
    .module('menu')
    .config(routesHomeConfig);

/** @ngInject */
function routesHomeConfig($stateProvider) {
    $stateProvider
        .state('app.home', {
            url      : '/',
            component: 'home'
        })
        .state('app.home.about', {
            url: 'about',
            component: 'about'
        })
        .state('app.home.contact', {
            url: 'contact',
            component: 'contact'
        });
}
