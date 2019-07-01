window.onload = function(){
    $.get("/navBar.html", function(data){
        $("#include").html(data);
    })
    $.get("/intro_java/sidebar.html", function(data){
        $("#sidebar_injection").html(data);
    })
}
