angular.module('menu')
    .component('home', {
        templateUrl : 'app/home/home.html',
        controllerAs: 'home',
        controller() {

            const h1 = this;
            h1.copy = 'Menu jp';

            const home   = this;
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


   