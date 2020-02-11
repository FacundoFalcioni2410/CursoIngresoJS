/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var porcentaje10;
	var resultado;

	sueldo=document.getElementById('sueldo').value;
	sueldo=parseInt(sueldo);
	porcentaje10=10/100;


	resultado=sueldo*porcentaje10+sueldo;
	resultado=parseInt(resultado);
	document.getElementById('resultado').value=resultado;
	

	

}
