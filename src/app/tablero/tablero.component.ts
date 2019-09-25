import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.scss']
})
export class TableroComponent implements OnInit {

  casillas: string[];
  ganador: string;
  xSiguiente: boolean;

  constructor() { }

  ngOnInit() {
    this.empezar();
  }

  empezar() {
    this.casillas = Array(9).fill(null);
    this.ganador = null;
    this.xSiguiente = true;
  }

  get jugador() {
    return this.xSiguiente ? 'X' : 'O';
  }

  marcar(idx: number) {
    if (!this.casillas[idx]) {
      this.casillas.splice(idx, 1, this.jugador);
      // this.casillas[idx] = this.jugador
      this.xSiguiente = !this.xSiguiente;
    }
    this.ganador = this.calculaGanador();
  }

  calculaGanador() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.casillas[a] &&
        this.casillas[a] === this.casillas[b] &&
        this.casillas[a] === this.casillas[c]
      ) {
        return this.casillas[a];
      }
    }
    return null;
  }

}
