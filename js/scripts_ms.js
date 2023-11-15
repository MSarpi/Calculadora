let totalOperacion = 0;
let almacenamiento = "0";
let operador;

const resultado = document.querySelector('.calc');

function bottonClick(value){ 
	if(isNaN(value)){
		Simbolo(value);
	}else{
		numero(value);
	}
	resultado.innerText = almacenamiento;
}

function Simbolo(sim) {
	switch(sim){
		case 'C':
			almacenamiento = '0';
			totalOperacion = 0;
			break;

		case '=':
			if (operador === null) {
				return;
			}
			if (almacenamiento === '0' ){
				totalOperacion = 0;
			}
			operacionMat(parseInt(almacenamiento));
			operador = null;
			almacenamiento = totalOperacion;
			totalOperacion = 0;
			break;

		case '<':
			if (almacenamiento.length === 1) {
				almacenamiento = "0";
			}else{
				almacenamiento = almacenamiento.substring(0, almacenamiento.length - 1);
			}
			break;

		case '+':
		case '-':
		case 'x':
		case '/':
			operacionMat(sim);
			break;
	}
}

function operacionMat(sim) {
	if(almacenamiento === '0'){
		return;
	}

	const numAlmacenamiento = parseInt(almacenamiento);

	if (totalOperacion === 0) {
		totalOperacion = numAlmacenamiento;
	}else{
		operacionSimbol(numAlmacenamiento);
	}

	operador = sim;
	almacenamiento = '0';
}

function operacionSimbol(numAlmacenamiento) {
	
	if (operador === '+') {
		totalOperacion += numAlmacenamiento;
	}else 

	if(operador === '-') {
		totalOperacion -= numAlmacenamiento;
	}else 

	if(operador === 'x') {
		totalOperacion *= numAlmacenamiento;
	}else 

	if(operador === '/') {
		totalOperacion /= numAlmacenamiento;
	}
}

function numero(num) {
	if (almacenamiento === "0") {
		almacenamiento = num;
	}else{
		almacenamiento += num;
	}
}

function iniciar() {
	document.querySelector('.boton-calculadora').
		addEventListener('click', function (event){
			bottonClick(event.target.innerText);
	})
}

iniciar();