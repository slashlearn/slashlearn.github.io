var this_user = null;

auth.onAuthStateChanged(user => {
    //load user info if the user is logged in
    if (user) {
        this_user = user;
        load_user_info(user);
    }
});

function load_user_info(current_user) {
    database.collection('users').doc(current_user.uid).get().then(doc => {
        var first_name_id = document.getElementById("first_name_display");
        var last_name_id = document.getElementById("last_name_display");
        var email_id = document.getElementById("email_display");
        var bio_id = document.getElementById("bio_display");

        first_name_id.innerHTML = doc.data().first_name;
        last_name_id.innerHTML = doc.data().last_name;
        email_id.innerHTML = current_user.email;
        bio_id.innerHTML = doc.data().bio;
    });
}

function edit_personal_info() {
    var personal_info_body_id = document.getElementById("personal_info_body");
    var first_name = document.getElementById("first_name_display").innerHTML;
    var last_name = document.getElementById("last_name_display").innerHTML;
    var bio = document.getElementById("bio_display").innerHTML;
    html = `
    <button class="cancel_btn" onclick="cancel_edit()">Cancel</button>
    <button class="edit_account_info_btn" onclick="save_info()">Save</button>
    <br>
    <form id="edit_personal_info_form">
      <div class="form-group">
        <label for="first_name">First Name:</label>
        <input type="text" class="form-control" id="first_name" value="${first_name}">
      </div>
      <div class="form-group">
        <label for="last_name">Last Name:</label>
        <input type="text" class="form-control" id="last_name" value="${last_name}">
      </div>
      <div class="form-group">
        <label for="bio">Bio:</label>
        <input type="text" class="form-control" id="bio" value="${bio}">
      </div>
    </form>
    `
    personal_info_body_id.innerHTML = html;
}

function save_info() {
    const edit_personal_info_form = document.querySelector('#edit_personal_info_form');
    database.collection('users').doc(this_user.uid).set({
        first_name: edit_personal_info_form['first_name'].value,
        last_name: edit_personal_info_form['last_name'].value,
        bio: edit_personal_info_form['bio'].value
    }).then(() => {
        window.location.replace("account.html");
    });
}

function cancel_edit() {
    window.location.replace("account.html");
}
