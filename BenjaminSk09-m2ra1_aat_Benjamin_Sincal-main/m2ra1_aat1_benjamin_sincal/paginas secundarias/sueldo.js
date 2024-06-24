var CalculadoraSueldo = /** @class */ (function () {
    function CalculadoraSueldo() {
        this.salario = 0;
        this.bonificacion = 0;
        this.comisiones = 0;
        this.ahorro = 0;
        this.iggs = 0;
        this.prestamos = 0;
        this.configurarEventos();
    }
    CalculadoraSueldo.prototype.configurarEventos = function () {
        var _this = this;
        var botonObtenerSueldo = document.getElementById('obtener-sueldo');
        botonObtenerSueldo.addEventListener('click', function () { return _this.calcularSueldo(); });
    };
    CalculadoraSueldo.prototype.calcularSueldo = function () {
        // Obtener valores de ingresos
        this.salario = parseFloat(document.getElementById('salario').value) || 0;
        this.bonificacion = parseFloat(document.getElementById('bonificacion').value) || 0;
        this.comisiones = parseFloat(document.getElementById('comisiones').value) || 0;
        // Calcular total ganado
        var totalGanado = this.salario + this.bonificacion + this.comisiones;
        document.getElementById('total-ganado-valor').textContent = totalGanado.toFixed(2).toString();
        // Obtener valores de egresos
        this.ahorro = parseFloat(document.getElementById('ahorro').value) || 0;
        this.iggs = parseFloat(document.getElementById('iggs').value) || 0;
        this.prestamos = parseFloat(document.getElementById('prestamos').value) || 0;
        // Calcular total descuentos
        var totalDescuentos = this.ahorro + this.iggs + this.prestamos;
        document.getElementById('total-descuentos-valor').textContent = totalDescuentos.toFixed(2).toString();
        // Calcular sueldo líquido
        var sueldoLiquido = totalGanado - totalDescuentos;
        document.getElementById('sueldo-liquido-valor').textContent = sueldoLiquido.toFixed(2).toString();
    };
    return CalculadoraSueldo;
}());
// Instanciar la calculadora al cargar la página
window.addEventListener('load', function () {
    new CalculadoraSueldo();
});
