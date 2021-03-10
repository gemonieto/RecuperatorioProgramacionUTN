/*
Una software factory registra la siguiente informacion de sus empleados:
Nombre,
edad (validar),
sexo (masculino - femenino - no binario),
puesto (programador - analista - Qa),
sueldo (entre 15000 y 70000).
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000

*/
function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var puesto;
	var sueldo;
	var respuesta=true;
	var contadorProgramador=0;
	var acumuladorProgramador=0;
	var promedioSueldoProgramador;
	var contadorAnalista=0;
	var acumuladorAnalista=0;
	var promedioSueldoAnalista;
	var contadorQa=0;
	var acumuladorQa=0;
	var promedioSueldoQa;
	var flagPrimerEmpleadoMayorSueldo=true;
	var mayorSueldo;
	var sexoMayorSueldo;
	var flagPrimeraMujerMayorSueldo=true;
	var mayorSueldoMujer;
	var nombreMayorSueldoMujer;
	var contadorProgramadoresNoBinariosSueldoEntre20000y55000=0;


	do
	{
		nombre=prompt("Nombre: ");
		while(isNaN(nombre)==false)
		{
			nombre=prompt("Ingrese nombre valido: ");
		}
		edad=prompt("Ingrese edad: ");
		edad=parseInt(edad);
		while(isNaN(edad)==true||edad<0||edad>99)
		{
			edad=prompt("Ingrese edad: ");
			edad=parseInt(edad);
		}
		sexo=prompt("ingrese sexo (masculino - femenino - no binario): ");
		while(sexo!="masculino"&&sexo!="femenino"&&sexo!="no binario")
		{
			sexo=prompt("ingrese sexo valido (masculino - femenino - no binario) ");
		}
		puesto=prompt("ingrese puesto (programador - analista - Qa): ");
		while(puesto!="programador"&&puesto!="analista"&&puesto!="Qa")
		{
			puesto=prompt("ingrese puesto valido (programador - analista - Qa)");
		}
		sueldo=prompt("Ingrese sueldo (entre 15000 y 70000): ");
		sueldo=parseInt(sueldo);
		while(isNaN(sueldo)==true || sueldo<15000 || sueldo>70000)
		{
			sueldo=prompt("Ingrese sueldo valido (entre 15000 y 70000): ");
			ueldo=parseInt(sueldo);
		}

		

		switch(puesto)
		{
			case "programador":
				contadorProgramador++;
				acumuladorProgramador=acumuladorProgramador+sueldo;
				break;
			case "analista":
				contadorAnalista++;
				acumuladorAnalista=acumuladorAnalista+sueldo;
				break;
			case "Qa":
				contadorQa++;
				acumuladorQa=acumuladorQa+sueldo;
				break;
		
		}

		if(flagPrimerEmpleadoMayorSueldo==true)
		{
			mayorSueldo=sueldo;
			sexoMayorSueldo=sexo;
			flagPrimerEmpleadoMayorSueldo=false;
		}
		else if(sueldo>mayorSueldo)
		{
			mayorSueldo=sueldo;
			sexoMayorSueldo=sexo;
		}

		switch(sexo)
		{
			case "femenino":
				if(flagPrimeraMujerMayorSueldo==true)
				{
					mayorSueldoMujer=sueldo;
					nombreMayorSueldoMujer=nombre;
					flagPrimeraMujerMayorSueldo=false;
				}
				else if(sueldo>mayorSueldoMujer)
				{
					mayorSueldoMujer=sueldo;
					nombreMayorSueldoMujer=nombre;
				}
				break;
			case "no binario":
				if(sueldo>20000&&sueldo<55000)
				contadorProgramadoresNoBinariosSueldoEntre20000y55000++;
				break;
		}
		respuesta=confirm("desea continuar?");

	}while(respuesta==true);

	promedioSueldoProgramador=acumuladorProgramador/contadorProgramador;
	promedioSueldoAnalista=acumuladorAnalista/contadorAnalista;
	promedioSueldoQa=acumuladorQa/contadorQa;

	if(promedioSueldoProgramador!=0)
	{
		document.write("promedio de sueldos para programador"+promedioSueldoProgramador);
	}
	else
	{
		document.write("no hay programador");
	}

	if(promedioSueldoAnalista!=0)
	{
		document.write("promedio de sueldos para analista"+promedioSueldoAnalista);
	}
	else
	{
		document.write("no hay analista");
	}
	
	if(promedioSueldoQa!=0)
	{
		document.write("promedio de sueldos para Qa"+promedioSueldoQa);
	} 
	else
	{
		document.write("no hay Qa");
	}

	document.write("el sexo del que percibe el mayor sueldo"+sexoMayorSueldo);

	if(flagPrimeraMujerMayorSueldo!=true)
	{
		document.write("el nombre del empleado femenino con mas sueldo " + nombreMayorSueldoMujer);
	}
	else
	{
		document.write("no hay empleados femeninos")
	}
	

	if(contadorProgramadoresNoBinariosSueldoEntre20000y55000!=0)
	{
		document.write("cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000" + contadorProgramadoresNoBinariosSueldoEntre20000y55000);
	}
	else
	{
		document.write("no hay programadores no binarios que cobran sueldos entre 20000 y 55000s");
	}




}


