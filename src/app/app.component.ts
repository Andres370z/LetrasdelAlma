import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos'


declare var gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'letras-del-alma';
  constructor(private router: Router) {}
  
  ngOnInit() {
    AOS.init({
      duration: 1200, // Duración de la animación en milisegundos
      once: true // Si la animación debe ocurrir solo una vez
    });

    this.router.events.subscribe(event => {
      gtag('event', 'page_view', { page_path: this.router.url });
    });
  }
}
