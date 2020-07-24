export class Item{
    private nombre:string;
    private cantidad:number;
    private precio;

    public constructor(nombre,cantidad,precio){
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.precio=precio;
    }
    public getNombre(){
        return this.nombre;
    }
    public setNombre(value){
        this.nombre=value;
    }
    public getCantidad(){
        return this.cantidad;
    }
    public setCantidad(value){
        this.cantidad=this.cantidad;
    }
    public getPrecio(){
        return this.precio;
    }
    public setPrecio(value){
        this.precio=this.precio;
    }
}