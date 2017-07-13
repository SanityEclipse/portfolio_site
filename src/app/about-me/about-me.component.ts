import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  animations:[
    trigger(
      'loadAboutMe', [
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
export class AboutMeComponent implements OnInit {

  isVisible: boolean;

  constructor() { }

  ngOnInit() {
    this.isVisible = true;
  }

}
