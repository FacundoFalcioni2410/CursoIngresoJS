/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var contador;

contador=0
contador=parseInt(contador);

function comenzar()
{
	numeroSecreto=Math.floor(Math.random()*100)+1;
	numeroSecreto=parseInt(numeroSecreto);
	
	console.info("El número a adivinar es: ",numeroSecreto);
}

function verificar()
{
	var ingresado;

	ingresado=document.getElementById('numero').value;
	ingresado=parseInt(ingresado);
	contador=contador+1;

	if(ingresado==numeroSecreto)
	{
		alert("Ganaste en solo: "+contador);
	}
	else
	{
		if(ingresado>numeroSecreto)
		{
			alert("Te pasaste");
		}
		else
		{
			alert("Te falta");
		}
	}

	document.getElementById('intentos').value=contador;
	console.info("Numero de intentos: ",contador);
}