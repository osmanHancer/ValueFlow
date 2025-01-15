import { Component } from '@angular/core';
import { MySharedModules } from '../_com/myshared.module';
import { VpFlowComponent } from "../components/flow/vp-flow.component";

@Component({
  selector: 'app-layoutadmin',
  imports: [MySharedModules],
  templateUrl: './layoutadmin.component.html',
  styleUrl: './layoutadmin.component.scss'
})
export class LayoutadminComponent {
  isChecked: any;

}
