import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { FFlowModule } from '@foblex/flow';
import { FlowService, IFlowNodeViewModel } from '../../domain';
import { MySharedModules } from '../../_com/myshared.module';
import { IPoint } from '@foblex/2d';
import { VpFlowComponent } from '../flow/vp-flow.component';

@Component({
  selector: 'vp-node',
  templateUrl: './vp-node.component.html',
  styleUrls: ['./vp-node.component.scss'],
  standalone: true,
  imports: [
    FFlowModule,
    MySharedModules
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VpNodeComponent {
  labelPosition: 'before' | 'after' | 'top' = 'after';

  constructor(
    private service:VpFlowComponent,
    private apiService: FlowService,
  ) {
  }

  @Input()
  public node: IFlowNodeViewModel | undefined ;
  data: any;

  save(nodeId: any, newData: any) {
    this.apiService.nodeSaveData(nodeId, newData);
  }

    public onNodePositionChanged(point: IPoint, node: any): void {
      node.position = point;
      this.apiService.moveNode(node.id, point);
    }

   

    }
