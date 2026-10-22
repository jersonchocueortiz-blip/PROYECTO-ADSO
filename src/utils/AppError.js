export class AppError extends Error {
    constructor(mensaje, estado = 500, detalles = undefined) {
     super(mensaje);
     this.estado = estado;
     this.detalles = detalles;
    }    
}