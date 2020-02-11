function mostrar()
{
	var examen;

	examen=Math.floor(Math.random()*10)+1;
	examen=parseInt(examen);

	console.log(examen);

	if(examen<4)
	{
		alert("Vamos, la proxima se puede");
	}
		else
		{
			if(examen>8)
			{
				alert("EXCELENTE");
			}
				else
				{
					alert("APROBO");
				}
		}
}