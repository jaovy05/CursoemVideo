var valores = [];
function adicionar() {
  let num = document.getElementById("num");
  let n = Number(num.value)
  var tabela = document.getElementById("tabela");
  if(num.value.length === 0 || n < 1 || n > 100 || duplicada(valores, n)) alert("digite um número entre 1 e 100 e que não esteja na lista");
  else{
    if(valores.length === 0)  tabela.innerHTML = "";
    valores.push(n);
    let opcao = document.createElement("option");
    opcao.value = n;
    opcao.textContent = `Valor ${n} adiconado`;
    tabela.appendChild(opcao);
  }
  num.value = "";
}

function finalizar(){
  if(valores.length === 0){
    alert("[ERRO] Insira valores primeiro");
  } else {
    let res = document.getElementById("res");
    res.innerHTML = "";
    tabela.innerHTML = "";
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
    valores = [];
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

function duplicada (v, n){
  for(let i = 0; i < v.length; i++)
    if(n === v[i]) return true;
  return false;
}