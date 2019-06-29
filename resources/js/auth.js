//sign up 
const signup_form = document.querySelector('#signup_form');
signup_form.addEventListener('submit', (e) => {
    e.preventDefault();
    var email = signup_form['signup_email'].value;
    var pass = signup_form['signup_pass'].value;
    var confirm_pass = signup_form['signup_confirmpass'].value;

    //if the pass match the create account
    if (String(pass) == String(confirm_pass)) {
        auth.createUserWithEmailAndPassword(email, pass).then(cred => {
            document.getElementById("error_box").innerHTML = "";
            signup_form.reset();

            //redirect to courses
            window.location.replace("courses.html");
        }).catch(function(error) {
            //var errorCode = error.code;
            var errorMessage = error.message;
            signup_error(errorMessage);
        });
    } else {
        signup_error("Passwords Do Not Match!");
    }
});

//helper message for displaying sign up errors
function signup_error(error_message) {
    var error_box = document.getElementById("error_box");
    error_box.innerHTML = error_message;
}
