angular.module('menu')
    .component('home', {
        templateUrl : 'app/home/home.html',
        controllerAs: 'home',
        controller($timeout) {

            const home   = this;
            home.loading = true;

            $timeout(() => {
                home.loading = false;
                home.menu    = [{
                    title: 'About',
                    link : 'app.home.about'
                }, {
                    title: 'Contact',
                    link : 'app.home.contact'
                }];
            }, 5000);

        }
    });