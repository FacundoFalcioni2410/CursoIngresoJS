/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function NumerosPares () 
{
	var numero;
	var numeroIngresado;
	var cantidadNumerosPares;

	numeroIngresado=document.getElementById('numero').value;
	numeroIngresado=parseInt(numeroIngresado);
	cantidadNumerosPares=0;

	for(numero=2; !isNaN(numeroIngresado) && numero<numeroIngresado && numeroIngresado>0; numero=numero+2)
	{
		console.info("Numeros pares: ", numero);
		cantidadNumerosPares++;
	}

	console.info("Cantidad de numeros pares: ", cantidadNumerosPares);
}

function NumerosImpares ()
{
	var numero;
	var numeroIngresado;
	var cantidadNumerosImpares;

	numeroIngresado=document.getElementById('numero').value;
	numeroIngresado=parseInt(numeroIngresado);
	cantidadNumerosImpares=0;

	for(numero=1; !isNaN(numeroIngresado) && numero<numeroIngresado && numeroIngresado>0; numero=numero+2)
	{
		console.info("Numeros impares: ", numero);
		cantidadNumerosImpares++;
	}

	console.info("Cantidad de numeros impares: ", cantidadNumerosImpares);
}

function NumerosDivisibles ()
{
	var numero;
	var numeroIngresado;
	var cantidadNumerosDivisibles;
	var numerosDivisibles;

	numeroIngresado=document.getElementById('numero').value;
	numeroIngresado=parseInt(numeroIngresado);
	cantidadNumerosDivisibles=0;
	NumerosDivisibles=0;

	for(numero=1; !isNaN(numeroIngresado) && numeroIngresado<100 && numeroIngresado>0; numero=numero+1)
	{
		if(numero==100)
		{
			break;
		}

		if(numeroIngresado%numero==0)
		{
			numerosDivisibles==numero;
			console.info("Numeros divisibles: ", numerosDivisibles);
			cantidadNumerosDivisibles++;
		}
				
	}

	console.info("Cantidad de numeros divisibles: ", cantidadNumerosDivisibles);
}

function VerificarPrimo()
{
	var numeroIngresado;
	var i;
	var bandera;

	bandera=0;
	numeroIngresado=document.getElementById('numero').value;
	numeroIngresado=parseInt(numeroIngresado);


	for(i=2;!isNaN(numeroIngresado) && i<numeroIngresado;i++)
	{		
		if(numeroIngresado%i==0)
		{
			console.log("El numero no es primo");
			bandera++
			break;
		}
	}
		if(bandera==0)
			{
				console.log("El numero es primo: ", numeroIngresado);
			}
}

function NumerosPrimos()
{
	var numeroIngresado;
	var i;
	var bandera;
	var cantidadNumerosPrimos;

	bandera=0;
	numeroIngresado=document.getElementById('numero').value;
	numeroIngresado=parseInt(numeroIngresado);
	cantidadNumerosPrimos=0;

	for(i=2;!isNaN(numeroIngresado) && i<numeroIngresado;i++)
	{		
		if(numeroIngresado%i==0)
		{
			bandera++
			break;
		}
		if(bandera==0)
			{
				cantidadNumerosPrimos++;
			}
			console.info("La cantidad de numeros primos es: ", cantidadNumerosPrimos);
	}
}