
function CuentaBancaria (nombre, numeroDeCuenta, apellido){
    this.nombre = nombre,
    this.numeroDeCuenta = numeroDeCuenta,
    this.apellido = apellido,
    this.saldo = 20,
    this.movimientos = [],

    this.nombreUsuario = () => `${this.nombre} ${this.apellido}`,

    this.debitar = (aDebitar) => { 
        if(this.saldo > aDebitar){
            this.saldo -= aDebitar;
            //console.log("Saldo a debitar: " + aDebitar);
            this.movimientos.push({tipo: "Debito", plata: aDebitar });
            console.log ("Saldo actual" + this.saldo);
        
        } else {
            console.log ("No es suficiente el saldo para debitar");  
        }
    } 
    this.acreditar = (aAcreditar) => {
        this.saldo +=aAcreditar;
        this.movimientos.push ({tipo: "Credito", plata: aAcreditar});
        console.log ("Se acreditaron " + aAcreditar);
    }

    this.saldoActual = () => {
        console.log ("Saldo Actual: " +this.saldo);
    }

    


}

let primerUsuario = new CuentaBancaria ("Florentina", "5443", "Blanco Rios");
console.log (primerUsuario.nombreUsuario());
primerUsuario.debitar(10);
primerUsuario.acreditar(200);
primerUsuario.saldoActual();
console.log (primerUsuario.movimientos);
console.log (primerUsuario.movimientosDebito);
const movimientosTotales = primerUsuario.movimientos;
const movimientosDebito = movimientosTotales.filter((mov)=> mov.tipo==="Debito");
console.log (movimientosDebito); 









/* let cuentaBancaria = {

    nombre : "Florentina",
    numeroDeCuenta : "33433",
    apellido : "Blanco Rios",
    saldo : 0,
    movimientos : [],
    mostrarNombreCompleto : function () {
        return "Nombre Completo" + this.nombre + this.apellido;
    }

}
*/
