export class Producto{
    private nombre:string;
    private categoria:string;
    private imagen:string;
    private cantidad: number;

    public constructor(nombre:string,categoria:string,imagen:string,cantidad:number=0){
        this.nombre=nombre;
        this.categoria=categoria;
        this.imagen=imagen;
        this.cantidad=cantidad;
    }

    public getNombre(){
        return this.nombre;
    }

    public getCategoria(){
        return this.categoria;
    }

    public getImagen(){
        return this.imagen;
    }

    public getCantidad(){
        return this.cantidad;
    }

    public incrementarCantidad(cantidad:number){
        this.cantidad+=cantidad;
    }
}