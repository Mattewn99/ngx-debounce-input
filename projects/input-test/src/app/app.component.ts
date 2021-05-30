import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'input-test';
  model: string;

  public handleDebounce(value: string): void {
    console.log(value);
  }
}
