window.onload = function(){
    $.get("/navBar.html", function(data){
        $("#include").html(data);
    })
}


//logout function
function logout() {
    auth.signOut().then(() => {
        console.log('user signed out');
    });
}