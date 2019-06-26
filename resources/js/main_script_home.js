window.onload = function(){
    $.get("/navBar_home.html", function(data){
        $("#include").html(data);
    })
}

