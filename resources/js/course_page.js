//loads the chat section for when the chatroom tab it pressed
function load_chatroom() {
    course_material_ID.style.display = "none";
    qanda_ID.style.display = "none"
    chatroom_ID.style.display = "block";
    document.body.style.overflowY = "hidden";
}

function load_course_material() {
    chatroom_ID.style.display = "none";
    qanda_ID.style.display = "none";
    course_material_ID.style.display = "block";
    document.body.style.overflowY = "scroll";
}

function load_qanda() {
    chatroom_ID.style.display = "none";
    course_material_ID.style.display = "none";
    qanda_ID.style.display = "block";
    document.body.style.overflowY = "scroll";
}


function save_message(messageText, chatroom) {
    var date = new Date();
    // Add a new message entry to the Firebase database.
    return firebase.firestore().collection(chatroom).add({
        sender_name: auth.currentUser.displayName,
        text: messageText,
        profile_pic_url: auth.currentUser.photoURL,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).catch(function (error) {
        console.error('Error writing new message to Firebase Database', error);
    });
}

function message_error(message) {
    var chatroom_error_ID = document.getElementsByClassName("chatroom_error")[0];
    chatroom_error_ID.innerHTML = `<h5>${message}</h5>`;
}

function convert_message(sender_name, profile_pic_url, text, timestamp) {
    //format firebase timestamp to 1-12 AM/PM
    timestamp = format_timestamp(timestamp);
    html = `
    <div class="message_display">
      <img src=${profile_pic_url}>
        <div class="message_display_text">
          <p><strong>${sender_name}</strong><span class="time-right"> | ${timestamp}</span><br>${text}</p>
        </div>
    </div>
    `
    return html;
}

function format_timestamp(timestamp_in) {
    var date = timestamp_in.toDate(); 
    var date_str = date.toString();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    date_str = date_str.split(" ");
    //date[1] = month, date[2] = day 
    var strTime = date_str[1] + " " + date_str[2] + " " + hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

var chatroom_ID = document.getElementsByClassName("chatroom_container")[0];
var course_material_ID = document.getElementsByClassName("course_material")[0];
var qanda_ID = document.getElementsByClassName("qanda")[0];
