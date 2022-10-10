
console.log ( "clase4 ok ")



// Hola ! Jugamos a Piedra papel o tijera ? y/n

 
// Pedir al usuario que elija 
/* 1 Piedra 
   2 Papel
   3 Tijera
*/
alert ("Jugamos a Piedra, papelo tijera?");

let opcionUsuario= prompt ("Elegí una opción 1 Piedra, 2 Papel o 3 Tijera");
 let opcionComputadora= Math.floor(Math.random() * (3 - 1 + 1)) + 1; 
 let nombreUsuario= "Vos"
 console.log (opcionUsuario);
 console.log (opcionComputadora);
 


 
 if (opcionUsuario == opcionComputadora){ document.write( "Empatamos, elegimos lo mismo"  );
 } else{
     switch (opcionUsuario) {

    case "1":
        if (opcionComputadora=="2" ) {
        document.write( "Perdiste " +  nombreUsuario + ", yo elegí Papel");
        break;}

        else {document.write( "Ganaste " +  nombreUsuario + ", yo elegí Tijera");
        break;    }

   case "2":
        if (opcionComputadora=="1" ) { document.write( "Ganaste " +  nombreUsuario + ", yo elegí Piedra");
        break;    }
        
        else {document.write( "Perdiste " +  nombreUsuario + ", yo elegí Tijera");
        break;    }

    case "3":
        if (opcionComputadora=="1" ) {document.write( "Perdiste " +  nombreUsuario + ", yo elegí Piedra");
        break;    }
        else {document.write( "Ganaste " +  nombreUsuario + ", yo elegí Papel");
        break; }   

        }
        
        }
