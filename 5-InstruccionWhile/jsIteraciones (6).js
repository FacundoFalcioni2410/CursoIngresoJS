function mostrar()
{

	var contador;
	var acumulador;
	var numeroIngresado;
	
	contador=0;
	acumulador=0;
	
	do
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
		contador=contador+1;
	}while(contador<5 || isNaN(numeroIngresado));

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
}//FIN DE LA FUNCIÓN