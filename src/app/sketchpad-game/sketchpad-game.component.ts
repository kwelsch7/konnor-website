import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sketchpad-game',
  templateUrl: './sketchpad-game.component.html',
  styleUrls: ['./sketchpad-game.component.scss']
})
export class SketchpadGameComponent implements OnInit {
  dimensionXArray = new Array(66);
  dimensionYArray = new Array(33);

  constructor() {}

  ngOnInit() {}

  colorSquare(event: { target: HTMLDivElement }) {
    if (!event.target.className.includes('colored')) {
      event.target.className += ' colored';
    }
  }

  resetSquares() {
    const coloredSquares = document.querySelectorAll('.grid-square.colored');
    Array.from(coloredSquares).forEach(square => square.className = 'grid-square');
  }
}
