import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperadoresService {

  constructor() { }

  public suma(n1:number, n2:number):number{
    return n1+n2;}

  public resta(n1:number, n2:number):number{
    return n1-n2;}

  public multiplicacion(n1:number, n2:number):number{
    return n1 * n2;}

  public division(n1:number, n2:number):number{
    return n1 / n2;}
}
