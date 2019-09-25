import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cuadrado',
  templateUrl: './cuadrado.component.html',
  styles: ['button { width: 200px; height: 200px; font-size: 5em !important; }']
})
export class CuadradoComponent {
  @Input() value: 'X' | 'O';
  constructor() { }


}
