export class Opcion{
    private nombreOp:string;
    private ruta:string;
    private tieneRuta:boolean;

    public constructor(nombreOp,ruta,tieneRuta){
        this.nombreOp=nombreOp;
        this.ruta=ruta;
        this.tieneRuta=tieneRuta;
    }

    public getTieneRuta(){
        return this.tieneRuta;
    }
    public getNombreOp(){
        return this.nombreOp;
    }

    public getRuta(){
        return this.ruta;
    }
}