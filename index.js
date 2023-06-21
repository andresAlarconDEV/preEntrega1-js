const trmDolar = 4346;
const trmEuro = 4661;
const bienvenida = "BIENVENIDO AL SISTEMA DE CONVERSIÓN DE UNIDADES\n";
const menu = "Por favor escribe la opción de acuerdo al sistema de unidades que desear convertir:\n\n1 - Temperatura\n2 - Longitud\n3 - Moneda";
const noValor = "No se ingreso ningun valor";
let i = 0, test, celsius, kelvin, fahrenheit, metro, kilometro, milla, pesoCo, dolar, euro, repetir=true, opcionMenu, opcConversion, registro;
let historial = [];
while (repetir) {
    // if validar mensaje bienvenida
    menuOpc();
    // Verificar si se ingresó un número válido
    if (opcionMenu >= 1 && opcionMenu <= 3) {
        // Convertir la cantidad según la unidad de medida
        switch (opcionMenu) {
            case "1":
                opcConversion = prompt("Ingresa la opción de las unidades a convertir:\n\n1 - De Celsius a Fahrenheit\n2 - De Celsius a Kelvin\n3 - De Fahrenheit a Celsius\n"+
                "4 - De Fahrenheit a Kelvin\n5 - De Kelvin a Celsius\n6 - De Kelvin a Fahrenheit");
                temperatura(opcConversion);
                repetir = opcRepetir();
                break;
            case "2":
                opcConversion = prompt("Ingresa la opción de las unidades a convertir:\n\n1 - De Metros a Kilometros\n2 - De Metros a Millas\n3 - De Kilometros a Metros\n"+
                "4 - De Kilometros a Millas\n5 - De Millas a Metros\n6 - De Millas a Kilometros");
                longitud(opcConversion);
                repetir = opcRepetir();
                break;
            case "3":
                opcConversion = prompt("Ingresa la opción de las unidades a convertir:\n\n1 - De Pesos colombianos a Dolar\n2 - De Pesos colombianos a Euro\n3 - De Dolar a Pesos colombianos\n"+
                "4 - De Dolar a Euro\n5 - De Euro a Pesos colombianos\n6 - De Euro a Dolar");
                moneda(opcConversion);
                repetir = opcRepetir();
                break;
            default:
                alert("Opción Invalida, intenta nuevamente");
        }
    } else {
        repetir= false;
        alert("Gracias por usar nuestro servicio de conversión");
        break;
    }
}




/////////////
//FUNCIONES//
/////////////
function menuOpc() {
    if (i == 0) {
        opcionMenu = prompt(bienvenida + "\n" +menu);
    } else {
        opcionMenu = prompt(menu);
    }
    return opcionMenu;
}

function temperatura(opcConversion) {
    let valor, valorConver;
    switch (opcConversion){
        case "1":
            valor = parseInt(prompt("ingrese el valor Celsius a convertir"));
            if(valor){
            valorConver = convertirCelsiusAFahrenheit(valor);
            alert(valor + " Celsius son " + valorConver + " Fahrenheit");
            registroHistorial("temperatura",valor,"Celsius",valorConver,"Fahrenheit");
            agregarFila();
            } else {
            alert(noValor);
            }
            break;
        case "2":
            valor = parseInt(prompt("ingrese el valor Celsius a convertir"));
            if(valor){
            valorConver = convertirCelsiusAKelvin(valor);
            alert(valor + " Celsius son " + valorConver + " Kelvin");
            registroHistorial("temperatura",valor,"Celsius",valorConver,"Kelvin");
            agregarFila();
            } else {
            alert(noValor);
            }
            break;
        case "3":
            valor = parseInt(prompt("ingrese el valor Fahrenheit a convertir"));
            if(valor){
            valorConver = convertirFahrenheitACelsius(valor);
            alert(valor + " Fahrenheit son " + valorConver + " Celsius");
            registroHistorial("temperatura",valor,"Fahrenheit",valorConver,"Celsius");
            agregarFila();
            } else {
            alert(noValor);
            }
            break;
        case "4":
            valor = parseInt(prompt("ingrese el valor Fahrenheit a convertir"));
            if(valor){
            valorConver = convertirFahrenheitAKelvin(valor);
            alert(valor + " Fahrenheit son " + valorConver + " Kelvin");
            registroHistorial("temperatura",valor,"Fahrenheit",valorConver,"Kelvin");
            agregarFila();
            } else {
            alert(noValor);
            }
            break;
        case "5":
            valor = parseInt(prompt("ingrese el valor Kelvin a convertir"));
            if(valor){
            valorConver = convertirKelvinACelsius(valor);
            alert(valor + " Kelvin son " + valorConver + " Celsius");
            registroHistorial("temperatura",valor,"Kelvin",valorConver,"Celsius");
            agregarFila();
            } else {
            alert(noValor);
            }
            break;
        case "6":
            valor = prompt("ingrese el valor Kelvin a convertir");
            if(valor){
            valorConver = convertirKelvinAFahrenheit(valor);
            alert(valor + " Kelvin son " + valorConver + " Fahrenheit");
            registroHistorial("temperatura",valor,"Kelvin",valorConver,"Fahrenheit");
            agregarFila();
            } else {
            alert(noValor);
            }
            break;
        default:
            alert("Opción Invalida, intenta nuevamente");
    }
}

function longitud(opcConversion) {
    let valor, valorConver;
    switch (opcConversion){
        case "1":
            valor = parseInt(prompt("ingrese el valor de metros a convertir"));
            if(valor){
            valorConver = convertirMetroAKilometro(valor);
            alert(valor + " metros son " + valorConver + " kilometros");
            registroHistorial("longitud",valor,"metros",valorConver,"kilometros");
            agregarFila();
            } else {
            alert(noValor);
            }
            break;
        case "2":
            valor = parseInt(prompt("ingrese el valor de metros a convertir"));
            if(valor){
            valorConver = convertirMetroAMilla(valor);
            alert(valor + " metros son " + valorConver + " millas");
            registroHistorial("longitud",valor,"metros",valorConver,"millas");
            agregarFila();
            } else {
            alert(noValor);
            }
            break;
        case "3":
            valor = parseInt(prompt("ingrese el valor de kilometros a convertir"));
            if(valor){
            valorConver = convertirKilometroAMetro(valor);
            alert(valor + " kilometros son " + valorConver + " metros");
            registroHistorial("longitud",valor,"kilometros",valorConver,"metros");
            agregarFila();
            } else {
            alert(noValor);
            }
            break;
        case "4":
            valor = parseInt(prompt("ingrese el valor de kilometros a convertir"));
            if(valor){
            valorConver = convertirKilometroAMilla(valor);
            alert(valor + " kilometros son " + valorConver + " millas");
            registroHistorial("longitud",valor,"kilometros",valorConver,"millas");
            agregarFila();
            } else {
            alert(noValor);
            }
            break;
        case "5":
            valor = parseInt(prompt("ingrese el valor de millas a convertir"));
            if(valor){
            valorConver = convertirMillaAMetro(valor);
            alert(valor + " millas son " + valorConver + " metros");
            registroHistorial("longitud",valor,"millas",valorConver,"metros");
            agregarFila();
            } else {
            alert(noValor);
            }
            break;
        case "6":
            valor = prompt("ingrese el valor de millas a convertir");
            if(valor){
            valorConver = convertirMillaAKilometro(valor);
            alert(valor + " millas son " + valorConver + " kilometros");
            registroHistorial("longitud",valor,"millas",valorConver,"kilometros");
            agregarFila();
            } else {
            alert(noValor);
            }
            break;
        default:
            alert("Opción Invalida, intenta nuevamente");
    }
}

function moneda(opcConversion) {
    let valor, valorConver;
    switch (opcConversion){
        case "1":
            valor = parseInt(prompt("ingrese el valor de pesos colombianos a convertir"));
            if(valor){
            valorConver = convertirPesoCOADolar(valor);
            alert(valor + " pesos colombianos son " + valorConver + " dolares");
            registroHistorial("moneda",valor,"pesos colombianos",valorConver,"dolares");
            agregarFila();
            } else {
            alert(noValor);
            }
            break;
        case "2":
            valor = parseInt(prompt("ingrese el valor de pesos colombianos a convertir"));
            if(valor){
            valorConver = convertirPesoCOAEuro(valor);
            alert(valor + " pesos colombianos son " + valorConver + " euros");
            registroHistorial("moneda",valor,"pesos colombianos",valorConver,"euros");
            agregarFila();
            } else {
            alert(noValor);
            }
            break;
        case "3":
            valor = parseInt(prompt("ingrese el valor de dolares a convertir"));
            if(valor){
            valorConver = convertirDolarAPesoCO(valor);
            alert(valor + " dolares son " + valorConver + " pesos colombianos");
            registroHistorial("moneda",valor,"dolares",valorConver,"pesos colombianos");
            agregarFila();
            } else {
            alert(noValor);
            }
            break;
        case "4":
            valor = parseInt(prompt("ingrese el valor de dolares a convertir"));
            if(valor){
            valorConver = convertirDolarAEuro(valor);
            alert(valor + " dolares son " + valorConver + " euros");
            registroHistorial("moneda",valor,"dolares",valorConver,"euros");
            agregarFila();
            } else {
            alert(noValor);
            }
            break;
        case "5":
            valor = parseInt(prompt("ingrese el valor de euros a convertir"));
            if(valor){
            valorConver = convertirEuroAPesoCO(valor);
            alert(valor + " euros son " + valorConver + " pesos colombianos");
            registroHistorial("moneda",valor,"euros",valorConver,"pesos colombianos");
            agregarFila();
            } else {
            alert(noValor);
            }
            break;
        case "6":
            valor = prompt("ingrese el valor de euros a convertir");
            if(valor){
            valorConver = convertirEuroADolar(valor);
            alert(valor + " euros son " + valorConver + " dolares");
            registroHistorial("moneda",valor,"euros",valorConver,"dolares");
            agregarFila();
            } else {
            alert(noValor);
            }
            break;
        default:
            alert("Opción Invalida, intenta nuevamente");
    }
}

////// FUNCIONES TEMPERATURA

// Función para convertir grados Celsius a grados Fahrenheit
function convertirCelsiusAFahrenheit(celsius) {
    fahrenheit = (celsius * 1.8) + 32;
    return fahrenheit;
}

// Función para convertir grados Celsius a grados Kelvin
function convertirCelsiusAKelvin(celsius) {
    kelvin = celsius + 273.15;
    return kelvin;
}

// Función para convertir grados Fahrenheit a grados Celsius
function convertirFahrenheitACelsius(fahrenheit) {
    celsius = (fahrenheit - 32) * 1.8;
    return celsius;
}

// Función para convertir grados Fahrenheit a grados Kelvin
function convertirFahrenheitAKelvin(fahrenheit) {
    kelvin = (fahrenheit - 32) * 1.8;
    return kelvin;
}

// Función para convertir grados Kelvin a grados Celsius
function convertirKelvinACelsius(kelvin) {
    celsius = kelvin - 273.15;
    return celsius;
}

// Función para convertir grados Kelvin a grados Kelvin
function convertirKelvinAFahrenheit(kelvin) {
    fahrenheit = (kelvin - 273.15) * 1.8 + 32;
    return fahrenheit;
}


////// FUNCIONES LONGITUD
// Función para convertir Metro a Kilometro
function convertirMetroAKilometro(metro) {
    kilometro = metro / 1000;
    return kelvin;
}

// Función para convertir Metro a Milla
function convertirMetroAMilla(metro) {
    milla = metro / 1609;
    return milla;
}

// Función para convertir Kilometro a Metro
function convertirKilometroAMetro(kilometro) {
    metro = kilometro * 1000;
    return metro;
}

// Función para convertir Kilometro a Metro
function convertirKilometroAMilla(kilometro) {
    milla = kilometro / 1.609;
    return milla;
}

// Función para convertir Milla a Metro
function convertirMillaAMetro(milla) {
    metro = milla * 1609;
    return metro;
}

// Función para convertir Milla a Kilometro
function convertirMillaAKilometro(milla) {
    kilometro = milla * 1.609;
    return kilometro;
}

// Función para convertir PesoCo a Dolar
function convertirPesoCOADolar(pesoCo) {
    dolar = pesoCo / trmDolar;
    return dolar;
}

// Función para convertir PesoCo a Euro
function convertirPesoCOAEuro(pesoCo) {
    euro = pesoCo / trmEuro;
    return euro;
}

// Función para convertir Dolar a PesoCo
function convertirDolarAPesoCO(dolar) {
    pesoCo = dolar * trmDolar;
    return pesoCo;
}

// Función para convertir Dolar a Euro
function convertirDolarAEuro(dolar) {
    euro = dolar * 0.93;
    return euro;
}

// Función para convertir Euro a PesoCo
function convertirEuroAPesoCO(euro) {
    pesoCo = euro * trmEuro;
    return pesoCo;
}

// Función para convertir Euro a Dolar
function convertirEuroADolar(euro) {
    dolar = euro * 1.07;
    return dolar;
}

function opcRepetir() {
    let repetir = prompt("desea realizar una nueva conversión?\n\n1 - Continuar\n2 - Salir");
    i++;
    if (repetir==1) {
        repetir = true;
        return repetir;
    } else {
        repetir = false;
        alert("Gracias por usar nuestro servicio de conversión");
        console.log(historial)
        return repetir;
    }
    
}

function registroHistorial(opcion,valorInicial,unidadInicial,valorConversion,unidadConver) {
    if (opcion=='temperatura') {
        icono = "./iconos/temperatura.png";
    } else if (opcion=="longitud"){
        icono = "./iconos/longitud.png";
    } else if (opcion=="moneda"){
        icono = "./iconos/monedas.png";
    } else {
        icono = "";
    }
    registro = {"icono":icono,"opcConversion":opcion,"valorInicial":valorInicial,"unidadInicial":unidadInicial,"valorConversion":valorConversion,"unidadConver":unidadConver};
    historial.push(registro);
    return historial;
}

function agregarFila() {
    let cantTemp = 0, cantLong = 0, cantMon = 0;
    document.getElementById('tablaHistorial').insertRow(-1).innerHTML = '<td><img src="'+historial[historial.length - 1].icono +
    '" class="imgIcono"></td><td>'+historial[historial.length - 1].opcConversion+'</td><td>'+historial[historial.length - 1].valorInicial+
    '</td><td>'+historial[historial.length - 1].unidadInicial+'</td><td>'+historial[historial.length - 1].valorConversion+'</td><td>'+historial[historial.length - 1].unidadConver+'</td>'
    cantTemp = contar('temperatura');
    cantLong = contar('longitud');
    cantMon = contar('moneda');
    document.getElementById('cantTemp').innerHTML = cantTemp;
    document.getElementById('cantLong').innerHTML = cantLong;
    document.getElementById('cantMon').innerHTML = cantMon;
    return;
}


function contar(opcion) {
    let cant = historial.filter(opc => opc.opcConversion==opcion).length;
    return cant;
}