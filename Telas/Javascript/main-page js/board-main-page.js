// var imported = document.createElement('script');
// imported.src = 'C:\Users\leoru\Documents\Estudos\Projeto take it\Telas\Javascript\main-page js\filter-main-page.js';
// document.head.appendChild(imported);


window.onload = function(){
    getTags();
    
    showBoard(getBoard())
    
}

function getBoard(){
    return [
        {
            "id": 1,
            "name": "Luizinho Dev",
            "description": "link rabbit",
            "link": "google.com",
            "tags": [
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
        },
         {
            "id": 2,
            "name": "Dev Dev",
            "description": "link rabbit",
            "link": "goog1le.com",
            "tags": [
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
        },
         {
            "id": 3,
            "name": "BackEnd Dev",
            "description": "link rabbit",
            "link": "3.com",
            "tags": [
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
        },
        {
            "id": 9,
            "name": "Front-End",
            "description": "link rabbit",
            "link": "goog1le.com",
            "tags": [
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

    ]
}


function showBoard(boards){
    var listSize = boards.length;
    for (var i = 0; i < listSize; i++){
        document.getElementById('board-content').innerHTML+= `
        <div class="board">
        <div class="head-board">
            <span>${boards[i].name}</span>
            <i id="copy" class="fa-regular fa-copy" onclick="copyToClipboard('google.com')"></i>
        </div>
        <div id = "link" class="link">google.com</div>
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

