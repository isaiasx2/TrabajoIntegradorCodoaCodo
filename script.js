
let precioEstudiantes = 0.20;
let precioTrainee = 0.50;
let precioJunior = 0.85;
const precioTicket = 200;
const cantidad = document.querySelector('#cantidad');
const categoria = document.querySelector('#categoria');
const mostrarTotal = document.querySelector('#mostrarTotal')
const calcularTotal = document.querySelector('#calcularTotal');
const borraTodo = document.querySelector('#borrar');

function totalPagar(){
    let valorTotal = (cantidad.value)*precioTicket
    if(categoria.value == 1){
        valorTotal = (cantidad.value)*(precioTicket*precioEstudiantes)
    }   
    else if(categoria.value == 2){
        valorTotal = (cantidad.value)*(precioTicket*precioTrainee);
    }
    else if(categoria.value == 3){
        valorTotal = (cantidad.value)*(precioTicket*precioJunior);
    }else{
        valorTotal = valorTotal
    }
    
    mostrarTotal.innerHTML = `El total a pagar es: $${valorTotal}`;
    swal(`El valor total es: $${valorTotal}`)
}
function borrarPrecio(){
    mostrarTotal.innerHTML= "EL total a pagar es: "
}
calcularTotal.addEventListener('click', totalPagar);
borraTodo.addEventListener('click', borrarPrecio);
