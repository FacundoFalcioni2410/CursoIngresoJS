function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var pasaje;
	var respuesta;
	var edadHombreJoven;
	var bandera;
	var edadHombre;
	var hombreJovenPasaje;
	var nombreHombreJoven;
	var pasajeMasViejo;
	var sexoPasajeroMasViejo;
	var edadPasajeroMasViejo;
	var acumuladorEdadMujeres;
	var acumuladorEdadHombres;
	var mujeresPasajeUrbanoNacional;
	var contadorMujeres;
	var promedioEdadMujeres;
	var promedioEdadHombresPasajeInternacional;
	var contadorHombres;

	bandera=0;
	respuesta="Si"
	edadPasajeMasViejo=0;
	edadHombreJoven=0;
	contadorHombres=0;
	contadorMujeres=0;

	while(respuesta=="Si")
	{
		do
		{
			nombre=prompt("Ingrese su nombre");
		}
		while(!isNaN(nombre));
		do
		{
			edad=prompt("Ingrese su edad");
			edad=parseInt(edad);
		}
		while(isNaN(edad) || edad<18);
		do
		{
			sexo=prompt("Ingrese el sexo");
		}
		while(!isNaN(sexo) || sexo!="F" && sexo!="M");
		do
		{
			pasaje=prompt("Ingrese el tipo de pasaje");
		}
		while(!isNaN(pasaje) || pasaje!="Internacional" && pasaje!="Urbano" && pasaje!="Nacional");
		
		if(bandera==0 || sexo=="M" && pasaje=="Nacional")
		{
			nombreHombreJoven=nombre;
		}

		if(bandera==0 || edadPasajeMasViejo<edad)
		{
			pasajeMasViejo=pasaje;
			sexoPasajeroMasViejo=sexo
		}

		if(sexo=="F" && pasaje=="Urbano" || pasaje=="Nacional")
		{
			mujeresPasajeUrbanoNacional++;
		}

		if(sexo=="F")
		{
			acumuladorEdadMujeres=acumuladorEdadMujeres+edad
			contadorMujeres++;
		}

		if(sexo=="M" && pasaje=="Internacional")
		{
			acumuladorEdadHombres=acumuladorEdadHombres+edad
			contadorHombres++;
		}
	}

	promedioEdadMujeres=acumuladorEdadMujeres/contadorMujeres;
	promedioEdadHombresPasajeInternacional=acumuladorEdadHombres/contadorHombres;

	console.info("mujeresPasajeUrbanoNacional", mujeresPasajeUrbanoNacional);
	console.info("promedioEdadHombresPasajeInternacional",promedioEdadHombresPasajeInternacional);
	console.info("Promedio edad mujeres", promedioEdadMujeres);
	console.info("Sexo del pasajero mas viejo: "+sexoPasajeroMasViejo+" y su pasaje es: "+pasajeMasViejo);
	console.info("Nombre del hombre con pasaje nacional mas joven"+nombreHombreJoven);
}
