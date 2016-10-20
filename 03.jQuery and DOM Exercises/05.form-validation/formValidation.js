function solve() {
    let usernameField = $('#username');
    let passwordField = $('#password');
    let confirmPasswordField = $('#confirm-password');
    let emailField = $('#email');
    let companyNumberField = $('#companyNumber');

    return function() {
        let usernamePattern = /^[a-zA-Z0-9]{3,20}$/g;
        let passwordPattern = /^[a-zA-Z0-9_]{5,15}$/g;
        let emailPattern = /^.+?@.+?[.]{1,}.+[.]*/g;

        // hide/show company info
        $('#company').on('click', function (event) {
            $('#companyNumber').val('');
            let field = $('#companyInfo');
            if (field.css('display') === 'none') {
                field.css('display', 'inline');
            } else {
                field.css('display', 'none');
            }
        });

        // validate before submit
        $('#submit').on('click', function (event) {
            event.preventDefault();
            usernameField.css('border-color', 'rgba(255, 0, 0, 0)');
            passwordField.css('border-color', 'rgba(255, 0, 0, 0)');
            confirmPasswordField.css('border-color', 'rgba(255, 0, 0, 0)');
            emailField.css('border-color', 'rgba(255, 0, 0, 0)');
            companyNumberField.css('border-color', 'rgba(255, 0, 0, 0)');


            let username = usernameField.val().match(usernamePattern);
            let password = passwordField.val().match(passwordPattern);
            let confirmPassword = confirmPasswordField.val().match(passwordPattern);
            let email = emailField.val().match(emailPattern);
            let isCompany = $('#company');
            let companyNumber = false;
            if (isCompany.prop('checked')) {
                companyNumber = Number(companyNumberField.val());
                if (!(companyNumber >= 1000 && companyNumber <= 9999)) {
                    companyNumber = undefined;
                }
            }

            if (password && confirmPassword) {
                if (password[0] !== confirmPassword[0]) {
                    password = undefined;
                }
            } else {
                password = undefined;
            }

            if (!username || !password || !email || (!companyNumber && isCompany.prop('checked'))) {
                $('#valid').css('display', 'none');

                if (!username) {
                    usernameField.css('border-color', '#ff0000');
                }
                if (!password) {
                    passwordField.css('border-color', '#ff0000');
                    confirmPasswordField.css('border-color', '#ff0000');
                }
                if (!email) {
                    emailField.css('border-color', '#ff0000');
                }
                if (!companyNumber && isCompany.prop('checked')) {
                    companyNumberField.css('border-color', '#ff0000');
                }
            } else {
                $('#valid').css('display', '');
            }
        });
    };
}
