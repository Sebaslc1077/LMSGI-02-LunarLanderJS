# LMSGI-02-LunarLanderJS

Imagenes optimizadas previamente con IMG Resizer, editadas photoshop para representar diferentes estados de la nave.

Al cambiar el estado de la nave, tambien cambia la aceleración. Si la nave se estrella, tambien cambia la imagen y recibimos otro prompt explicando que ha pasado y preguntado si deseamos probar de nuevo. Ante lo cual si respondemos que si, se reinicia la partida.

Simplemente añadimos un	document.getElementById("imgrocket").src="img/rocketON.png"; en la función que queramos utilizar para que se produzca el cambio de imagen, en este caso **motorOn**, hacemos lo mismo con **motorOff**

Si la nave aterriza con exito, recibimos un mensaje de felicitación y un mensaje que nos anima a probar el juego con la dificultad subida y un segundo prompt preguntando al jugador si desea probar de nuevo.

Creamos una función para el alunizaje, ponemos un condicional if para que solo se produzca un aterrizaje correcto cuando se cumpla condición respecto a la velocidad, un alert para felicitar al jugador y animalo a probar otra dificultad y si por el contrario no se cumple la condicion (else), cambiamos la imagen a una nave destruida/explosion, y que muestre otro mensaje explicando que ha pasado, y un segundo prompt preguntando al jugador si desea probar de nuevo

Menus editados para incluir botones y redirigir a diferentes HTML, codigo editado para mostrar un prompt que avisa de que para acceder a dichos html se tiene que abandonar la partida.

Cambiamos ligeramente el codigo para incluir los botones en el desplegable y que apunten a una función que previamente hemos creado que redirige a diferentes html, no si antes avisar al jugador de que para visitar dichas paginas es necesario abandonar la partida.

Botones de dificultad que cambian la velocidad predeterminada de la nave.


**Bibliografia**

Recordatorio de sintaxis.
https://www.w3schools.com/js/js_popup.asp

Arreglaba algo y rompia otra cosa.
https://text-compare.com/
