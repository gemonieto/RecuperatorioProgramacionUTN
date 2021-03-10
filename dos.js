/*
Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre,
carrera("Quimica";"Fisica";"Sistemas"),
sexo (masculino - femenino -no binario),
cantidad de materias(entre 1 y 5),
Nota promedio del alumno(entre 0 y 10),
edad (validar).
Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.
*/

function mostrar()
{
    var nombre;
    var carrera;
    var sexo;
    var cantidadMaterias;
    var notaPromedio;
    var edad;
    var contador=0;
    var flagPrimerMejorPromedioFisica=true;
    var mejorPromedio;
    var nombreMejorPromedioFisica;
    var flagAlumnaMasJoven=true;
    var edadAlumnaMasJoven;
    var nombreAlumnaMasJoven;
    var contadorQuimica=0;
    var porcentajeQuimica;
    var contadorFisica=0;
    var porcentajeFisica;
    var contadorSistemas=0
    var porcentajeSistemas;
    var flagPrimerEstudianteCursaMasMaterias=true;
    var cantidadMateriasEstudianteCursaMasMaterias;
    var edadEstudianteCursaMasMaterias;
    var nombreEstudianteCursaMasMaterias;


    for(contador=0;contador<500;contador++)
    {

        nombre=prompt("Nombre: ");
        while(isNaN(nombre)==false)
        {
            nombre=prompt("Ingrese nombre valido: ");
        }
        carrera=prompt("Ingrese carrera :(Quimica;Fisica;Sistemas)");
        while(carrera!="Quimica"&&carrera!="Fisica"&&carrera!="Sistemas")
        {
            carrera=prompt("Ingrese carrera valida (Quimica;Fisica;Sistemas) : ");
        }
        sexo=prompt("ingrese sexo (masculino - femenino - no binario): ");
        while(sexo!="masculino"&&sexo!="femenino"&&sexo!="no binario")
        {
            sexo=prompt("ingrese sexo valido (masculino - femenino - no binario) ");
        }
        cantidadMaterias=prompt("ingrese cantidad de materias(entre 1 y 5) ");
        cantidadMaterias=parseInt(cantidadMaterias);
        while(isNaN(cantidadMaterias)==true || cantidadMaterias<1 || cantidadMaterias>5)
        {
            cantidadMaterias=prompt("ingrese cantidad valida de materias(entre 1 y 5) ");
            cantidadMaterias=parseInt(cantidadMaterias);
        }
        notaPromedio=prompt("ingrese nota promedio del alumno(entre 0 y 10)");
        while(isNaN(notaPromedio)==true || notaPromedio<0 || notaPromedio>10)
        {
            notaPromedio=prompt("ingrese nota promedio del alumno(entre 0 y 10)");
        }
        edad=prompt("Ingrese edad: ");
        edad=parseInt(edad);
        while(isNaN(edad)==true||edad<0||edad>99)
        {
            edad=prompt("Ingrese edad: ");
            edad=parseInt(edad);
        }


        switch(carrera)
        {
            case "Fisica":   
                contadorFisica++; 
                if (flagPrimerMejorPromedioFisica==true) 
                {
                    mejorPromedio=notaPromedio;
                    nombreMejorPromedioFisica=nombre;
                    flagPrimerMejorPromedioFisica=false;
                }
                else if(mejorPromedio>notaPromedio)
                {
                    mejorPromedio=notaPromedio;
                    nombreMejorPromedioFisica=nombre;
                }
                break;
            case "Quimica":
                contadorQuimica++;
                break;
            case "Sistemas":
                contadorSistemas++;


        }

        if(sexo="femenino")
        {
            if(flagAlumnaMasJoven==true)
            {
                edadAlumnaMasJoven=edad;
                nombreAlumnaMasJoven=nombre;
                flagAlumnaMasJoven=false;
            }
            else if(edad<edadAlumnaMasJoven)
            {
                edadAlumnaMasJoven=edad;
                nombreAlumnaMasJoven=nombre;
            }
        }

        if(carrera!="Quimica")
        {
            if(flagPrimerEstudianteCursaMasMaterias==true)
            {
                cantidadMateriasEstudianteCursaMasMaterias=cantidadMaterias
                nombreEstudianteCursaMasMaterias=nombre;
                edadEstudianteCursaMasMaterias=edad;
                flagPrimerEstudianteCursaMasMaterias=false;
            }
            else if(cantidadMaterias>cantidadMateriasEstudianteCursaMasMaterias)
            {
                cantidadMateriasEstudianteCursaMasMaterias=cantidadMaterias
                nombreEstudianteCursaMasMaterias=nombre;
                edadEstudianteCursaMasMaterias=edad;
            }

        }

        
    }
    porcentajeFisica=contadorFisica/contador;
    porcentajeQuimica=contadorQuimica/contador;
    porcentajeSistemas=contadorSistemas/contador;


    if(flagPrimerMejorPromedioFisica!=true)
    {
        document.write("El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo)" + nombreMejorPromedioFisica);
    }
    else
    {
        document.write("No hay alumnos que estudien fisica" + nombreMejorPromedioFisica);
    }
    if(flagAlumnaMasJoven!=true)
    {
        document.write("El nombre de la alumna mas joven."+nombreAlumnaMasJoven);
    }
    else    
    {
        document.write("no hay alumnas");
    }
    
    
    
    if(porcentajeFisica!=0)
    {
        document.write("el porcentaje de alumnos de fisica es de : "+porcentajeFisica);
    }
    else
    {
        document.write("no hay alumnos de fisica");
    }
    if(porcentajeQuimica!=0)
    {
        document.write("el porcentaje de alumnos de quimica es de : "+porcentajeQuimica);
    }
    else
    {
        document.write("no hay alumnos de quimica");
    }if(porcentajeSistemas!=0)
    {
        document.write("el porcentaje de alumnos de sistema es de : "+porcentajeSistemas);
    }
    else
    {
        document.write("no hay alumnos de sistema");
    }

    if(flagPrimerEstudianteCursaMasMaterias!=true)
    {
        document.write("La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica: Nombre" + nombreEstudianteCursaMasMaterias + "edad" + edadEstudianteCursaMasMaterias);
    }
    else
    {
        document.write("no hay estudiantes de otra carrera que no sea Quimica");
    }
}
