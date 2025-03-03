import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,AfterViewInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.cargarScripts();
  }

  cargarScripts() {
    const scripts = [
      'assets/js/main.js',
      'assets/js/plugins.js'
    ];
    
    scripts.forEach(scriptUrl => {
      const script = document.createElement('script');
      script.src = scriptUrl;
      script.async = true;
      document.body.appendChild(script);
    });
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
