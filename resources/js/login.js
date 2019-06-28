





//logout function
function logout() {
    auth.signOut().then(() => {
        console.log('user signed out');
    });
}