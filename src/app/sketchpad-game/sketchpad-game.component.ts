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
    event.target.className += ' colored';
  }
}
