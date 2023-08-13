function tabuar() {
    var num = document.getElementById("num").value;
    var tabela = document.getElementById("tabela");
    
    if (num === "") {
        alert("Por favor, digite um número.");
    } else {
        num = Number(num);
        tabela.innerHTML = ""; // Limpa o conteúdo anterior da tabela
        
        for (var i = 1; i <= 10; i++) {
            var opcao = document.createElement("option"); 
            opcao.value = i;
            opcao.textContent = `${num} * ${i} = ${num * i}`;
            tabela.appendChild(opcao);
    }
}
}