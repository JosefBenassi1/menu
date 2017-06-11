angular.module('menu')
    .component('contact', {
        templateUrl : 'app/home/contact/contact.html',
        controllerAs: 'contact',
        controller($log, AuthenticationService) {
            const contact = this;
            $log.debug('ive loaded');
            contact.mytext = '';

            contact.login  = () => {
                AuthenticationService.login(contact.email, contact.password)
                    .then(() => {

                    });
            };

            contact.test = () => {
                alert(contact.mytext);
            };
        }
    });