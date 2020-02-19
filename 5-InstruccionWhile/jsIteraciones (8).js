function mostrar()
{

	var contador;
	var positivo;
	var acumulador
	var negativo;
	var multiplicacion;
	var respuesta;
	var numeroIngresado;

	acumulador=0
	multiplicacion=0;
	contador=0;
	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado<0)
		{
			negativo=numeroIngresado
		}
		respuesta=prompt("¿Desea continuar?, de ser asi ingrese 'si'");
	}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;
}//FIN DE LA FUNCIÓN