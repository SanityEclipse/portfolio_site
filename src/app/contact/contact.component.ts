import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations:[
    trigger(
      'loadContact', [
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
export class ContactComponent implements OnInit {

  isVisible: boolean;

  constructor() { }

  ngOnInit() {
    this.isVisible = true;
  }

}
