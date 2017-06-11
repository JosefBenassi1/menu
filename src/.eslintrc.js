module.exports = {
    extends: [
        'angular'
    ],
    rules  : {
        'camelcase'                : [2, {'properties': 'never'}],
        'angular/no-service-method': 0,
        'key-spacing'              : [2, {
            'mode' : 'minimum',
            'align': {
                'beforeColon': false,
                'afterColon' : true,
                'on'         : 'colon'
            }
        }],
        'no-multi-spaces'          : [0, {
            exceptions: {
                'VariableDeclarator': true,
                'ImportDeclaration' : true
            }
        }],
        'no-unused-vars'           : [1,
            {
                'vars'              : 'all',
                'args'              : 'after-used',
                'ignoreRestSiblings': false
            }
        ]
    }
};
