import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
@Injectable({
  providedIn: 'root'
})
export class SendMailService {
  private serviceID = 'service_5ryqmld';
  private templateID = 'template_rox4mii';
  private publicKey = 'dExDqeFCUIi5WpjPk';
  constructor() { }

  sendEmail(formData: any): Promise<EmailJSResponseStatus> {
    return emailjs.send(this.serviceID, this.templateID, formData, this.publicKey);
  }
}
