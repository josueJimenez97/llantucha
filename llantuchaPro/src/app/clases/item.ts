export class Item{
    private nombrePro:string;
    private fabrica:string;
    private idProducto:number;
    private cantidad:number;
    private precio;

    public constructor(nombrePro,cantidad,precio,fabrica,idProducto){
        this.nombrePro=nombrePro;
        this.fabrica=fabrica;
        this.idProducto=idProducto;
        this.cantidad=cantidad;
        this.precio=precio;
    }
    public getNombrePro(){
        return this.nombrePro;
    }
    public setNombrePro(value){
        this.nombrePro=value;
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

    public getFabrica(){
        return this.fabrica;
    }
    public setFabrica(value){
        this.fabrica=value;
    }
}