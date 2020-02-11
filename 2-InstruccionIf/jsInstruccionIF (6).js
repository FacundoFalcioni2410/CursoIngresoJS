function mostrar()
{
	var edad;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

/*	if(edad>17)
	{
		alert("Es mayor de edad");
	}
		else if(edad>12 && edad<18)
		{
			alert("Es adolescente");
		}
			else if(edad<13)
			{
				alert("Es un niño");
			}*/
	if(edad>17)
	{
		alert("Es mayor de edad");
	}
		else
		{
			if (edad<13)
			{
				alert("Es un niño");
			}
				else
				{
					alert("Es un adolescente");
				}
		}
}


