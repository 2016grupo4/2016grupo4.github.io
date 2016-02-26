function fcos() { // resolve o cos(x)

ang = document.getElementById("angulo").value;
ang=Number(ang);

angr=(ang/180)*(Math.PI);
cos=Math.cos(angr);
document.getElementById("ecos").innerHTML = cos;

n = document.getElementById("nvezes").value;
n=Number(n);
n=n-1;
m=0;
for (i = 0; i<= n; i++) {
	m=m+((Math.pow(-1,i))*(Math.pow(angr,2*i))/(fatorial(2*i)));
}
document.getElementById("mcos").innerHTML = m;
erro=(cos-m);
document.getElementById("derro").innerHTML = erro.toPrecision(1);
}

function fatorial(num){
	fat=1;
	for (c = num; c >= 1; c--) {
		fat=fat*c;
	} 
	return fat
}