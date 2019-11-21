import {Component} from '@angular/core';
import {BrowserQRCodeReader} from '@zxing/library';

import {BehaviorSubject, Observable, Observer, Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public lastURL$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {
    const codeReader = new BrowserQRCodeReader();

    codeReader
      .decodeFromInputVideoDevice(undefined, 'preview')
      .then(result => this.lastURL$.next(result.getText()))
      .catch(err => console.error(err));

    this.lastURL$.subscribe(s => console.log('new URI,', s));
  }
}
