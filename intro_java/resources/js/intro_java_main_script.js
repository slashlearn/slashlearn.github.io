window.onload = function () {
    $.get("/navBar.html", function (data) {
        $("#include").html(data);
    })
    $.get("/intro_java/sidebar.html", function (data) {
        $("#sidebar_injection").html(data);
    })
}

function send_message() {
    const message_form = document.querySelector('#intro_java_message_input_form');
    message = message_form['intro_java_chatroom_message_input'].value;

    //upload to firebase (function from course_page.js)
    if (message != "") {
        save_message(message, 'intro_java_chatroom');
    }
}

// Loads chat messages history and listens for upcoming ones.
function intro_java_load_messages() {
    // Create the query to load the last 12 messages and listen for new ones.
    var query = firebase.firestore().collection('intro_java_chatroom').orderBy('timestamp', 'desc').limit(12);
    var intro_java_chatroom_messages_containerID = document.getElementById("intro_java_chatroom_messages_container");
    intro_java_chatroom_messages_containerID.innerHTML = "";
    var chatqueue = new Map();
    query.onSnapshot(function (snapshot) {
        snapshot.docChanges().forEach(function (change) {
            var message = change.doc.data();
            console.log(message.text);
            //if (!chatqueue.has(change.doc.id)) {
                var html = convert_message(message.sender_name, message.profile_pic_url, message.text, message.timestamp);
                chatqueue.set(change.doc.id, html);
            //}
            if (chatqueue.size > 13) {
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
        intro_java_chatroom_messages_containerID.innerHTML = final_html;

    });
}   
var initial_load_size = 0;
var initial_load = true;

intro_java_load_messages();


