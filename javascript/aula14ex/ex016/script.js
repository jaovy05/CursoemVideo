function contador(){
    var inicio = document.getElementById("inicio").value;
    var fim = document.getElementById("fim").value;
    var passo = Number(document.getElementById("passo").value);
    var res = document.getElementById("res");
    if(inicio.length == 0 ||  fim.length == 0) alert("Faltam dados");
    else {
        if(passo == 0) {
            alert("Considerando o passo como 1");
            passo = 1}
        fim = Number(fim);
        res.innerHTML = `Contando: <br>`
        if(passo < 0)  passo*= -1;
        if(inicio < fim){
            for(inicio = Number(inicio); inicio <= fim; inicio += passo){
                res.innerHTML += inicio;
                if(inicio + passo <= fim)
                    res.innerHTML +=  "&#128073;";
            }} else {
            for(inicio = Number(inicio); inicio >= fim; inicio -= passo){
                res.innerHTML += inicio;
                if(inicio - passo >= fim)
                    res.innerHTML +=  "&#128073;";
            }}
         res.innerHTML += `&#127937;`;
    }
}
