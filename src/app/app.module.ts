import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CambioComponent } from './cambio/cambio.component';
import { HttpClientModule } from '@angular/common/http';
import { CambioService } from './services/cambio.service';
@NgModule({
  declarations: [
    AppComponent,
    CambioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    CambioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
