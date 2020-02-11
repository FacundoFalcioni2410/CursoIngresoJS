/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

	var largoDelTerreno;
	var anchoDelTerreno;
	var perimetro;
	var alambre;

	largoDelTerreno=document.getElementById('Largo').value;
	largoDelTerreno=parseInt(largoDelTerreno);
	anchoDelTerreno=document.getElementById('Ancho').value;
	anchoDelTerreno=parseInt(anchoDelTerreno);

	perimetro=(largoDelTerreno*2)+(anchoDelTerreno*2);
	alambre=perimetro*3;
	alert("Se debe comprar: "+alambre);
}
function Circulo () 
{

}
function Materiales () 
{
	var largoDelTerreno;
	var anchoDelTerreno;
	var area;
	var bolsaDeCemento;
	var bolsaDeCal;

	largoDelTerreno=document.getElementById('Largo').value;
	largoDelTerreno=parseInt(largoDelTerreno);
	anchoDelTerreno=document.getElementById('Ancho').value;
	anchoDelTerreno=parseInt(anchoDelTerreno);

	area=largoDelTerreno*anchoDelTerreno;
	bolsaDeCemento=area*3;
	bolsaDeCal=area*2;

	alert("Se necesitan: "+bolsaDeCemento+" bolsas de cemento y "+bolsaDeCal+" bolsas de cal");
}