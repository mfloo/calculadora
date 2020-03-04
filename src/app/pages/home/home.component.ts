import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OperadoresService } from 'src/app/services/operadores.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public resultado = 0;

  public suma(){
    this.resultado=this.operadoresServices.suma(5,6);
  }

  public resta(){
    this.resultado=this.operadoresServices.resta(9,6);
  }

  public multiplicacion(){
    this.resultado=this.operadoresServices.multiplicacion(5,6);
  }

  public division(){
    this.resultado=this.operadoresServices.division(25,5);
  }

  constructor(
    private operadoresServices: OperadoresService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
}
