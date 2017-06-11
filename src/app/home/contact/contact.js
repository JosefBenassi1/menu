angular.module('menu')
    .component('contact', {
        templateUrl : 'app/home/contact/contact.html',
        controllerAs: 'contact',
        controller($log) {
            const contact = this;
            $log.debug('ive loaded');
        }
    });