import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations:[
    trigger(
      'loadPortfolio', [
        transition('void => *', [
          style({ opacity: 0 }),
          animate('1000ms', style({ opacity: 1 }))
        ]),
        transition('* => void', [
          style({ opacity: 1 }),
          animate('500ms', style({ opacity: 0 }))
        ])
      ])
  ]
})
export class PortfolioComponent implements OnInit {

  isVisible: boolean;

  constructor() { }

  ngOnInit() {
    this.isVisible = true;
  }

}
