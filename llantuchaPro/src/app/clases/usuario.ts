export class Usuario{
    private user:string;
    private pass:string;

    public constructor(user,pass){
        this.user=user;
        this.pass=pass;
    }

    public getUser(){
        return this.user;
    }
    public getPass(){
        return this.pass;
    }
}