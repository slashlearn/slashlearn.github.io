//sign up 
const signup_form = document.querySelector('#signup_form');
signup_form.addEventListener('submit', (e) => {
    e.preventDefault();
    var email = signup_form['signup_email'].value;
    var pass = signup_form['signup_pass'].value;
    var confirm_pass = signup_form['signup_confirmpass'].value;
    var first = signup_form['first_name'].value;
    var last = signup_form['last_name'].value;

    //if the pass match the create account
    if (String(first) == "" || String(last) == "") {
        signup_error("Please fill out First and Last Name");
    } else if (String(pass) == String(confirm_pass)) {
        auth.createUserWithEmailAndPassword(email, pass).then(cred => {
            //add first,last, and bio to user info
            return database.collection('users').doc(cred.user.uid).set({
                first_name: signup_form['first_name'].value,
                last_name: signup_form['last_name'].value,
                bio: ""
            });
        }).then(() => {
            //then reset the form and redirect to courses
            document.getElementById("error_box").innerHTML = "";
            signup_form.reset();
            window.location.replace("courses.html");
        }).catch(function(error) {
            //any errors are displayed to signup box
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
