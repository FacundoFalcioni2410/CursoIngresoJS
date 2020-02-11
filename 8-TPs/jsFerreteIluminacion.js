/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var lamparita;
	var precioLamparita;
	var precioFinalLamparita;
	var marca;
	var impuesto;

	lamparita=document.getElementById('Cantidad').value;
	lamparita=parseInt(lamparita);
	precioLamparita=35*lamparita;
	precioLamparita=parseInt(precioLamparita);
	marca=document.getElementById('Marca').value;
	
	if(lamparita>5)
	{
		precioFinalLamparita=precioLamparita/2;
		document.getElementById('precioDescuento').value=precioFinalLamparita;
	}
			if(lamparita==5 && marca=="ArgentinaLuz")
			{
				precioFinalLamparita=precioLamparita-precioLamparita*descuentoDel40;
				document.getElementById('precioDescuento').value=precioFinalLamparita;	
			}
				else if(lamparita==5 && marca!="ArgentinaLuz")
				{
					precioLamparita=precioLamparita-precioLamparita*descuentoDel30;
					document.getElementById('precioDescuento').value=precioFinalLamparita;
				}
						if(lamparita==4)
						{
								if(marca="ArgentinaLuz")
								{
									precioFinalLamparita=precioLamparita-precioLamparita*25/100;
									document.getElementById('precioDescuento').value=precioFinalLamparita;
								}
								else if(marca="“FelipeLamparas”")
								{
									precioFinalLamparita=precioLamparita-precioLamparita*25/100;
									document.getElementById('precioDescuento').value=precioFinalLamparita;
								}
								else
								{
									precioFinalLamparita=precioLamparita-precioLamparita*20/100;
									document.getElementById('precioDescuento').value=precioFinalLamparita;
								}
						}
								if(lamparita==3)
								{
									if(marca="ArgentinaLuz")
									{
										precioFinalLamparita=precioLamparita-precioLamparita*20/100;
										document.getElementById('precioDescuento').value=precioFinalLamparita;	
									}
									else if(marca="FelipeLampara")
									{
										precioFinalLamparita=precioLamparita-precioLamparita*15/100;
										document.getElementById('precioDescuento').value=precioFinalLamparita;
									}
									else
									{
										precioFinalLamparita=precioLamparita-precioLamparita*5/100;
										document.getElementById('precioDescuento').value=precioFinalLamparita;
									}
								}
										if(precioFinalLamparita>119)
										{
											impuesto=precioFinalLamparita*10/100;
											precioFinalLamparita=precioLamparita+precioLamparita*10/100;
											document.getElementById('precioDescuento').value=precioFinalLamparita;
											alert("Usted pago "+impuesto+" de IIBB: ");
										}
}