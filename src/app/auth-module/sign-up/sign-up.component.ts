import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthServiceService } from 'src/app/model/services/auth-service.service';
import { NgForm } from '@angular/forms';
import { UserRegisterDto } from 'src/app/model/UserRegisterDto';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {

  constructor(private authService: AuthServiceService) { }

  ngOnInit() {
  }
  public userRegisterDtoModel: UserRegisterDto = new UserRegisterDto();
  public informationMessage:string 

  signUp(signUpForm: NgForm) {

    this.authService.signUp(this.userRegisterDtoModel).subscribe( (answer:boolean)=>{
      if(answer){ // eğer doğru ise üyelik başarılı
        this.informationMessage = "Tebrikler, başarıyla üye oldunuz"
      }
      else{ // üye olma başarısız
        this.informationMessage = "Üzgünüz, bir sorun oluştu."
      }
    })
    
  }

}
