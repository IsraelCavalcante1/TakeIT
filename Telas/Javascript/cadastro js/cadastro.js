const form  = document.getElementById('signup');
url = "http://localhost:8080/takeit/usuario/criar"
form.addEventListener('submit', (event) => {
    event.preventDefault();
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log(username, password)
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange =  function (){
        if (xhttp.readyState == 4 && xhttp.status == 200){
            alert("Conta criada")
        }
        
        
    };
    var json = {
        "login" : username,
        "password": password
    }

    console.log(json)
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader('Accept', 'application/json')
    xhttp.setRequestHeader("Content-type", "application/json")
    xhttp.send(JSON.stringify(json));
})

// function setCookie(name,value,days) {
//     var expires = "";
//     if (days) {
//         var date = new Date();
//         date.setTime(date.getTime() + (days*24*60*60*1000));
//         expires = "; expires=" + date.toUTCString();
//     }
//     document.cookie = name + "=" + (value || "")  + expires + "; path=/";
// }

// function getCookie(name) {
//     var nameEQ = name + "=";
//     var ca = document.cookie.split(';');
//     for(var i=0;i < ca.length;i++) {
//         var c = ca[i];
//         while (c.charAt(0)==' ') c = c.substring(1,c.length);
//         if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
//     }
//     return null;
// }