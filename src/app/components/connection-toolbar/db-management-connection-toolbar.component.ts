import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { FlowService } from '../../domain';

@Component({
  selector: 'div[db-management-connection-toolbar]',
  templateUrl: './db-management-connection-toolbar.component.html',
  styleUrls: [ './db-management-connection-toolbar.component.scss' ],
  standalone: true,
  imports: [
    MatTooltip
  ],
})
export class DbManagementConnectionToolbarComponent {

  @Input({ required: true })
  public viewModel!:any
  hiddentoolbar:any=true

  constructor(
    private apiService: FlowService,
  ) {
  }
  SelectValue(newValue:string) {
    this.viewModel.icon=newValue
    this.hiddentoolbar=true
    this.apiService.saveConnectionİcon(this.viewModel.from,this.viewModel.to,newValue);
  }

}
