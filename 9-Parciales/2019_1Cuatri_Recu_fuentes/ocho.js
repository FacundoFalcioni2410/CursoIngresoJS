/*Se pide la carga de datos de un contenedor  de alimento canino con un máximo de carga de 1000kg, cargar hasta que el cliente quiera o se llene el contenedor.
se pide:
marca
kilos por bolsa
cantidad de bolsa
importe por bolsa

que marca tiene más kilos en el contenedor
que marca tiene más bolsas de alimento en el contenedor
que marca tiene el mayor importe por bolsa de alimento
el importe y la marca de la bolsa de alimento menos pesada.*/

function mostrar()
{
	var cantidadDeBolsas;
	var sabor;
	var kilos;
	var respuesta;
	var contador;
	var sumaDekilos;
	var promedioDeKilos;
	var bandera;
	var maximoDeKilos;
	var maximoDeKilosSabor;
	var contadorCarne;
	var sumaDeKilosCarne;
	var promedioDeKilosCarne;

	contador=0;
	bandera=0;

	while
	{
		do
		{
			cantidadDeBolsas=prompt("Ingrese la cantidad de bolsas");
			cantidadDeBolsas=parseInt(cantidadDeBolsas);
		}
		while(isNaN(marca) || cantidadDeBolsas<1 || cantidadDeBolsas>10);
		do
		{
			kilos=prompt("Ingrese la cantidad de kilos que desea");
			kilos=parseInt(kilos);
		}
		while(isNaN(kilos) || kilos<1 || kilos>500);
		do
		{
			sabor=("Ingrese el sabor deseado");
		}
		while(!isNaN(sabor) || sabor!="Carne" && sabor!="Vegetales" && sabor!="Pollo");
		
		sumadekilos=kilos*cantidadDeBolsas;
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
	}
		promedioDeKilos=sumaDeKilos/contador;
		promedioDeKilosCarne=sumaDeKilosCarne/contadorCarne;

		alert("El promedio de kilos es de: "+kilos);
		alert("El mas liviano es de: "+kilos+ " y su sabor es: "+sabor);
		alert("La cantidad de carne es: "+contadorCarne+" y su promedio de kilos es: "+promedioDeKilosCarne);
}
