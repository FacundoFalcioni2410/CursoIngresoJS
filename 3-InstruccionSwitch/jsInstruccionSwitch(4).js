function mostrar()
{
	var mesDelAño;
	mesDelAño=document.getElementById('mes').value;
	alert (mesDelAño);

	switch(mesDelAño)
	{
		case"Enero":
		case"Marzo":
		case"Mayo":
		case"Julio":
		case"Agosto":
		case"Octubre":
		case"Diciembre":
			alert("Tiene 31 días");
			break;
		case"Febrero":
			alert("Tiene 28 días");
			break;
		case"Abril":
		case"Junio":
		case"Septiembre":
		case"Noviembre":
			alert("Tiene 31 días");
										
	}
}//FIN DE LA FUNCIÓN