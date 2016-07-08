/* Khushdial Singh - 300878370 */
(function () {
    var form = document.getElementById("form");
    form.addEventListener('submit', function () {
        event.preventDefault();
        console.log("Information entered:");
        var UserObject = {
            username : document.getElementById("username").value,
            password : document.getElementById("password").value
        }
        console.log("Username: " + UserObject.username);
        console.log("Password: " + UserObject.password);
    });
})();