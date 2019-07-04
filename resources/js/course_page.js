function save_message(messageText) {
    // Add a new message entry to the Firebase database.
    return firebase.firestore().collection('intro_java_chatroom').add({
        //TODO EDIT THIS
        sender_name: firebase.auth().currentUser.displayName,
        text: messageText,
        //profilePicUrl: getProfilePicUrl(),
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).catch(function (error) {
        console.error('Error writing new message to Firebase Database', error);
    });
}