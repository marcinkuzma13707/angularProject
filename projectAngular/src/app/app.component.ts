import { Component } from '@angular/core';

@Component({
  selector: 'pm-app',
  template: `
  <div><h1>{{title}}</h1>
  <pm-countries></pm-countries>
  </div>
`
})
export class AppComponent {
  title = 'Work work!';
}
