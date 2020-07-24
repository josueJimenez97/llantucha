export class Producto{
    private nombre:string;
    private categoria:string;
    private imagen:string;


    public constructor(nombre:string,categoria:string,imagen:string){
        this.nombre=nombre;
        this.categoria=categoria;
        this.imagen=imagen;
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
