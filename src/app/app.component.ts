import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations:[
    trigger('fadedLetter', [
      transition('void => *',[
        style ({opacity: 0}),
        animate(3000, style ({opacity: 1}))
      ])
    ])
  ]
})

export class AppComponent implements OnInit {
  title = 'vertical-type-test-angular';

  lettersArray: any[] = [];

  constructor(){}

  ngOnInit() {}

  keyHandler(event: KeyboardEvent){
     let keyValue = event.key;
     let regexp = /[a-zA-Zа-яА-ЯёЁ]/i;
     if (regexp.test(keyValue) === true && keyValue.length === 1) {

        this.lettersArray.push(keyValue);
        console.log(this.lettersArray);
     }
   }
 }
