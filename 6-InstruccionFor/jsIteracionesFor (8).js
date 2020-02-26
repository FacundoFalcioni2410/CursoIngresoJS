function mostrar()
{
	var numeroIngresado;
	var i;
	var bandera;

	bandera=0;
	numeroIngresado=prompt("Ingrese un numero");
	numeroIngresado=parseInt(numeroIngresado);


	for(i=2;i<numeroIngresado;i++)
	{
		console.log(i);
		
		if(numeroIngresado%i==0)
		{
			console.log("El numero no es primo");
			bandera++
			break;
		}
	}
		if(bandera==0)
			{
				alert("Es primo el numero: "+numeroIngresado);
			}
}//FIN DE LA FUNCIÓN