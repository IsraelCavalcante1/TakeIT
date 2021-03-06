// var imported = document.createElement('script');
// imported.src = 'C:\Users\leoru\Documents\Estudos\Projeto take it\Telas\Javascript\main-page js\filter-main-page.js';
// document.head.appendChild(imported);


window.onload = function(){
        getTags();
     createBoard();

    
}



function createBoard(){
    var tags;
    var token = getCookie("token")
    var url ="http://localhost:8080/takeit/board/listarTodos";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            board= JSON.parse(xhttp.responseText) ;
            getBoard(board);
        }
    }
    
    
    xhttp.open("GET",url , false)
    xhttp.setRequestHeader('Accept', 'application/json');
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("Authorization", "Bearer " + token);
    xhttp.send();
   
    }



function getBoard(boards){
    var listSize = boards.length;
    for (var i = 0; i < listSize; i++){
        document.getElementById('board-content').innerHTML+= `
        <div class="board">
        <div class="head-board">
            <span>${boards[i].nome}</span>
            <i id="copy" class="fa-regular fa-copy" onclick="copyToClipboard('${boards[i].link}')"></i>
        </div>
        <div id = "link" class="link">${boards[i].link}</div>
        <div class="board-tags">
            <div class="board-config" id="board_${boards[i].id}">

            </div>
        </div>
    </div>
        `
        var prefix = "board_" + boards[i].id
        showTag(boards[i].tags, prefix, prefix, true);
    }
}


function copyToClipboard(link) {
    // navigator clipboard api needs a secure context (https)
    if (navigator.clipboard && window.isSecureContext) {
        // navigator clipboard api method'
        return navigator.clipboard.writeText(link);
    } else {
        // text area method
        let textArea = document.createElement("textarea");
        textArea.value = link;
        // make the textarea out of viewport
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        return new Promise((res, rej) => {
            // here the magic happens
            document.execCommand('copy') ? res() : rej();
            textArea.remove();
        });
    }
}

// --------------- CRIAR BOARD --------------


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
         "description" : description,
         "tags" : getTagsChecked()
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
 
 
 
 