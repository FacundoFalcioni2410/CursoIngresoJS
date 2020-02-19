/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	var edad;
	var sexo;
	var estadoCivil;
	var sueldoBruto;
	var numeroLegajo;
	var nacionalidad;

	edad=0;
	sexo=0;
	estadoCivil=0;
	sueldoBruto=0;
	numeroLegajo=0;
	nacionalidad=0;

	while(isNaN(edad) || edad<18 || edad>90)
	{
		edad=prompt("Ingrese su edad");
	}
	while(sexo!="F" && sexo!="M" || !isNaN(sexo))
	{
		sexo=prompt("ingrese 'F' o 'M'.");
	}
	while(estadoCivil<1 || estadoCivil>4 || isNaN(estadoCivil))
	{
		estadoCivil=prompt("Ingrese su estado civil. Tener en cuenta que 1= Soltero, 2= Casado, 3= Divorciado, 4= Viudo");
	}
	while(sueldoBruto<8000 || isNaN(sueldoBruto))
	{
		sueldoBruto=prompt("Ingrese sueldo bruto");
	}
	while(numeroLegajo<1000 || numeroLegajo>9999 || isNaN(numeroLegajo))
	{
		numeroLegajo=prompt("Ingrese su numero de legajo");
	}
	while(nacionalidad!="A" && nacionalidad!="E" && nacionalidad!="N" || !isNaN(nacionalidad))
	{
		nacionalidad=prompt("Ingrese su nacionalidad. Tener en cuenta que A= Argentino, E= Extranjero y N= Nacionalizado");
	}

	document.getElementById('Edad').value=edad;
	document.getElementById('Sexo').value=sexo;
	document.getElementById('EstadoCivil').value=estadoCivil;
	document.getElementById('Sueldo').value=sueldoBruto;
	document.getElementById('Legajo').value=numeroLegajo;
	document.getElementById('Nacionalidad').value=nacionalidad;
}
