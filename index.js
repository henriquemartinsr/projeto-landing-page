var leo = window.document.getElementById("leo")
var sam = window.document.getElementById("sam")
var bru = window.document.getElementById("bru")
var back = window.document.getElementById("back")
var next = window.document.getElementById("next")


function rolarDireita(){
    leo.style = "display:none"
    bru.style = "display:flex"
    next.style = "display:none"
    back.style = "display:flex"
}

function rolarEsquerda(){
    bru.style = "display:none"
    leo.style = "display:flex"
    back.style = "display:none"
    next.style = "display:flex"
}