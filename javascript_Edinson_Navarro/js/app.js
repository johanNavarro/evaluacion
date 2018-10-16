var Calculadora = {
	existeOp: "no",
	ultOp: "",
	cadena: "",

	init: function(){
		this.asignarEventoBtn('teclado')
	},

	asignarEventoBtn: function(selector){
		var teclas = document.querySelectorAll('.' + selector + ' img')
		for(i=0;i<teclas.length;i++){
			teclas[i].onclick = this.eventPresionarTecla;
			teclas[i].onmouseleave = this.eventSoltarTecla;
		}
	},

	eventPresionarTecla: function(event){
		if(event.target.id == "1" || event.target.id == "2" || event.target.id == "3"||  event.target.id == "4" || event.target.id == "5" || event.target.id == "6" || event.target.id == "7" || event.target.id == "8" || event.target.id == "9" || event.target.id == "0") {
			mostrarNumero(event.target.id);
			//return 0;
		}

		if(event.target.id == "on")
			limpiarPantalla();
		
		if(event.target.id == "punto")
			addPunto();
		
		if(event.target.id == "sign")
			addSigno();		

		if(event.target.id == "mas")
			sumar("+");
		
		if(event.target.id == "menos")
			restar("-");

		if(event.target.id == "por")
			multiplicar("*");

		if(event.target.id == "dividido")
			dividir("/");

		if(event.target.id == "igual")
			mostrarRespuesta();

		disminuirTecla(event.target);

	},

	eventSoltarTecla: function(event){
		aumentarTecla(event.target);
	}

}

function concatenarOperador(signo){
	if(Calculadora.cadena == 'XXX'){
		Calculadora.cadena = "";
		Calculadora.existeOp = "no";
	}
	if(Calculadora.existeOp == "no"){
		Calculadora.cadena = document.getElementById('display').innerHTML;
		Calculadora.existeOp = signo;
	} else {
		Calculadora.cadena = Calculadora.cadena + Calculadora.existeOp + document.getElementById('display').innerHTML;
		Calculadora.existeOp = signo;
	}
	document.getElementById('display').innerHTML = "";
}

function sumar(signo){
	concatenarOperador(signo);
}

function restar(signo){
	concatenarOperador(signo);
}

function multiplicar(signo){
	concatenarOperador(signo);
}

function dividir(signo){
	concatenarOperador(signo);
}

function mostrarRespuesta(){
	if(Calculadora.cadena == "")
		document.getElementById('display').innerHTML = "0";
	else if(Calculadora.cadena == 'XXX'){
			Calculadora.cadena = document.getElementById('display').innerHTML + Calculadora.ultOp;
			document.getElementById('display').innerHTML = actualizarResultado();
			Calculadora.cadena = 'XXX';
		}else{
				Calculadora.cadena = Calculadora.cadena + Calculadora.existeOp + document.getElementById('display').innerHTML;
				Calculadora.ultOp = Calculadora.existeOp + document.getElementById('display').innerHTML;
				document.getElementById('display').innerHTML = actualizarResultado();
				Calculadora.cadena = 'XXX';
		}
	
}

function actualizarResultado(){
	resultado = 0;
	resultado = eval(Calculadora.cadena);
	return resultado.toPrecision(4);
}


function limpiarPantalla(){
	var pantalla = document.getElementById('display');
	pantalla.innerHTML = "0";
	Calculadora.cadena = "";
	Calculadora.existeOp = "no";
}

function mostrarNumero(numero){
	var pantalla = document.getElementById('display');
	if (pantalla.innerHTML.length < 8){
		if(pantalla.innerHTML == "0" && numero != "0")
			pantalla.innerHTML = numero;
		else if(pantalla.innerHTML != "0")
			pantalla.innerHTML = pantalla.innerHTML + numero;
	}
}

function addSigno(){
	var pantalla = document.getElementById('display')
	if(pantalla.innerHTML[0] == "-")
		pantalla.innerHTML[0] = "";

	if(pantalla.innerHTML.length<7 && pantalla.innerHTML != "0")
		pantalla.innerHTML = "-" + pantalla.innerHTML;
}

function addPunto(){
	var existe = "1"
	var pantalla = document.getElementById('display')
	for(i=0;i<pantalla.innerHTML.length;i++){
		if (pantalla.innerHTML[i] == ".")
			existe = "0";
	}
	if(existe == "1" && pantalla.innerHTML.length < 6)
		pantalla.innerHTML = pantalla.innerHTML + ".";
}


function aumentarTecla(elementoDOM){
	elementoDOM.style.padding = "0px";
}

function disminuirTecla(elementoDOM){
	elementoDOM.style.padding = "4px";
}

Calculadora.init();
