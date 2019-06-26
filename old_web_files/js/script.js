window.onload = function(){
    $.get("/navBar.html", function(data){
        $("#include").html(data);
    })
    $.get("/introJava/sideBar.html", function(data){
        $("#includeSideBar").html(data);
    })
}

