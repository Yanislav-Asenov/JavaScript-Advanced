function solve() {
    let usernameField = $('#username');
    let passwordField = $('#password');
    let confirmPasswordField = $('#confirm-password');
    let emailField = $('#email');
    let companyNumberField = $('#companyNumber');

    usernameField.css('border-color', '');
    passwordField.css('border-color', '');
    confirmPasswordField.css('border-color', '');
    emailField.css('border-color', '');
    companyNumberField.css('border-color', '');
    $('#valid').css('display', '');


        let usernamePattern = /^[a-zA-Z0-9]{3,20}$/g;
        let passwordPattern = /^[a-zA-Z0-9_]{5,15}$/g;
        let emailPattern = /^.+?@.+?[.]{1,}.+[.]*$/g;

        // hide/show company info
        $('#company').on('click', function (event) {
            let companyInputField = $('#companyNumber');
            companyInputField.val('');
            let field = $('#companyInfo');
            if (field.css('display') === 'none') {
                field.css('display', 'inline');
                companyInputField.css('border-color', '#ff0000');
            } else {
                field.css('display', 'none');
                companyInputField.css('border-color', '');
            }
        });

        // validate before submit
        $('#submit').on('click', function (event) {
            event.preventDefault();
            let username = usernameField.val().match(usernamePattern);
            let password = passwordField.val().match(passwordPattern);
            let confirmPassword = confirmPasswordField.val().match(passwordPattern);
            let email = emailField.val().match(emailPattern);
            let isCompany = $('#company');
            let companyNumber = false;
            if (isCompany.prop('checked')) {
                companyNumber = Number(companyNumberField.val().match(/^\d+$/g));
                if (companyNumber) {
                    if (companyNumber >= 1000 && companyNumber <= 9999) {

                    } else {
                        companyNumber = undefined;
                    }
                }
            }

            usernameField.css('border-color', '');
            passwordField.css('border-color', '');
            confirmPasswordField.css('border-color', '');
            emailField.css('border-color', '');
            companyNumberField.css('border-color', '');
            $('#valid').css('display', '');


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
                    // usernameField.css('border', '');
                    usernameField.css('border-color', '#ff0000');
                }
                if (!password) {
                    // passwordField.css('border', '');
                    // confirmPasswordField.css('border', '');
                    passwordField.css('border-color', '#ff0000');
                    confirmPasswordField.css('border-color', '#ff0000');
                }
                if (!email) {
                    // emailField.css('border', '');
                    emailField.css('border-color', '#ff0000');
                }
                if (!companyNumber && isCompany.prop('checked')) {
                    companyNumberField.css('border-color', '#ff0000');
                }
            } else {
                $('#valid').css('display', '');
                usernameField.css('border-color', '');
                passwordField.css('border-color', '');
                confirmPasswordField.css('border-color', '');
                emailField.css('border-color', '');
                companyNumberField.css('border-color', '');
            }
        });
}
