var formIndemnizacion = document.getElementById('form-indemnizacion');
var calcularIndemnizacionBtn = document.getElementById('calcular-indemnizacion');
var totalIndemnizacionSpan = document.getElementById('total-indemnizacion');
function calcularIndemnizacion() {
    // Obtener los valores ingresados en el formulario
    var sueldoBase = parseFloat(document.getElementById('sueldo-base').value);
    var aniosTrabajados = parseFloat(document.getElementById('anios-trabajados').value);
    var bono14Proporcional = parseFloat(document.getElementById('bono-14').value);
    var aguinaldoProporcional = parseFloat(document.getElementById('aguinaldo').value);
    var salarioPendiente = parseFloat(document.getElementById('salario-pendiente').value) || 0;
    var deudas = parseFloat(document.getElementById('deudas').value) || 0;
    var bono14Total = sueldoBase / 12 * aniosTrabajados;
    var aguinaldoTotal = sueldoBase / 12 * aniosTrabajados;
    var totalIndemnizacion = (sueldoBase * aniosTrabajados) + bono14Total + aguinaldoTotal + salarioPendiente - deudas;
    totalIndemnizacionSpan.textContent = totalIndemnizacion.toFixed(2).toString();
}
calcularIndemnizacionBtn.addEventListener('click', function (event) {
    event.preventDefault();
    calcularIndemnizacion();
});
