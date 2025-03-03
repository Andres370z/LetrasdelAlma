import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.hide();
  }
  
  navigate(ruta: string){
    this.router.navigate([ruta])
  }

  sendMail() {
    console.log('trabajando')
    const email = 'letrasdelalma777@gmail.com'
    window.location.href = `mailto:${email}`

  }
  
}
