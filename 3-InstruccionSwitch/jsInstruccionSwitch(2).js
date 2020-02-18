function mostrar()
{
	var mesDelAño;
	mesDelAño=document.getElementById('mes').value;
	alert (mesDelAño);

	switch(mesDelAño)
	{
		case"Septiembre":
		case"Octubre":
		case"Noviembre":
		case"Diciembre":
		case"Enero":
		case"Febrero":
		case"Marzo":
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;
		case"Abril":
		case"Mayo":
		case"Junio":
			alert("Falta para el invierno.");
			break;
		case"Julio":
		case"Agosto":
			alert("Abrigate que hace frio.");
			break;
	}
}//FIN DE LA FUNCIÓN