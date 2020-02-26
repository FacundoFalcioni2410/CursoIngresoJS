function mostrar()
{
	var sexo;
	sexo=prompt("ingrese f ó m .");

	do
	{
		sexo=prompt("ingrese f ó m .");
	}while(sexo!="f" && sexo!="m");
	document.getElementById('Sexo').value=sexo;
}//FIN DE LA FUNCIÓN