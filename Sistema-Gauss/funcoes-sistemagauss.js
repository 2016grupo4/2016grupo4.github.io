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
	
	sistemagauss(n,b,a); //chama a função que calcula o sistema por eliminação de gauss
	// impressão da tabela escalonada
	html=""; 
    html+='<table border>';
	for (i=1;i<=n;i++){
	html+='<tr>';
	for(j=1;j<=n;j++){
    conteudo='<input type="number" id=t value="'+a[i+','+j]+'"/>';
	html+='<td>'+conteudo+'</td>';
	}
	    conteudo='<input type="number" style="background-color: #C0C0C0" id=t value="'+b[i]+'"/>';
	html+='<td>'+conteudo+'</td>';
	html+='</tr>';
	}
    html+='</table>';
	document.getElementById('tabelaescalonada').innerHTML=html;
	
	
	
	//imprimir os resultados xi
	res='';
   	for (i=1;i<=n;i++){
		res=res+'\r\nx'+i+'\r\n='+x[i]+'<br>'
	}
	document.getElementById('resultado').innerHTML = res;
	
	}
	
function sistemasuperior(n,b,a){ 

//entra n, b e a (sistema triangular superior). Sai x.

	x=[]; //criar o vetor
	x[n]=b[n]/a[n+','+n];
	for (i=n-1;i>=1;i--){
		soma=0;
		for (j=i+1;j<=n;j++){
		soma=soma+a[i+','+j]*x[j];
		}
		x[i]=(b[i]-soma)/a[i+','+i]; //sai x[i], o vetor solução
	}

}	

function sistemagauss(n,b,a){ 	//AQUI ENTRA O ALGORITMO DOS ALUNOS

//entra n, b e a (sistema qualquer). Sai x pela rotina sistemasuperior.

	for (k=1;k<=n-1;k++){ //para cada coluna
         w=Math.abs(a[k+','+k]); //w é o pivô 
		 r=k; //r é o nº da linha que está o pivô
		 	for (j=k;j<=n;j++){ //para cada linha
				if (Math.abs(a[j+','+k])>w) { //encontra o maior pivô em módulo
                      w=Math.abs(a[j+','+k]);
		              r=j;
                    } 
			}

	if (w==0) {
        alert('Erro: Todos os pivôs são nulos.');
		return; //pára o programa
        } else { //troca linha k pela linha r (a linha r é a linha com o maior pivô)
	            for(c=1;c<=n;c++){ //coluna 1 a n+1 
		        atemp=a[k+','+c]; //variável temporária para a
				a[k+','+c]=a[r+','+c];
				a[r+','+c]=atemp;
	            }
				btemp=b[k]; //variável temporária para b
				b[k]=b[r];
				b[r]=btemp;
	}
 
		for (i=k+1;i<=n;i++){ //para cada linha, menos a anterior (zera a primeira coluna e calcula os outros termos)
		m=[]; //criar o vetor
		m[i+','+k]=a[i+','+k]/a[k+','+k];
		b[i]=b[i]-m[i+','+k]*b[k];
		a[i+','+k]=0;		//a primeira coluna é zero
				for (j=k+1;j<=n;j++){ //para cada coluna, a partir da k
				a[i+','+j]=a[i+','+j]-m[i+','+k]*a[k+','+j];
				}
		}
	}
			
sistemasuperior(n,b,a); //chama a função que calcula o sistema por eliminação de gauss

}
			 
