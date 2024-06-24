const formIndemnizacion = document.getElementById('form-indemnizacion') as HTMLFormElement;
const calcularIndemnizacionBtn = document.getElementById('calcular-indemnizacion') as HTMLButtonElement;
const totalIndemnizacionSpan = document.getElementById('total-indemnizacion') as HTMLSpanElement;

function calcularIndemnizacion(): void {
    // Obtener los valores ingresados en el formulario
    const sueldoBase = parseFloat((document.getElementById('sueldo-base') as HTMLInputElement).value);
    const aniosTrabajados = parseFloat((document.getElementById('anios-trabajados') as HTMLInputElement).value);
    const bono14Proporcional = parseFloat((document.getElementById('bono-14') as HTMLInputElement).value);
    const aguinaldoProporcional = parseFloat((document.getElementById('aguinaldo') as HTMLInputElement).value);
    const salarioPendiente = parseFloat((document.getElementById('salario-pendiente') as HTMLInputElement).value) || 0;
    const deudas = parseFloat((document.getElementById('deudas') as HTMLInputElement).value) || 0;


    const bono14Total = sueldoBase / 12 * aniosTrabajados;
    const aguinaldoTotal = sueldoBase / 12 * aniosTrabajados;
    const totalIndemnizacion = (sueldoBase * aniosTrabajados) + bono14Total + aguinaldoTotal + salarioPendiente - deudas;


    totalIndemnizacionSpan.textContent = totalIndemnizacion.toFixed(2).toString();
}


calcularIndemnizacionBtn.addEventListener('click', (event) => {
    event.preventDefault(); 
    calcularIndemnizacion(); 
});
