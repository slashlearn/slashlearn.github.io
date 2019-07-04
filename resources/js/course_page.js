function save_message(messageText, chatroom) {
    var date = new Date();
    // Add a new message entry to the Firebase database.
    return firebase.firestore().collection(chatroom).add({
        //TODO EDIT THIS
        sender_name: auth.currentUser.displayName,
        text: messageText,
        profile_pic_url: auth.currentUser.photoURL,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).catch(function (error) {
        console.error('Error writing new message to Firebase Database', error);
    });
}

function convert_message(sender_name, profile_pic_url, text, timestamp) {
    console.log("timestamp:" + timestamp);
    html = `
    <div class="message_display">
       <img src=${profile_pic_url}>
              <div class="message_display_text">
                <p><strong>${sender_name}</strong><span class="time-right">${timestamp}</span><br>${text}</p>
              </div>
            </div>
    `
    return html;
}
