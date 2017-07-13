import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-site-landing',
  templateUrl: './site-landing.component.html',
  styleUrls: ['./site-landing.component.css'],
  animations:[
    trigger(
      'loadSiteLanding', [
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
export class SiteLandingComponent implements OnInit {

  isVisible: boolean;

  constructor() { }

  ngOnInit(){
    this.isVisible = true;
  }
}
