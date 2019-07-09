window.onload = function () {
    document.body.style.overflowX = "hidden";
    $.get("/navBar.html", function (data) {
        $("#include").html(data);
    });
    $.get("/data_structures/sidebar.html", function (data) {
        $("#sidebar_injection").html(data);
    });
}

//TODO-decide if it is a better user experience to have the user
//be able to hit enter in a chat window.
/*
//listen for an enter key being hit in the send message section
var input = document.getElementById("data_structures_chatroom_message_input");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("data_structures_send_messagebtn").click();
  }
});
*/



function send_message() {
    const message_form = document.querySelector('#data_structures_message_input_form');
    message = message_form['data_structures_chatroom_message_input'].value;
    if (!auth.currentUser) {
        message_error("You must be signed in to send a message");
    } else if (message == "") {
        message_error("Empty Message");
    }
    //upload to firebase (function from course_page.js)
    if (message != "") {
        save_message(message, 'data_structures_chatroom');
        message_form['data_structures_chatroom_message_input'].value = "";
    } 
}

// Loads chat messages history and listens for upcoming ones.
function data_structures_load_messages() {
    // Create the query to load the last 12 messages and listen for new ones.
    if (load_boolean) {
        var query = firebase.firestore().collection('data_structures_chatroom').orderBy('timestamp', 'desc').limit(12);
        var data_structures_chatroom_messages_containerID = document.getElementById("data_structures_chatroom_messages_container");
        data_structures_chatroom_messages_containerID.innerHTML = "";
        var chatqueue = new Map();
        query.onSnapshot(function (snapshot) {
            snapshot.docChanges().forEach(function (change) {
                var message = change.doc.data();
                var html = convert_message(message.sender_name, message.profile_pic_url, message.text, message.timestamp);
                chatqueue.set(change.doc.id, html);

                if (chatqueue.size > 12) {
                    var i = 1;
                    for (const k of chatqueue.keys()) {
                        if (i == initial_load_size) {
                            chatqueue.delete(k);
                            initial_load_size--;
                            break;
                        }
                        i++;
                    }
                }
            });

            if (initial_load) {
                initial_load = false;
                initial_load_size = chatqueue.size;
            }

            var final_html = "";
            var i = 1;
            for (const v of chatqueue.values()) {
                if (i <= initial_load_size) {
                    final_html = v + final_html;
                } else {
                    final_html += v;
                }
                i++;
            }
            data_structures_chatroom_messages_containerID.innerHTML = final_html;

        });
    }
    load_boolean = false;
}
var initial_load_size = 0;
var initial_load = true;
var load_boolean = true;