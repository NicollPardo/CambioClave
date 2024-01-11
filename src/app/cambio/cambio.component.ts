import { Component } from '@angular/core';

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

  changePassword() {
    const data = {
      currentPassword: this.currentPassword,
      newPassword: this.newPassword
    };

    fetch('http://localhost:3000/api/cambiar-contrasena', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
      if (result.success) {
        this.message = result.message;
      } else {
        this.message = 'Error: ' + result.message;
      }
    })
    .catch(error => {
      this.message = 'Error: ' + error.message;
    });
  }
}
