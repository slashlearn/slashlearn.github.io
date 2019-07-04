var this_user = null;
var profile_picture_url;

auth.onAuthStateChanged(user => {
    //load user info if the user is logged in
    if (user) {
        this_user = user;
        load_user_info(user);
    }
});


//load the account information of the user called on page load
function load_user_info(current_user) {
    database.collection('users').doc(current_user.uid).get().then(doc => {
        var profile_pic_id = document.getElementById("profile_picture_display");
        var first_name_id = document.getElementById("first_name_display");
        var last_name_id = document.getElementById("last_name_display");
        var email_id = document.getElementById("email_display");
        var bio_id = document.getElementById("bio_display");
        
        var profile_picture_url = auth.currentUser.photoURL;

        profile_pic_id.innerHTML = `<img id="profile_pic_img" src="${profile_picture_url}" alt="Profile Picture"></img>`;
        first_name_id.innerHTML = doc.data().first_name;
        last_name_id.innerHTML = doc.data().last_name;
        email_id.innerHTML = current_user.email;
        bio_id.innerHTML = doc.data().bio;

    });
}


//called if the edit button for profile picture is pressed
function edit_profile_picture() {
    var profile_picture_body_id = document.getElementById("profile_picture_body");
    var profile_imgtag = document.getElementById("profile_picture_display").innerHTML;
    html = `
    <button class="cancel_btn" onclick="cancel_edit()">Cancel</button>
    <button class="edit_account_info_btn" onclick="save_profile_pic()">Save</button>
    <br>
    <form id="edit_profile_picture_form">
      <div class="form-group">
        <label for="account_profile_picture" id="profile_picture_label">Choose a Profile Picture</label>
        <input type="file" accept="image/*" class="form-control-file" id="account_profile_picture" onchange="display_file_name()">
        <div id="file_name_display">
        </div>
      </div>
    </form>
    <div id="profile_picture_display">
      ${profile_imgtag}
    </div>
    `
    profile_picture_body_id.innerHTML = html;
}


//called if the edit button for the personal info is pressed
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
        <!--<input type="text" class="form-control" id="bio" value="${bio}">-->
        <textarea class="form-control" id="bio" rows="3">${bio}</textarea>
      </div>
    </form>
    `
    personal_info_body_id.innerHTML = html;
}


//manually diplay the name because we cover it up to style the choose file button
function display_file_name() {
    var file_name_display_id = document.getElementById("file_name_display");
    file_name_display_id.innerHTML = document.getElementById("account_profile_picture").files[0].name;
}


//called when save for profile picture section is called
function save_profile_pic() {
    //file reference
    var file = document.getElementById("account_profile_picture").files[0];
    var file_reference = firebase.storage().ref('/' + this_user.uid + '/profile_picture');
    var uploadTask = file_reference.put(file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', function (snapshot) {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
                console.log('Upload is paused');
                break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
                console.log('Upload is running');
                break;
        }
    }, function (error) {
        window.location.replace("account.html");
    }, function () {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            this_user.updateProfile({
                photoURL: downloadURL
              }).then(function() {
                window.location.replace("account.html");
              }).catch(function(error) {
                // An error happened.
              });
        });

    });
}


//called when save for personal info section is called
function save_info() {
    const edit_personal_info_form = document.querySelector('#edit_personal_info_form');
    database.collection('users').doc(this_user.uid).update({
        first_name: edit_personal_info_form['first_name'].value,
        last_name: edit_personal_info_form['last_name'].value,
        bio: edit_personal_info_form['bio'].value,
    }).then(() => {
        return this_user.updateProfile({
            displayName: edit_personal_info_form['first_name'].value + " " + edit_personal_info_form['last_name'].value
        });
    }).then(() => {
        window.location.replace("account.html");
    });
}


//anytime the editing is called
function cancel_edit() {
    window.location.replace("account.html");
}