function contador(){
    var inicio = document.getElementById("inicio").value;
    var fim = document.getElementById("fim").value;
    var passo = Number(document.getElementById("passo").value);
    var res = document.getElementById("res");
    if(inicio === "") res.innerHTML = "Digite o inicio";
    else if(fim === "") res.innerHTML = "Digite o fim";
    else {
        if(passo == 0) alert("Considerando o passo como 1");
        fim = Number(fim);
        res.innerHTML = `Contando: <br>`
        for(inicio = Number(inicio); inicio <= fim; inicio += passo){
            res.innerHTML += inicio;
            if(inicio + passo <= fim)
                res.innerHTML +=  "&#128073;";
        }
        res.innerHTML += `&#127937;`;
    }
}