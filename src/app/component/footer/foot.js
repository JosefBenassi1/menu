angular.module('menu')
    .component('menuFooter', {
        templateUrl : 'app/component/footer/footer.html',
        controllerAs: 'footer',
        controller() {
            const footer = this;
            footer.copy = 'Copyright &copy; Your Website 2015';
            
        }
    });