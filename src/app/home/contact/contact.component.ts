import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertsService } from 'src/app/services/alerts.service';
import { SendMailService } from 'src/app/services/send-mail.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public userForm: FormGroup;
  constructor(
    private mailService: SendMailService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.myForm();
  }


  myForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.compose([Validators.required,])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      message: ['', Validators.compose([Validators.required])],
    })
  }

  onSubmit(form: any) {
    if (!this.userForm.controls['email'].valid) {
      this.toastr.error('Verifica el email', 'Ups', {
        timeOut: 3000,
      });
      return;
    }
    if (!this.userForm.valid) {
      this.toastr.error('Faltan campos por llenar', 'Ups', {
        timeOut: 3000,
      });
      return;
    }
    
    this.spinner.show();

    setTimeout(() => {
      const { name, email, message } = form;
      const mail: any = { name, email, message };

      this.mailService.sendEmail(mail).then((res: any) => {
        console.log('Correo enviado con éxito!', res);
        this.toastr.success('Mensaje enviado con éxito', '¡Éxito!');


        this.spinner.hide();
        this.router.navigate(['pages']);


      }).catch(error => {
        this.spinner.hide(); // Asegura que se oculte en caso de error
        this.toastr.error('Error en la peticion', 'Ups', {
          timeOut: 3000,
        });
        console.error('Error al enviar el correo:', error);
      });

    }, 5000);
  }



  

  
  
  
  sendMail() {
    console.log('trabajando')
    const email = 'letrasdelalma777@gmail.com'
    window.location.href = `mailto:${email}`

  }

}
