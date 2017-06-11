angular.module('menu')
    .component('menuFooter', {
        templateUrl : 'app/footer/footer.html',
        controllerAs: 'footer',
        controller() {
            const footer = this;
            footer.copy = 'Copyright &copy; Your Website 2015';
            
        }
    });