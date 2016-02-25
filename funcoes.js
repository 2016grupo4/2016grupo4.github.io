function farea() { //esta função poderia estar no arquivo html, entre <script></script> 
b = document.getElementById("base").value; //lê o número na caixa "base", no arquivo html, e gravando em b 
b=Number(b); //para garantir que é número 
a = document.getElementById("altura").value; //lê o número na caixa "altura", no arquivo html, e gravando em a 
a=Number(a); //para garantir que é número 
area=b*a/2 
document.getElementById("darea").innerHTML = area; //mostrando a área em "darea", no html 
}