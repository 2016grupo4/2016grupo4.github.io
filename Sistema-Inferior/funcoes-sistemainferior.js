function gerar(){
	n=document.getElementById("ordem").value; //lê n
	n=Number(n); //para definir que n é número, não texto
	col=n+1; //número de colunas, porque a última coluna são os valores após a igualdade
	//abaixo, html dentro do javascript, para criar a tabela dinamicamente (nxn)
	html=""; 
    html+='<table border>';
	for (i=1;i<=n;i++){
	html+='<tr>';
	for(j=1;j<=n;j++){
	ntermo=i+','+j;
    conteudo='<input type="number" id='+ntermo+' value="0"/>';
	html+='<td>'+conteudo+'</td>';
	}
	ntermo=i+','+col;
    conteudo='<input type="number" style="background-color: #C0C0C0" id='+ntermo+' value="0"/>';
	html+='<td>'+conteudo+'</td>';
	html+='</tr>';
	}
    html+='</table>';
	document.getElementById('tabela').innerHTML=html;
	}
				
function calcular(){
	n=document.getElementById("ordem").value;
	n=Number(n); 

	//ler os termos aij
	a=[]; //criar o vetor
	for (i=1;i<=n;i++){
	for(j=1;j<=n;j++){
		ntermo=i+','+j;
		a[ntermo]=document.getElementById(""+ntermo+"").value;
		a[ntermo]=Number(a[ntermo]);
	}
	}
		
	//ler os termos bi
	col=n+1;
	b=[]; //criar o vetor
	for (i=1;i<=n;i++){
		ntermo=i+','+col;
		b[i]=document.getElementById(""+ntermo+"").value;
		b[i]=Number(b[i]);
	}
	
	sistemainferior(n,b,a); //chama a função que calcula o sistema triangular superior
	
	//imprimir os resultados xi
	res='';
   	for (i=1;i<=n;i++){
		res=res+'\r\nx'+i+'\r\n='+x[i]+'<br>'
	}
	document.getElementById('resultado').innerHTML = res;
	
	}
	
function sistemainferior(n,b,a){ 	//AQUI ENTRA O ALGORITMO DOS ALUNOS

//entra n, b e a. Sai x.

	x=[]; //criar o vetor
	for (i=1;i<=n;i++){
		soma=0;
		for (j=1;j<=i-1;j++){
		soma=soma+a[i+','+j]*x[j];
		}
		x[i]=(b[i]-soma)/a[i+','+i]; //sai x[i], o vetor solução
	}

}	
	