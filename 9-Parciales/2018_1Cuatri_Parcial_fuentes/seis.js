function mostrar()
{
	var laHora;
	
	laHora=document.getElementById('laHora').value;
	laHora=parseInt(laHora);

	switch(laHora)
	{
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("es de mañana");
			break;
		case 12:
		case 13:
		case 14:		
	}

}
