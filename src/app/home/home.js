angular.module('menu')
    .component('home', {
        templateUrl : 'app/home/home.html',
        controllerAs: 'home',
        controller() {

            const home = this;

            home.h1 = 'MenuJP';

            home.loading = true;

            home.loading = false;
            home.menu    = [{
                title: 'About',
                link : 'app.home.about'
            }, {
                title: 'Contact',
                link : 'app.home.contact'
            }];

        }

    });


   