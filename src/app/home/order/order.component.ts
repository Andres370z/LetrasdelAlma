import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertsService } from 'src/app/services/alerts.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit { 
  public songs: any[] = [];
  private urlDwd: string = 'https://y2meta.tube/en/'
  constructor(
    private spinner: NgxSpinnerService,
    private _placeService: OrdersService,
    private router: Router,
    private alertService: AlertsService
  ) { }

  ngOnInit(): void {
    this.getPlacesDetail();
  }

  getPlacesDetail() {
    this._placeService.getPlaces().subscribe((res: any) => {
      setTimeout(() => {
        this.spinner.hide();
      }, 5000);
      console.log('Estos son tus datos: ---->', res);
      this.songs = res
    }, (error: any) => {
      this.spinner.hide();
      console.log('No logre hacerlo')
    })
  }

  copyEnd(url: string) {
    if (!url) {
      console.error("URL no válida");
      return;
    }
  
    // Intentar copiar la URL al portapapeles usando Clipboard API
    navigator.clipboard.writeText(url).then(() => {
      console.log("URL copiada al portapapeles:", url);
  
      // Redirigir a otra página después de copiar
      window.location.href = this.urlDwd;
    }).catch(err => {
      console.error("Error al copiar la URL:", err);
      
      // Si Clipboard API falla, usar un método alternativo (para navegadores antiguos)
      const textArea = document.createElement("textarea");
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
  
      console.log("URL copiada con método alternativo:", url);
  
      // Redirigir a otra página
      
      window.location.href = this.urlDwd;
    });
  }
  
}
