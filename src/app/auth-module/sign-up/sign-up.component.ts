import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthServiceService } from 'src/app/model/services/auth-service.service';
import { NgForm } from '@angular/forms';
import { UserRegisterDto } from 'src/app/model/UserRegisterDto';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {

  constructor(private authService: AuthServiceService, private titleService: Title) {
    this.titleService.setTitle("LOGO - Kayıt ol")
  }

  ngOnInit() { }

  public userRegisterDtoModel: UserRegisterDto = new UserRegisterDto();
  public isAgreementChecked : boolean=false;
  public informationMessage: string

  public signUpStep = 1;
  public tab = 2; // Signup tab
  public modelSubmitted = false;

  signUp(signUpForm: NgForm) {
    console.log("ateşlendi")
    this.modelSubmitted = true;
    if (signUpForm.valid) {
      this.authService.signUp(this.userRegisterDtoModel).subscribe((answer: boolean) => {
        if (answer) { // eğer doğru ise üyelik başarılı
          this.informationMessage = "Tebrikler, başarıyla üye oldunuz."
          this.userRegisterDtoModel = new UserRegisterDto();
        }
        else { // üye olma başarısız
          this.informationMessage = "Üzgünüz, bir sorun oluştu, isteğinizi gerçekleştiremedik."
        }
      }, err => { 
        this.informationMessage = "Üzgünüz, bir sorun oluştu, isteğinizi gerçekleştiremedik." },
        () => this.modelSubmitted = false)

    }
  }


}
