export class Producto{
    private nombre:string;
    private categoria:string;
    private imagen:string;
    private idCategoria:number;
    private idProducto:number;

    public constructor(nombre:string,categoria:string,imagen:string,idCategoria:number=-1,idProducto:number=-1){
        this.nombre=nombre;
        this.categoria=categoria;
        this.imagen=imagen;
        this.idCategoria=idCategoria;
        this.idProducto=idProducto;
    }

    public getidCategoria(){
      return this.idCategoria;
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
    public getIdProducto(){
        return this.idProducto;
    }
    public setIdProducto(value){
        this.idProducto=value;
    }
}
