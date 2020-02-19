function mostrar()
{

	var contador;
	var respuesta;
	var maximo;
	var minimo;
	// declarar variables

	contador=0;
	respuesta="si";

	while(respuesta!='no' || isNaN(numeroIngresado))
	{
		contador=contador+1
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		if(contador==1)
		{
			maximo=numeroIngresado;
			minimo=numeroIngresado;
		}
		else
		{
			if(numeroIngresado>maximo)
			{
				maximo=numeroIngresado;
			}
			if(numeroIngresado<minimo)
			{
				minimo=numeroIngresado;
			}
		}
		
		respuesta=prompt("Ingrese 'no' para salir");
	}
		document.getElementById('maximo').value=maximo;
		document.getElementById('minimo').value=minimo
}//FIN DE LA FUNCIÓN