function mostrar()
{
	var nombre;
	var sexo;
	var notaDelFinal;
	var edad;
	var respuesta;
	var cantidadVaronesAprobados;
	var acumuladorNotasMasculino;
	var acumuladorNotasFemenino;
	var contadorMasculino;
	var contadorFemenino;
	var promedioNotasFinalesMasculino;
	var promedioNotasFinalesFemenino;
	var notasMenoresDeEdad;
	var notasAdolescentes;
	var notasMayoresDeEdad;
	var cantidadMenores;
	var cantidadAdolescentes;
	var cantidadMayores;
	var promedioNotasMayores;
	var promedioNotasMenores;
	var promedioNotasAdolescentes;

	respuesta="Si";
	cantidadVaronesAprobados=0;
	contadorMasculino=0;
	contadorFemenino=0;
	acumuladorNotasMasculino=0;

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
		while(isNaN(edad) || edad>99 || edad<1);
		
		do
		{
			sexo=prompt("Ingrese el sexo");
		}
		while(!isNaN(sexo) || sexo!="F" && sexo !="M");

		do
		{
			notaDelFinal=prompt("Ingrese la nota del final");
			notaDelFinal=parseInt(notaDelFinal);
		}
		while(isNaN(notaDelFinal) || notaDelFinal<1 || notaDelFinal>10);

		switch(sexo)
		{
			case "M":
				contadorMasculino++;
				acumuladorNotasMasculino=acumuladorNotasMasculino + notaDelFinal;
			default:
				contadorFemenino++;
				acumuladorNotasFemenino=acumuladorNotasFemenino + notaDelFinal;
		}
		
		if(sexo=="M" && notaDelFinal>5)
		{
			cantidadVaronesAprobados++;
		}

		switch(edad)
		{
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
				notasMenoresDeEdad=notasMenoresDeEdad+notaDelFinal;
				cantidadMenores++;
				break;
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
			case 20:
			case 21:
			case 22:
			case 23:
			case 24:
			case 25:
				notasAdolescentes=notasAdolescentes+notaDelFinal;
				cantidadAdolescentes++;
				break;
			default:
				notasMayoresDeEdad=notasMayoresDeEdad+notaDelFinal;
				cantidadMayores++;
		}
		respuesta=prompt("¿Desea continuar?");
	}
	promedioNotasAdolescentes=notasAdolescentes/cantidadAdolescentes;
	promedioNotasMenores=notasMenoresDeEdad/cantidadMenores;
	promedioNotasMayores=notasMayoresDeEdad/cantidadMayores;
	promedioNotasFinalesMasculino=acumuladorNotasMasculino/contadorMasculino;
	promedioNotasFinalesFemenino=acumuladorNotasFemenino/contadorFemenino;
	document.write("<br>La cantidad de varones aprobados es: "+cantidadVaronesAprobados);
	document.write("<br>El promedio total de las notas finales de los varones es: "+promedioNotasFinalesMasculino);
	document.write("<br>El promedio total de las notas finales de las mujeres es: "+promedioNotasFinalesFemenino);
	document.write("<br>El promedio total de las notas finales de los adolescentes es: "+promedioNotasAdolescentes);
	document.write("<br>El promedio total de las notas finales de los mayores es: "+promedioNotasMayores);
	document.write("<br>El promedio total de las notas finales de las menores es: "+promedioNotasMenores);
}
