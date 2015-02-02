var password1 = document.getElementById('password1');
var password2 = document.getElementById('password2');

var checkPasswordValidity = function() {
    if (password1.value != password2.value) {
        password1.setCustomValidity('Passwords must match.');
    } else {
        password1.setCustomValidity('');
    }        
};

password1.addEventListener('change', checkPasswordValidity, false);
password2.addEventListener('change', checkPasswordValidity, false);



/* SAFARI FORM VALIDATION */

var forms = document.getElementsByTagName('form');
for (var i = 0; i < forms.length; i++) {
    forms[i].noValidate = true;

    forms[i].addEventListener('submit', function(event) {
        //Prevent submission if checkValidity on the form returns false.
        if (!event.target.checkValidity()) {
            event.preventDefault();
            //Implement you own means of displaying error messages to the user here.
        }
    }, false);
}



/* FORM VALIDATION AFTER INTERACTION */

var inputs = document.querySelectorAll('input[type=text]');
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('blur', function(event) {
        event.target.classList.add('interacted');
    }, false);
}