function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;
	var respuesta;

	acumulador=0;
	contador=0;
	respuesta="si"

	do
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
		contador=contador+1;
		respuesta=prompt("¿Desea continuar?, de ser asi ingrese 'si'");
	}while(respuesta=="si");
	
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
}//FIN DE LA FUNCIÓN