import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FuncionesBasicasComponent} from "./funciones-basicas/funciones-basicas.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FuncionesBasicasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculadora';

}
