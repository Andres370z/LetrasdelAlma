import { Injectable, NgZone } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendEmailVerification,
  User,
  updateProfile
} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  UserData: any;
  constructor(
    public ngZone: NgZone,
    private auth: Auth,
    private router: Router
  ) { 
    /**
     * Escucha los cambios en el estado de autenticación del usuario. 
     * Si el usuario inicia sesión o cierra sesión, se ejecuta esta función. Este metodo es original de AngularFire
     * si el usuario esta autenticado Guarda los datos del usuario (user) 
     * en el atributo UserData y los almacena en el localStorage. Sì no esta autenticado lo que hace limpiar el local 
     */
    onAuthStateChanged(this.auth, (user: any) => {
      if (user) {
        this.UserData = user;
        localStorage.setItem('user', JSON.stringify(this.UserData));
        localStorage.setItem('isLog', 'true')
        JSON.parse(localStorage.getItem('user')!)
      } else {
        localStorage.setItem('isLog', 'false')
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });

  }


  login(email: string, pass: string) {
    return signInWithEmailAndPassword(this.auth, email, pass)
      .then((res: any) => {
        this.UserData = res.user;
        this.ngZone.run(() => {
          //his.router.navigate(['/dashboard']);

          console.log('SIRVE LOGIN ---> ', res);
          if(this.UserData && this.UserData.emailVerified === true){
            console.log('Usuario verificado');
            this.router.navigate(['pages/dashboard'])
          }else if(this.UserData && this.UserData.emailVerified === false){
            console.log('Solo falta verificar');
            
          } else {
            console.log('Solo falta verificar');

          }
        })
      }).catch((error) => {
        window.alert(error.message)
        console.log(error);
      })
  }

}
