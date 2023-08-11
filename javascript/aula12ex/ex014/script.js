function carregar() {
    var msg = document.getElementById("msg");
    var img = document.getElementById("imagem");
    var agora = new Date();
    var hora = agora.getHours();
    hora = 15
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora < 6){
        img.src = "madrugada.png"
        document.body.style.backgroundColor = "#214469"
    }   else if(hora < 12){
        img.src = "manha.png"
        document.body.style.backgroundColor = "#fa8e15"
    }   else if(hora < 18){
        img.src = "tarde.png"
        document.body.style.background = "#efa782"
    }   else{
        img.src = "noite.png"
        document.body.style.background = "#4f3d60"
    }
}