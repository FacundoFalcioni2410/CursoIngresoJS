function mostrar()
{

	var contador;
	var positivo;
	var acumulador
	var negativo;
	var multiplicacion;
	var respuesta;

	acumulador=0
	multiplicacion=0;
	contador=0;
	respuesta="si";

	while(respuesta=="si")
	{
		positivo=prompt("Ingrese un numero");
		positivo=parseInt(positivo);
		acumulador=acumulador+positivo;
		multiplicacion=negativo*multiplicacion
		contador=contador+1;
		respuesta=prompt("¿Desea continuar?, de ser asi ingrese 'si'");
	}
	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;
}//FIN DE LA FUNCIÓN