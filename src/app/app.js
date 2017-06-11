angular.module('menu')
    .component('app', {
        templateUrl: 'app/app.html',
        controllerAs: 'app',
        controller() {
const app = this;
app.hello = 'Josef';
app.login = () => {
	alert('Hey ' + app.hello);
}
        }
    });