/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var descuentoDel25;
	var resultado;

	importe=document.getElementById('importe').value;
	importe=parseInt(importe);
	descuentoDel25=25/100;

	resultado=importe-importe*descuentoDel25;

	document.getElementById('resultado').value=resultado;

}
