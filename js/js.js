
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
//FUNCION QUE ACTUA EN CUANTO SE ENCIENDE EL MOTOR
function encenderMotor() {
	a=-g;
	document.getElementById("fuel").innerHTML=porcentajeGasolina();
	document.getElementById("fuel").style.color="rgb("+0+(100-porcentajeGasolina())+"%, 0%, 0%)";
	document.getElementById("imgMotor").style.display="block";
	if (timerFuel==null) { 
			timerFuel=setInterval(function(){ actualizarfuel(); }, 100);
			}
	if (combustible<=0) {
			apagarMotor();
			document.getElementById("fuel").innerHTML=0;
		}
}
