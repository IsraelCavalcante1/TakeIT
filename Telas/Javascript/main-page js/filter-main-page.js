
function getTags(){
    return [
        {
            "id": 1,
            "name": "Produção",
            "color": "#DD5E5E"
        },
        {
            "id": 2,
            "name": "Dev",
            "color": "#DD5E5E"
        },
        {
            "id": 3,
            "name": "Wiki Projetinho",
            "color": "#DD5E5E"
        },
        {
            "id": 4,
            "name": "Wiki Java",
            "color": "#DD5E5E"
        },
        {
            "id": 5,
            "name": "Wiki Front End",
            "color": "#DD5E5E"
        }
    ]
}



 function showTag(tags, prefixId, idDiv, showClose){
 var listSize = tags.length;
 for (var i = 0; i<listSize; i++){
    document.getElementById(idDiv).innerHTML += `
    <div class="tag" id="tag_${tags[i].id}_${prefixId}">
    <span>${tags[i].name} ${showClose ? '<i class="fa-regular fa-circle-xmark"></i>' : ''}</span>
</div>
    `;
    document.getElementById("tag_" + tags[i].id  + "_" + prefixId).style.backgroundColor = tags[i].color;
 }
}