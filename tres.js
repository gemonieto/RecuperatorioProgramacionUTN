/*
Ferrete lamparas 2.0 El empleado del negocio ingresa los siguientes datos de cada venta, teniendo en cuenta que tenemos varias ventas:
nombre del cliente,
cantidad de lamparas ,
marca (FelipeLamparas - ArgentinaLuz -Illuminatis),
precio por unidad,
precio total de esa compra: dato que se calcula.
Se sabe que si la marca es FelipeLamparas y la cantidad de lamparas supera las 5 unidades, se aplica un descuento del 10% sobre la compra Si la marca es ArgentinaLuz y compra 3 o mas unidades, el descuento es del 5%. 
Ningun otro caso aplica descuento. al terminar la carga de todas las ventas,la empresa desea saber:
a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
b) Cuanto "perdio" la empresa en concepto de descuentos.
c) El promedio de la cantidad de lamparas vendidas de cada marca.
d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas)
*/

function mostrar()
{
	var nombre;
	var cantidad;
	var marca;
	var precioPorUnidad;
	var totalSinDescuento;
	var respuesta=true;
	var acumuladorPrecioSinDescuento;
	var descuento;
	var precioaDescontar;
	var recaudacionVentas;
	var contadorFelipeLamparas=0;
	var acumuladorFelipeLamparas=0;
	var promedioFelipeLamparas;
	var contadorArgentinaLuz=0;
	var acumuladorArgentinaLuz=0;
	var promedioArgentinaLuz;
	var contadorIlluminatis=0,
	var acumuladorIlluminatis=0;
	var promedioIlluminatis;
	var marcaMasVentas;
	
	do
	{
		nombre=prompt("Nombre: ");
		while(isNaN(nombre)==false)
		{
			nombre=prompt("Ingrese nombre valido: ");
		}
	
		cantidad=prompt("Cantidad: ");
		cantidad=parseInt(cantidad);
		while(isNaN(cantidad)==true)
		{
			cantidad=prompt("Cantidad: ");
			cantidad=parseInt(cantidad);	
		}
		marca=prompt("Marca: (FelipeLamparas - ArgentinaLuz -Illuminatis) ");
		while(marca!="FelipeLamparas"&&marca!="ArgentinaLuz"&&marca!="Illuminatis")
		{
			marca=prompt("Ingrese Marca valida: (FelipeLamparas - ArgentinaLuz -Illuminatis) ");
		}
		precioPorUnidad=prompt("Ingrese precio por unidad");
		precioPorUnidad=parseInt(precioPorUnidad);
		while(isNaN(precioPorUnidad)==true)
		{
			precioPorUnidad=prompt("Ingrese precio por unidad valido");
			precioPorUnidad=parseInt(precioPorUnidad);
		}
		

		if(marca=="FelipeLamparas"&&cantidad>5)
		{
			descuento=10;
		}
		else if(marca=="ArgentinaLuz"&&cantidad>=3)
		{
			descuento=5;
		}
		else
		{
			descuento=0;
		}
		
		switch(marca)
		{
			case "FelipeLamparas":
			contadorFelipeLamparas++;
			acumuladorFelipeLamparas=acumuladorFelipeLamparas+cantidad;
			break;
			case "ArgentinaLuz":
			contadorArgentinaLuz++;
			acumuladorArgentinaLuz=acumuladorArgentinaLuz+cantidad;
			break;
			case "Illuminatis":
			contadorIlluminatis++;
			acumuladorIlluminatis=acumuladorIlluminatis+cantidad;
			break;
		}	
		
		totalSinDescuento=precioPorUnidad*cantidad;
		acumuladorPrecioSinDescuento=totalSinDescuento+acumuladorPrecioSinDescuento;
		
		respuesta=confirm("desea continuar?");
	}while(respuesta==true);

	precioaDescontar=acumuladorPrecioSinDescuento*descuento/100

	recaudacionVentas=acumuladorPrecioSinDescuento-precioaDescontar;

	promedioFelipeLamparas=acumuladorFelipeLamparas/contadorFelipeLamparas;
	promedioArgentinaLuz=acumuladorArgentinaLuz/contadorArgentinaLuz;
	promedioIlluminatis=acumuladorIlluminatis/contadorIlluminatis;

	if(acumuladorFelipeLamparas>acumuladorArgentinaLuz&&acumuladorFelipeLamparas>acumuladorIlluminatis)
	{
		marcaMasVentas="FelipeLamparas";
	}
	if(acumuladorArgentinaLuz>acumuladorFelipeLamparas&&acumuladorArgentinaLuz>acumuladorIlluminatis)
	{
		marcaMasVentas="ArgentinaLuz";
	}
	if(acumuladorIlluminatis>acumuladorArgentinaLuz&&acumuladorIlluminatis>acumuladorFelipeLamparas)
	{
		marcaMasVentas="Illuminatis";
	}


	
	document.write("La empresa recauda en concepto de todas las ventas realizadas: " + recaudacionVentas);
	
	if(descuento!=0)
	{
		document.write("La empresa perdió en concepto de descuentos: "+precioaDescontar);
	}
	else
	{
		document.write("La empresa no tuvo perdidas por descuentos");
	}

	if(promedioFelipeLamparas!=0)
	{
		document.write("el promedio de cantidad de lamparas vendidas FelipeLamparas: "+promedioFelipeLamparas);
	}
	else
	{
		document.write("No se vendieron lamparas FelipeLamparas");
	}

	if(promedioArgentinaLuz!=0)
	{
		document.write("el promedio de cantidad de lamparas vendidas ArgentinaLuz: "+promedioArgentinaLuz);
	}
	else
	{
		document.write("No se vendieron lamparas ArgentinaLuz");
	}


	if(promedioIlluminatis!=0)
	{
		document.write("el promedio de cantidad de lamparas vendidas Illuminatis: "+promedioIlluminatis);
	}
	else
	{
		document.write("No se vendieron lamparas Illuminatis");
	}


	document.write("La marca de lamparas mas vendidas es: " + marcaMasVentas);






	
	

}
