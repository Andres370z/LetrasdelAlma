import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertsService } from 'src/app/services/alerts.service';
import { Canciones, OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public userForm: FormGroup;
  constructor(
    private _orderService: OrdersService,
    private fb: FormBuilder,
    private notificationsService: AlertsService
  ) { }

  ngOnInit(): void {
    this.myForm();
  }

  myForm() {
    this.userForm = this.fb.group({
      title: ['', Validators.compose([Validators.required, ])],
      requeriments: ['', Validators.compose([Validators.required,])],
      author: ['',Validators.compose([Validators.required])],
      image: ['',Validators.compose([Validators.required])],
      link_video: ['',Validators.compose([Validators.required])]
    })
  }

  onSubmit(form: any) {
    if (this.userForm.valid) {
      console.log('Este es form ----->', form);
      try {
        const { title, requeriments, author, image, link_video } = form
        const lugar: Canciones = {
          title: title,
          requeriments: requeriments,
          author: author,
          image: image,
          link_video: link_video
        }
        this._orderService.create(lugar).then((res: any) => {
          console.log(res);
        });
        console.log('Solicitud existosa');

        this.notificationsService.successfulRedirects('Cancion creada', 'revisa que este en el home', 'pages')
      } catch (error) {
        console.log('error --->', error);
        console.log('Solicitud Fallida');

        this.notificationsService.errorNotifi('Ups', 'Error en el envio')
      }
    } else {
      this.notificationsService.errorNotifi('Ups', 'Revisa que todos los campos incluyendo la imagen esten completos')
      console.log('Se daño', this.userForm.valid);
    }
  }
}
