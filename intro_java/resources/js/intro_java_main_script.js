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
    
    //upload to firebase (function from course_page.js)
    save_message(message_form['intro_java_chatroom_message_input'].value);
}
