const salvar  = document.getElementById('salvarTag');
url = "http://localhost:8080/takeit/tag/criar"
function salvarTag(){

   var token = getCookie("token")

    var nomeTag = document.getElementById("nome-tag").value;
    var corTag = document.getElementById("cor-tag").value;
    alert("color" + corTag + "nome" + nomeTag)
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        // if (xhttp.readyState == 4 && xhttp.status == 200){

        // }
}
var json = {
    
    "nome" : nomeTag,
    "color": corTag
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

