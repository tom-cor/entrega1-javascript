alert("Estadisticas de edades");
let edades = new Array();
let input = ""

while("fin" != input)
{
    input = prompt("Ingrese un valor. Para finalizar, ingrese \"fin\"")
    if(input != "")
        edades.push(Number(input));
}
edades.pop();

let max = edades[0];
let min = edades[0];
let suma = 0;

edades.forEach(element => {
    suma += element;
    if(element >= max)
        max = element;
    else
        min = element;
});

let promedio = suma/edades.length;

alert(`Edad máxima registrada: ${max}\nEdad mínima registrada: ${min}\nEdad promedio: ${promedio}`);