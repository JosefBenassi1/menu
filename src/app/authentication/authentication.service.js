angular.module('menu')
    .service('AuthenticationService', AuthenticationService);

function AuthenticationService($firebaseAuth) {

    const auth   = $firebaseAuth();
    let authData = auth.$getAuth();

    const storeAuthData = (response) => {
        authData = response;
        return authData;
    };

    /**
     * FIND USAGE FOR ANGULAR FIRE AUTH
     * @param token
     * @returns {*}
     */

    this.login = (email, password) => {
        return auth.$signInWithEmailAndPassword(email, password);
    };

    this.token                 = (token) => {
        return auth
            .$signInWithCustomToken(token);
    };
    this.register              = (user) => {
        return auth
            .$createUserWithEmailAndPassword(user.email, user.password)
            .then(storeAuthData);
    };
    this.logout                = () => {
        //$localStorage.$reset();
        return auth
            .$signOut()
            .then(clearAuthData);
    };
    this.waitForSignIn         = () => {
        return auth
            .$waitForSignIn();
    };
    this.requireAuthentication = () => {
        return auth
            .$requireSignIn();
    };
    this.isAuthenticated       = () => {
        return !!authData;
    };
    this.current               = () => {
        return auth.$getAuth();
    };

    this.getUser = () => {
        if (authData) {
            return authData;
        }
    };
    return this;
}