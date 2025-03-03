import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';



import { finalize, map, Observable } from 'rxjs';

export interface Canciones {
  // id: string,
  author: string,
  requeriments: string,
  title: string
  image: string
  link_video: string

}


export type placeCreate = Omit<Canciones, 'id'>
const PATH = 'ordenes';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(
    private http: HttpClient,
    private _firestore: AngularFirestore,
    private storage: AngularFirestore
  ) { }

  create(lugar: Canciones) {
    console.log('lugar ----->', lugar);
    return this._firestore.collection(PATH).add(lugar)
  }

  getPlaces() {
    return this._firestore.collection(PATH).snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as { title: string; description: string }; // Extrae los datos
          const id = a.payload.doc.id; // Obtén el ID del documento si lo necesitas
          return { id, ...data }; // Devuelve solo lo que necesitas
        })
      )
    );;
  }
}
