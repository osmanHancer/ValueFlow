import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VpFlowComponent } from './components/flow/vp-flow.component';

@Component({
  selector: 'app-root',
  imports: [VpFlowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'deneme';
}
