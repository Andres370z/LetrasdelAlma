import { Injectable } from '@angular/core';

declare  var gtag : any ;
@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() { }

  trackEvent ( eventName: string , eventDetails: string , eventCategory: string ) { 
    gtag ( 'event' , eventName, { 
    // Tipo de evento - ejemplo: 'SCROLL_TO_TOP_CLICKED' 
    'event_category' : eventCategory, 
    // la etiqueta que se mostrará en el panel como el nombre del evento 
    'event_label' : eventName, 
    // una breve descripción de lo que sucedió 
    'value' : eventDetails 
    }) 
  } 
}
