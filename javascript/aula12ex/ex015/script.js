function calcular(){
    var data = new Date();
    var ano = data.getFullYear();
    var anoNasc = Number(document.querySelector("input#txtano").value);
    var res = document.querySelector("div#res");
    if(anoNasc == 0 || anoNasc > ano)
        res.innerHTML = "[ERRO] Ano inválido";
    else{
        var rsex = document.getElementsByName("radsex");
        var idade = ano - anoNasc;
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id','imagem');
        if(rsex[0].checked){
            genero = "um homem";
            if(idade < 8)
                img.setAttribute("src","bebehomem.png");
            else if(idade < 14)
                img.setAttribute("src","criancahomem.png");
            else if(idade < 20)
                img.setAttribute("src","adolescentehomem.png");
            else if(idade < 50)
                img.setAttribute("src","adultohomem.png");
            else
                img.setAttribute("src", "idosohomem.png")
        } else {
            genero = "uma mulher";
            if(idade < 8)
                img.setAttribute("src", "bebemulher.png")
            else if(idade < 14)
                img.setAttribute("src", "criancamulher.png")
            else if(idade < 20)
                img.setAttribute("src", "adolescentemulher.png")
            else if(idade < 50)
                img.setAttribute("src", "adultomulher.png")
            else
                img.setAttribute("src", "idosamulher.png")
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} de ${idade} anos`;
        res.appendChild(img)
    }
}