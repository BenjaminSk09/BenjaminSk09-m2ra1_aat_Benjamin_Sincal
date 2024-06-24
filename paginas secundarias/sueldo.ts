class CalculadoraSueldo {
    private salario: number = 0;
    private bonificacion: number = 0;
    private comisiones: number = 0;
    private ahorro: number = 0;
    private iggs: number = 0;
    private prestamos: number = 0;

    constructor() {
        this.configurarEventos();
    }

    private configurarEventos() {
        const botonObtenerSueldo = document.getElementById('obtener-sueldo');
        botonObtenerSueldo.addEventListener('click', () => this.calcularSueldo());
    }

    private calcularSueldo() {
        // Obtener valores de ingresos
        this.salario = parseFloat((<HTMLInputElement>document.getElementById('salario')).value) || 0;
        this.bonificacion = parseFloat((<HTMLInputElement>document.getElementById('bonificacion')).value) || 0;
        this.comisiones = parseFloat((<HTMLInputElement>document.getElementById('comisiones')).value) || 0;

        // Calcular total ganado
        let totalGanado = this.salario + this.bonificacion + this.comisiones;
        document.getElementById('total-ganado-valor').textContent = totalGanado.toFixed(2).toString();

        // Obtener valores de egresos
        this.ahorro = parseFloat((<HTMLInputElement>document.getElementById('ahorro')).value) || 0;
        this.iggs = parseFloat((<HTMLInputElement>document.getElementById('iggs')).value) || 0;
        this.prestamos = parseFloat((<HTMLInputElement>document.getElementById('prestamos')).value) || 0;

        // Calcular total descuentos
        let totalDescuentos = this.ahorro + this.iggs + this.prestamos;
        document.getElementById('total-descuentos-valor').textContent = totalDescuentos.toFixed(2).toString();

        // Calcular sueldo líquido
        let sueldoLiquido = totalGanado - totalDescuentos;
        document.getElementById('sueldo-liquido-valor').textContent = sueldoLiquido.toFixed(2).toString();
    }
}

// Instanciar la calculadora al cargar la página
window.addEventListener('load', () => {
    new CalculadoraSueldo();
});
