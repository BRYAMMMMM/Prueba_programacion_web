export class Libro {
    UsuarioId?: number;
    nombre: string;
    apellido: string;
    direccion: string;
    consumo: string;
    deuda: string;

  
    constructor(UsuarioId: number, nombre: string, apellido: string, direccion: string, consumo: string, deuda: string) {
        this.UsuarioId = UsuarioId;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.consumo = consumo;
        this.deuda = deuda;
      
    }
}