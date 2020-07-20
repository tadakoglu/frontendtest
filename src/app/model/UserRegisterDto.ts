export class UserRegisterDto {
    public Name: string
    public LastName: string
    public Email: string
    public Password: string
    public ConfirmPassword: string
    /**
     *
     */
    constructor() {
        this.Name=null;
        this.LastName=null;
        this.Email=null;
        this.Password=null;
        this.ConfirmPassword=null;
        
    }
}
