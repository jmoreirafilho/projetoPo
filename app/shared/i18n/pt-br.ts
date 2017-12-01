/// <reference path="../../app.d.ts" />

module Blank {

    app.config(['$translateProvider', ($translateProvider) => {
        $translateProvider.translations('pt-br', {
            /* Titles */
            SYSTEM_T: 'Projetos PO',

            /* Fields */
            LOGIN_F: 'Login',
            PASSWORD_F: 'Senha',

            /* Placeholders */
            LOGIN_P: 'Informe seu e-mail',
            PASSWORD_P: 'Informe sua Senha',

            /* Buttons */
            LOGIN_B: 'Entrar',
        });
        $translateProvider.preferredLanguage('pt-br');
    }]);
}