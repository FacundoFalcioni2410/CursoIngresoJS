/*
b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en
una sola reserva.

la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva
*/
function mostrar()
{
	var nombre;
	var cantidadDePersonas;
	var cantidadDeDias;
	var formaDePago;
	var respuesta;
	var maximoDePersonas;
	var maximoDePersonasNombre;
	var contador;
	var acumulador;
	var promedio;
	var maximoDeDias;
	var maximoDeDiasCantidad;
	var contadorQR;
	var contadorEfectivo;
	var contadorTarjeta;
	var formaDePagoMasUtilizada;

	respuesta="s";
	contador=0;
	acumulador=0;
	contadorQR=0;
	contadorEfectivo=0;
	contadorTarjeta=0;

	while(respuesta=="s")
	{
		do
		{
			nombre=prompt("Ingrese nombre");
		}
		while(!isNaN(nombre));
		do
		{
			cantidadDePersonas=prompt("Ingrese la cantidad de personas");
			cantidadDePersonas=parseInt(cantidadDePersonas);
		}
		while(isNaN(cantidadDePersonas) || cantidadDePersonas<0);

		console.info("Personas: ", cantidadDePersonas);
		
		do
		{
			cantidadDeDias=prompt("Ingrese la cantidad de dias");
			cantidadDeDias=parseInt(cantidadDeDias);
		}
		while(isNaN(cantidadDeDias) || cantidadDeDias<0);

		console.info("Dias: ", cantidadDeDias);
		
		do
		{
			formaDePago=prompt("Ingrese la forma de pago");
		}
		while(!isNaN(formaDePago) && formaDePago!="QR" && formaDePago!="Efectivo" && formaDePago!="Tarjeta");

		console.info("Forma de pago: ", formaDePago);

		if(contador==0 || maximoDePersonas<cantidadDePersonas)
		{
			maximoDePersonas=cantidadDePersonas;
			maximoDePersonasNombre=nombre;
		}
		if(contador==0 || maximoDeDias<cantidadDeDias)
		{
			maximoDeDias=cantidadDeDias;
			maximoDeDiasCantidad=cantidadDePersonas;
		}
		switch(formaDePago)
		{
			case "Efectivo":
				contadorEfectivo++;
				break;
			case "Tarjeta":
				contadorTarjeta++;
				break;
			case "QR":
				contadorQR++;
				break;		
		}
		if(contadorEfectivo>contadorTarjeta && contadorEfectivo>contadorQR)
		{
			formaDePagoMasUtilizada="Efectivo";
		}
		else
		{
			if(contadorQR>contadorTarjeta)
			{
				formaDePagoMasUtilizada="QR";
			}
			else
			{
				formaDePagoMasUtilizada="Tarjeta";
			}
		}

		acumulador=acumulador+cantidadDeDias
		contador++;
		respuesta=prompt("¿Desea continuar");
	}


	promedio=acumulador/contador;
	console.info("Maximo persona", maximoDePersonasNombre);
	console.info("Maximo dias: ", maximoDeDiasNombre);
	console.info("Forma de pago mas utilizada: ", formaDePagoMasUtilizada);

	document.write("<br>nombre del huesped con mas invitados: "+maximoDePersonasNombre);
	document.write("<br>nombre de maximos dias invitados: "+maximoDePersonasNombre);
	document.write("<br>Forma de pago mas utilizada: "+formaDePagoMasUtilizada);
	document.write("<br>El promedio es: "+promedio);
	document.write("<br>La cantidad de personas que se quedaron mas dias: "+maximoDeDiasCantidad);
}

