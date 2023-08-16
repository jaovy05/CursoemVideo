var valores = [];
function adicionar() {
  let num = document.getElementById("num").value;
  let tabela = document.getElementById("tabela");
  if(num.length === 0 || Number(num) < 1 || Number(num) > 100) alert("digite um número entre 1 e 100");
  else{
    num = Number(num)
    valores.push(num);
    let opcao = document.createElement("option");
    opcao.value = num;
    opcao.textContent = `Valor ${num} adiconado`;
    tabela.appendChild(opcao);
  }
}

function finalizar(){
  if(valores.length === 0){
    alert("[ERRO] Insira valores primeiro");
  } else {
    let res = document.getElementById("res");
    res.innerHTML = "";
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    let p5 = document.createElement("p");
    p1.textContent = `No total temos ${valores.length} elementos.`;
    p2.textContent = `O maior valor informado foi ${maior(valores)}.`;
    p3.textContent = `O menor valor infarmado foi ${menor(valores)}.`;
    p4.textContent = `Somando os valores temos ${soma(valores)}.`;
    p5.textContent = `A média deles é ${media(valores).toFixed(2)}.`;
    res.appendChild(p1);
    res.appendChild(p2);
    res.appendChild(p3);
    res.appendChild(p4);
    res.appendChild(p5);
    
  }
}

function maior(n){
  let mai = n[0];
  for(let i = 1; i < n.length; i++)
    if(n[i] > mai) mai = n[i];
  return mai;
}

function menor(n){
  let men = n[0];
  for(let i = 1; i < n.length; i++)
    if(n[i] < men) men = n[i];
  return men;
}

function soma(n){
  let som = n[0]
  for(let i = 1; i < n.length; i++)
    som += n[i];
  return som;
}

function media(n){
  return soma(n)/n.length
}