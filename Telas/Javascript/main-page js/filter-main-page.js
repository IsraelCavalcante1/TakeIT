

var teste = document.getElementById('id-listar-todos')

function getTags(){
    var tags;
    var token = getCookie("token")
    var url ="http://localhost:8080/takeit/tag/listarTodas";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            tags= JSON.parse(xhttp.responseText) ;
            showTag(tags, "filter_", "tag-list", true);
            showTag(tags, "add_tag_", "tag-add-board",false)
        }
    }
    
    xhttp.open("GET",url , false)
    xhttp.setRequestHeader('Accept', 'application/json');
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("Authorization", "Bearer " + token);
    xhttp.send();
   
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










 function showTag(tags, prefixId, idDiv, showClose){
 var listSize = tags.length;
 for (var i = 0; i<listSize; i++){
    document.getElementById(idDiv).innerHTML += `
    <div class="tag" id="tag_${tags[i].id}_${prefixId}">
    <span>${tags[i].nome} ${showClose ? '<i id="excluir-tag" class="fa-regular fa-circle-xmark"></i>' : ''}</span>
</div>
    `;
    document.getElementById("tag_" + tags[i].id  + "_" + prefixId).style.backgroundColor = tags[i].color;
 }
}

