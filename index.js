var leonardo = window.document.getElementById("leonardo")
var samatha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setadir = window.document.getElementById("setadir")
var setaesq = window.document.getElementById("setaesq")

function rolarDir() {
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    setadir.style = "display:none"
    setaesq.style = "display:flex; margin-top: 55px"
}

function rolarEsq() {
    leonardo.style = "display:flex"
    bruna.style = "display:none"
    setadir.style = "display:flex; margin-top: 55px"
    setaesq.style = "display:none"
}

