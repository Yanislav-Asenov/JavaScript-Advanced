function solve() {
    let usernamePattern = /^[a-zA-Z0-9]{3,20}$/g;
    let passwordPattern = /^[a-zA-Z0-9_]{5,15}$/g;
    let emailPattern = /^.+?@.+?[.]{1,}.+[.]*/g;

    return function() {
        // hide/show company info
        $('#company').on('click', function (event) {
            let field = $('#companyInfo');
            if (field.css('display') === 'none') {
                field.css('display', 'inline');
            } else {
                field.css('display', 'none');
            }
        });

        // validate before submit
        $('#submit').on('click', function (event) {
            let usernameField = $('#username');
            let passwordField = $('#password');
            let confirmPasswordField = $('#confirm-password');
            let emailField = $('#email');
            let companyNumberField = $('#companyNumber');

            usernameField.css('border', 'none');
            passwordField.css('border', 'none');
            confirmPasswordField.css('border', 'none');
            emailField.css('border', 'none');
            companyNumberField.css('border', 'none');
            $('#valid').css('display', 'none');
            

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
            }

            if (!username || !password || !email || (!companyNumber && isCompany.prop('checked'))) {
                event.preventDefault();
                if (!username) {
                    usernameField.css('border', 'solid');
                    usernameField.css('border-color', 'red');
                }
                if (!password) {
                    passwordField.css('border', 'solid');
                    confirmPasswordField.css('border', 'solid');
                    passwordField.css('border-color', 'red');
                    confirmPasswordField.css('border-color', 'red');
                }
                if (!email) {
                    emailField.css('border', 'solid');
                    emailField.css('border-color', 'red');
                }
                if (!companyNumber) {
                     companyNumberField.css('border', 'solid');
                    companyNumberField.css('border-color', 'red');
                }
            } else {
                event.preventDefault();
                $('#valid').css('display', '');
            }
        });
    };
}
