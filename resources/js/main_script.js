window.onload = function(){
    $.get("/navBar.html", function(data){
        $("#include").html(data);
    })
}

