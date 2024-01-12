import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cambio',
  templateUrl: './cambio.component.html',
  styleUrls: ['./cambio.component.css']
})
export class CambioComponent {
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  message: string = '';
  accessToken: string = ''; 

  constructor(private http: HttpClient) {}

  authenticateAndGetToken() {
    const credentials = {
      username: '',
      password: ''
    };

    this.http.post('https://ptesa-env-more.eastus.cloudapp.azure.com/k2o/dev/api/api/Token/Autenticar', credentials)
      .subscribe(
        (response: any) => {
          this.accessToken = response.access_token;
          this.message = 'Autenticación exitosa';
        },
        error => {
          this.message = 'Error en la autenticación';
          console.error('Error:', error);
        }
      );
  }

  changePassword() {
    if (this.newPassword !== this.confirmPassword) {
      this.message = 'La nueva contraseña y la confirmación no coinciden.';
      return;
    }
    this.authenticateAndGetToken();

    const data = {
      ContraseñaActual: this.currentPassword,
      NuevaContraseña: this.newPassword
    };
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);

    this.http.put('https://ptesa-env-more.eastus.cloudapp.azure.com/k2o/dev/api/api/Usuario/CambiarClave', data, { headers })
    .subscribe(
      (response: any) => {
        console.log(response); 
        this.message = 'Contraseña cambiada con éxito';
        },
        error => {
          this.message = 'Error al cambiar la contraseña';
          console.error('Error:', error);
        }
      );
  }
}
