function Primero() {
    let num1 = 1
    let num2 = 2
    let suma = num1 + num2
    let resta = num1 - num2
    let division = num1 / num2
    let multiplicacion = num1 * num2
    let modulo = num1 % num2

    num1 = parseInt(prompt("Ingrese un número 1"))
    while (num1 <= 0) {
        num1 = parseInt(prompt("Ingrese un número 1 nuevamente"))
    }

    num2 = parseInt(prompt("Ingrese un segundo número 2, mayor que 0 y diferente que " + num1))
    alert(num2)

    if ((num2 > 0) && (num1 != num2)) {
        document.getElementById('Primerapregunta').innerHTML="ambos números cumplen, numero 1 es :" + num1 + ", y número 2 es :" + num2 + "<br>"
        document.getElementById('Primerapregunta').innerHTML="Suma= "+suma + ", Resta= " + resta + " Division= " + division + " Multiplicación= " + multiplicacion + " Módulo= " + modulo
    }
    else {
        while (num2 <= 0) {
            num2 = parseInt(prompt("Número 2 debe ser mayor que 0, Ingrese un número 2 nuevamente"))
            if ((num2 > 0) && (num1 != num2)) {
                document.getElementById('Primerapregunta').innerHTML="ambos números cumplen, numero 1 es :" + num1 + ", y número 2 es :" + num2 + "<br>"
                document.getElementById('Primerapregunta').innerHTML="Suma= "+suma + ", Resta= " + resta + " Division= " + division + " Multiplicación= " + multiplicacion + " Módulo= " + modulo
            }
        }
        while (num2 == num1) {
            num2 = parseInt(prompt("Número 2 debe ser diferente que " + num1 + ", Ingrese un número 2 nuevamente segundo while" + num1))
            while (num2 <= 0) {
                num2 = parseInt(prompt("Ingrese un número 2 nuevamente segundo sub-while" + num1))
            }
            if ((num2 > 0) && (num1 != num2)) {
                document.getElementById('Primerapregunta').innerHTML="ambos números cumplen, numero 1 es :" + num1 + ", y número 2 es :" + num2 + "<br>"
                document.getElementById('Primerapregunta').innerHTML="Suma= "+suma + ", Resta= " + resta + " Division= " + division + " Multiplicación= " + multiplicacion + " Módulo= " + modulo
            }
        }

    }
}

function segunda() {
    let celcius = parseFloat(0.0)
    let faren = parseFloat(0.0)
    let kelvin = parseFloat(0.0)

    celcius = parseFloat(prompt("Ingrese celcius"))
    Kelvin = (celcius + 273.15)
    faren = celcius * (9 / 5) + 32

    document.getElementById('Segundapregunta').innerHTML=celcius + " corresponde a :" + Kelvin + " grados Kelvin, y " + faren + " grados farenheit"

}


function tercera() {

    dias = parseInt(prompt("Ingrese cantidad de dias"))
    let diferenciaAnos = parseFloat(dias % 365)
    let diferenciaMeses = parseFloat(diferenciaAnos % 30)
    let diferenciasemanas = parseFloat(diferenciaMeses % 7)

    let años = Math.trunc(dias / 365);
    let meses = Math.trunc(diferenciaAnos / 30);
    let semanas = Math.trunc(diferenciaMeses / 7)
    let jou = (diferenciasemanas)
    document.getElementById('Tercerapregunta').innerHTML=años + " años, " + meses + " meses, " + semanas + " semanas y " + jou + " dias. ";

}

function cuarta() {

    let nume1 = parseFloat(prompt("Ingrese el primer número"))
    let nume2 = parseFloat(prompt("Ingrese el primer número"))
    let nume3 = parseFloat(prompt("Ingrese el primer número"))
    let nume4 = parseFloat(prompt("Ingrese el primer número"))
    let nume5 = parseFloat(prompt("Ingrese el primer número"))

    let sumas = (nume1 + nume2 + nume3 + nume4 + nume5)
    let promedio = (sumas / 5)
    document.getElementById('Cuartapregunta').innerHTML="La suma de los números es: " + sumas + " y el promedio es : " + promedio


}
