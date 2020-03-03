function mostrar()
{
	var cantidadDeBolsas;
	var sabor;
	var kilos;
	var respuesta;
	var contador;
	var sumaDeKilos;
	var promedioDeKilos;
	var bandera;
	var maximoDeKilos;
	var maximoDeKilosSabor;
	var contadorCarne;
	var sumaDeKilosCarne;
	var promedioDeKilosCarne;

	contador=0;
	bandera=0;
	respuesta="Si"
	contadorCarne=0;
	promedioDeKilosCarne=0;
	
	while(respuesta=="Si")
	{
		do
		{
			cantidadDeBolsas=prompt("Ingrese la cantidad de bolsas");
			cantidadDeBolsas=parseInt(cantidadDeBolsas);
		}
		while(isNaN(cantidadDeBolsas) || cantidadDeBolsas<1 || cantidadDeBolsas>10);
		do
		{
			kilos=prompt("Ingrese la cantidad de kilos que desea");
			kilos=parseInt(kilos);
		}
		while(isNaN(kilos) || kilos<1 || kilos>500);
		do
		{
			sabor=prompt("Ingrese el sabor deseado");
		}
		while(!isNaN(sabor) || sabor!="Carne" && sabor!="Vegetales" && sabor!="Pollo");
		
		sumaDekilos=kilos*cantidadDeBolsas;
		contador++;
		if(bandera==0 || kilos>maximoDeKilos)
		{
			maximoDeKilos=kilos;
			maximoDeKilosSabor=sabor;
		}
		switch(sabor)
		{
			case "Carne":
				contadorCarne++;
				sumaDeKilosCarne=sumaDeKilosCarne+kilos;
				break;
		}
		respuesta=prompt("¿Desea continuar?");
	}
		promedioDeKilos=sumaDeKilos/contador;
		promedioDeKilosCarne=sumaDeKilosCarne/contadorCarne;

		alert("El promedio de kilos es de: "+kilos);
		alert("El mas liviano es de: "+kilos+ " y su sabor es: "+sabor);
		alert("La cantidad de carne es: "+contadorCarne+" y su promedio de kilos es: "+promedioDeKilosCarne);
}