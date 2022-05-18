const form  = document.getElementById('signin');
url = "http://localhost:8080/login"
form.addEventListener('submit', (event) => {
    event.preventDefault();
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange =  function (){
        if (xhttp.readyState == 4 && xhttp.status == 200){
            setCookie("token", xhttp.responseText, 1)
            window.location.href = '../../mainPage.html';
        }else if (xhttp.status == 403){
            console.log("Email ou senha incorreto!")
        }
        
    };
    var json = {
    
        "email" : username,
        "password": password
    }

    console.log(json)
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader('Accept', 'application/json');
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(json));
})

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}



// var xhr = new XMLHttpRequest();
//    xhr.open(method, url);
//    xhr.setRequestHeader('Authorization', 'Bearer ' + access_token);
//    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//    xhr.onload = requestComplete;
//    xhr.send(JSON.stringify(params));