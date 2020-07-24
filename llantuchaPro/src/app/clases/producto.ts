export class Producto{
    private nombre:string;
    private categoria:string;
    private imagen:string;
    private idCategoria:number;


    public constructor(nombre:string,categoria:string,imagen:string,idCategoria:number){
        this.nombre=nombre;
        this.categoria=categoria;
        this.imagen=imagen;
        this.idCategoria=idCategoria;
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
}
