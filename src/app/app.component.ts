import { Component } from '@angular/core';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello World from inline template</h1>
  // <p>Probably won't ever write html this way, but it's possible.</p>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hotelinventoryheyapp';
  role = 'Users'
}
