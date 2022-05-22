

var teste = document.getElementById('id-listar-todos')

function getTags(){
    var tags;
    var token = getCookie("token")
    var url ="http://localhost:8080/takeit/tag/listarTag";
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

    function selectedTag(id){
        if (id != undefined){
        
            id.classList.toggle('selected-tag')
        }

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

function getTagsChecked(){
    var tagList = document.getElementById("tag-add-board").childNodes;
    var tagChecked = [];
    tagList.forEach(function(el)  {
        var id = el.id;

        if (id != undefined && id.includes('checkbox') && el.checked){
            var json = {
                "id": id.split("_")[2]
            }
            tagChecked.push(json);
        }
        
    })
    return tagChecked;
} 

function excluirTag(id){
    var token = getCookie("token")
    var dataId = new FormData();
    dataId.append('id', id)
    url = "http://localhost:8080/takeit/tag/excluir"
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (xhttp.status == 200 && xhttp.readyState == 4){
            alert("tag excluida")
        }
    }
    xhttp.open("DELETE", url, true)
    xhttp.setRequestHeader("Authorization", "Bearer " + token);
    xhttp.send(dataId)

}


 function showTag(tags, prefixId, idDiv, showClose){
 var listSize = tags.length;
 for (var i = 0; i<listSize; i++){

    document.getElementById(idDiv).innerHTML += `
    <label onclick="selectedTag(tag_${tags[i].id}_${prefixId})" for = "checkbox_tag_${tags[i].id}_${prefixId}" class="tag" id="tag_${tags[i].id}_${prefixId}">
    <span>${tags[i].nome} ${showClose ? `<i onclick="excluirTag(${tags[i].id})" id="excluir-tag" class="fa-regular fa-circle-xmark"></i>` : ''}</span>
</label>
<input class = "checkbox_hide"type="checkbox" id="checkbox_tag_${tags[i].id}_${prefixId}" name="checkbox-tag_${tags[i].id}_${prefixId}" value="marcado"> `;
    document.getElementById("tag_" + tags[i].id  + "_" + prefixId).style.backgroundColor = tags[i].color;
 }


}

