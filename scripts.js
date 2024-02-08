
 //Funciones ejercicio 1 
function calcularEjercicio1() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = Math.pow(num1, num2);
    document.getElementById('resultadoEjercicio1').innerText = 'El resultado es: ' + resultado;
  }
  //Funciones ejercicio 2
function calcularFahrenheit() {
  var gradosCelsius = parseFloat(document.getElementById('gradosCelsius').value);
  var gradosFahrenheit = (gradosCelsius * 9/5) + 32;
  document.getElementById('resultadoFahrenheit').innerText = 'Grados Fahrenheit: ' + gradosFahrenheit.toFixed(2);
}

//Funciones ejercicio 3
var nombres = []; // Array para almacenar los nombres

function agregarNombre() {
  var nombreInput = document.getElementById('nombre');
  var nombre = nombreInput.value.trim();

  if (nombre !== "") {
    nombres.push(nombre);
    actualizarListaNombres();
    nombreInput.value = ''; // Limpiar el input después de agregar
  }
}

function actualizarListaNombres() {
  var listaNombres = document.getElementById('listaNombres');
  listaNombres.innerHTML = '';

  nombres.forEach(function(nombre) {
    var li = document.createElement('li');
    li.textContent = nombre;
    listaNombres.appendChild(li);
  });
}

function filtrarNombres() {
  var numLetras = parseInt(document.getElementById('numLetras').value);
  var listaFiltrada = document.getElementById('listaFiltrada');
  listaFiltrada.innerHTML = '';

  var nombresFiltrados = nombres.filter(function(nombre) {
    return nombre.length === numLetras;
  });

  nombresFiltrados.forEach(function(nombre) {
    var li = document.createElement('li');
    li.textContent = nombre;
    listaFiltrada.appendChild(li);
  });
}

//Funciones ejercicio 4
function calcularEdad() {
    var fechaNacimientoInput = document.getElementById('fechaNacimiento');
    var fechaNacimiento = fechaNacimientoInput.value.trim();
  
    // Verificar que la fecha tiene el formato correcto
    var regexFecha = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!regexFecha.test(fechaNacimiento)) {
      alert('Por favor, ingresa la fecha en formato DD/MM/YYYY.');
      return;
    }
  
    // Obtener año, mes y día de la fecha de nacimiento
    var partesFecha = fechaNacimiento.split('/');
    var anoNacimiento = parseInt(partesFecha[2], 10);
    var mesNacimiento = parseInt(partesFecha[1], 10) - 1; // Restar 1 ya que los meses comienzan desde 0
    var diaNacimiento = parseInt(partesFecha[0], 10);
  
    // Crear un objeto de fecha con la fecha de nacimiento
    var fechaNacimientoObj = new Date(anoNacimiento, mesNacimiento, diaNacimiento);
  
    // Obtener la fecha actual
    var fechaActual = new Date();
  
    // Calcular la diferencia en años
    var edad = fechaActual.getFullYear() - fechaNacimientoObj.getFullYear();
  
    // Ajustar la edad si aún no ha pasado el cumpleaños de este año
    if (fechaActual.getMonth() < fechaNacimientoObj.getMonth() || 
        (fechaActual.getMonth() === fechaNacimientoObj.getMonth() && fechaActual.getDate() < fechaNacimientoObj.getDate())) {
      edad--;
    }
  
    // Mostrar el resultado
    document.getElementById('resultadoEdad').innerText = 'Edad: ' + edad + ' años';
  }

//Funciones ejercicio 5

function calcularNumeroPalabras() {
    var entradaHileraInput = document.getElementById('entradaHilera');
    var hilera = entradaHileraInput.value.trim();
  
    // Verificar si la hilera no está vacía
    if (hilera === "") {
      alert('Por favor, ingresa una hilera.');
      return;
    }
  
    // Dividir la hilera en palabras usando un espacio como delimitador
    var palabras = hilera.split(' ');
  
  
    // Mostrar el resultado
    document.getElementById('resultadoNumeroPalabras').innerText = 'Número de palabras: ' + palabras.length;
  }

//Ejercicio 6
  var numeros = []; // Array para almacenar los números

function agregarNumero() {
  var numeroInput = document.getElementById('numeroLista');
  var numero = parseFloat(numeroInput.value);

  // Verificar que el valor ingresado es un número válido
  if (!isNaN(numero)) {
    numeros.push(numero);
    actualizarListaNumeros();
    numeroInput.value = ''; // Limpiar el input después de agregar
  } else {
    alert('Por favor, ingresa un número válido.');
  }
}

function actualizarListaNumeros() {
  var listaNumeros = document.getElementById('listaNumeros');
  listaNumeros.innerHTML = '';

  numeros.forEach(function(numero) {
    var li = document.createElement('li');
    li.textContent = numero;
    listaNumeros.appendChild(li);
  });
}

function calcularPromedio() {
  var resultadoPromedio = document.getElementById('resultadoPromedio');
  
  if (numeros.length === 0) {
    resultadoPromedio.innerText = 'No hay números en la lista.';
    return;
  }

  var suma = numeros.reduce(function(acc, numero) {
    return acc + numero;
  }, 0);

  var promedio = suma / numeros.length;

  resultadoPromedio.innerText = 'Promedio: ' + promedio.toFixed(2);
}

//Ejercicio 7
function mostrarColor() {
    var colorInput = document.getElementById('colorInput').value;
    var colorBox = document.getElementById('colorBox');
    
    colorBox.style.backgroundColor = colorInput;
  }