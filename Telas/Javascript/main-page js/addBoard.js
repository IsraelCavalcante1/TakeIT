function addBoard(){
   url = "http://localhost:8080/takeit/board/criar"

   var token = getCookie("token")

   var titulo = document.getElementById('titulo').value;
   var link = document.getElementById('link').value;
   var description = document.getElementById('description').value;
   
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (){

    }
    var json = {
        "nome" : titulo,
        "link" : link,
        "description" : description
    }

    xhttp.open("POST", url, true) 
    xhttp.setRequestHeader('Accept', 'application/json');
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("Authorization", "Bearer " + token);
    xhttp.send(JSON.stringify(json))
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



