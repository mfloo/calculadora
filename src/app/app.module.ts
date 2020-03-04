import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OperadoresService } from './services/operadores.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    OperadoresService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
