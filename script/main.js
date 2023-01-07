function signup(e){
    event.preventDefault();
    console.log('working');

    var email = document.getElementById('email').value;
    var firstname = document.getElementById('fname').value;
    var lastname = document.getElementById('lname').value;
    var pass = document.getElementById('password').value;

    var user = {
        email:email,
        firstname:firstname,
        lastname:lastname,
        password:pass
    }

    var json = JSON.stringify(user);
    localStorage.setItem(email,json);
    console.log('user added')
}


// function loginFunction() {
//     var email = document.forms["loginForm"]["email"].value;
//     var password = document.forms["loginForm"]["password"].value;
//     if (email == "admin@gmail" && password == "123456") {
//         window.location.href="home.html";
//     } 
//     else {
//         alert("Invalid credentials")
//     }
// }


function loginFunction(e) {
    event.preventDefault();

    console.log('i was called');
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;

    var user = localStorage.getItem(email); //fetching actual username which does exist from the localstorage
    var data = JSON.parse(user)


    if(email == data.email && pass == data.password) {
        window.location.href = "home.html";
        document.getElementById('welcome-name').innerHTML = "New text!";
        console.log('success fully logged in');
    } 

    else {
        alert("Invalid credentials")
    }
}