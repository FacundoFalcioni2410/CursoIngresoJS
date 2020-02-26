function mostrar()
{
	var numeroIngresado;
	var numero;

	numero=0;
	numeroIngresado=prompt("Ingrese un numero");

	for(numero=0;numero<numeroIngresado;numero=numero+2)
	{
		console.info("Numero par: ", numero);
	}
}//FIN DE LA FUNCIÓN