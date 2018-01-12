
//ENTORNO
var g = 1.622;
var dt = 0.016683;
var timer=null;
var timerFuel=null;
//NAVE
var y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var c = 100;
var a = g; //la aceleración cambia cuando se enciende el motor de a=g a a=-g (simplificado)
//MARCADORES
var velocidad = null;
var altura = null;
var combustible = null;

//al cargar por completo la página...
window.onload = function(){
	
	velocidad = document.getElementById("velocidad");
	altura = document.getElementById("altura");
	combustible = document.getElementById("fuel");

	
	//definición de eventos
	//mostrar menú móvil
    	document.getElementById("showm").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "block";
		stop();
	}
	//ocultar menú móvil
	document.getElementById("hidem").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "none";
		start();
	}
	//encender/apagar el motor al hacer click en la pantalla
	document.onclick = function () {
 	  if (a==g){
  		motorOn();
 	  } else {
  		motorOff();
 	  }
	}
	//encender/apagar al apretar/soltar una tecla
	document.onkeydown = motorOn;
	document.onkeyup = motorOff;
	
	//Empezar a mover la nave justo después de cargar la página
	start();
}

//Definición de funciones
function start(){
	//cada intervalo de tiempo mueve la nave
	timer=setInterval(function(){ moverRocket(); }, dt*1000);
}

function stop(){
	clearInterval(timer);
}
function restart() {
	stop();
	start();
	document.getElementById("restart").style.display="none";
	document.getElementById("pause").style.display="inline-block";
}
function pause() {
	stop();
	document.getElementById("pause").style.display="none";
	document.getElementById("restart").style.display="inline-block";
}
function moverRocket(){
	//cambiar velocidad y posicion
	v +=a*dt;
	y +=v*dt;
	//actualizar marcadores
	velocidad.innerHTML=v;
	altura.innerHTML=y;
	
	//mover hasta que top sea un 70% de la pantalla
	if (y<70){ 
		//document.getElementById("rocket").style.top = y+"%"; 
		document.getElementsByClassName("center")[0].style.top = y+"%";

	} else { 
		stop();
	}
}
function motorOn(){
	//el motor da aceleración a la nave
	a=-g;
	//mientras el motor esté activado gasta combustible
	if (timerFuel==null)
	timerFuel=setInterval(function(){ actualizarFuel(); }, 10);	
	document.getElementById("rocket").src="img/rocketfire.gif";

}	
function motorOff(){
	a=g;
	clearInterval(timerFuel);
	timerFuel=null;
}
function actualizarFuel(){
	//Restamos combustible hasta que se agota
	c-=0.1;
	if (c < 0 ) c = 0;
	combustible.innerHTML=c;	
}
function landing()
{
	if (v <= 5){
		alert("¡Felicidades! Has conseguido alunizar con exito, serás capaz de hacerlo en modo dificil?"); restart();
	}else{
		document.getElementById("imgnave").src="img/navexplosion.png";
		setTimeout(function(){mostrarAviso()},500);
		function mostrarAviso(){
			alert("¡BOOM! Ibas demasiado rapido y la nave no ha podido aterrizar con exito."); reStart();
		}
	}	
}

function restart(){
	var r = confirm("¿Quieres intentarlo de nuevo?");
	if (r == true){
    	window.location="index.html";
	}else{
		stop();
	} 
}
