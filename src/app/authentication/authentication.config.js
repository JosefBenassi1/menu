
angular
    .module('menu')
    .config(fbConfig);


function fbConfig($firebaseRefProvider) {
    const config = {
        apiKey     : 'YOUR_FIREBASE_KEY',
        authDomain : 'YOUR_FIREBASE_DOMAIN',
        databaseURL: 'YOUR_FIREBASE_URL'
    };

    $firebaseRefProvider
        .registerUrl({
            default: config.databaseURL
        });

    firebase.initializeApp(config);
};