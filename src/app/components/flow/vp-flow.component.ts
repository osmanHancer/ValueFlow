import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, OnInit,
  ViewChild,
} from '@angular/core';
import {
  FCreateNodeEvent, EFMarkerType,
  FCanvasComponent, FFlowModule, FZoomDirective,
  FReassignConnectionEvent, FCreateConnectionEvent
} from '@foblex/flow';
import { IPoint, Point } from '@foblex/2d';
import { ENodeType } from '../../domain';
import { VpPaletteComponent } from '../palette/vp-palette.component';
import { VpNodeComponent } from '../node/vp-node.component';
import { FlowService } from '../../domain';
import { IFlowViewModel } from '../../domain';
import { VpToolbarComponent } from '../toolbar/vp-toolbar.component';
import { DbManagementConnectionToolbarComponent } from '../connection-toolbar/db-management-connection-toolbar.component';

@Component({
  selector: 'vp-flow',
  templateUrl: './vp-flow.component.html',
  styleUrls: [
    '../styles/_icon-button.scss',
    '../styles/_variables.scss',
    './vp-flow.component.scss'
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    FlowService
  ],
  imports: [
    FFlowModule,
    VpToolbarComponent,
    VpPaletteComponent,
    VpNodeComponent,
    DbManagementConnectionToolbarComponent
  ]
})
export class VpFlowComponent implements OnInit {

  protected viewModel: IFlowViewModel = {
    nodes: [],
    connections: []
  };

  @ViewChild(FCanvasComponent, { static: true })
  public fCanvasComponent!: FCanvasComponent;

  @ViewChild(FZoomDirective, { static: true })
  public fZoomDirective!: FZoomDirective;

  protected readonly eMarkerType = EFMarkerType;

  constructor(
    private apiService: FlowService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
  }

  public ngOnInit(): void {
    this.getData();
  }

  public onInitialized(): void {
    this.fCanvasComponent.fitToScreen(new Point(40, 40), false);
    this.fZoomDirective.step = 0.1;
 
    // this.fZoomDirective.maximumZoom = "0.2"; // Property does not exist
  }

  private getData(): void {
    this.viewModel = this.apiService.getFlow();
    this.changeDetectorRef.markForCheck();
    console.log(this.viewModel);
  }

  public onNodeAdded(event: FCreateNodeEvent): void {
    this.apiService.addNode(event.data as ENodeType, event.rect);
    this.getData();
  }

  public onReassignConnection(event: FReassignConnectionEvent): void {
    if (!event.newFInputId) {
      return;
    }
    this.apiService.reassignConnection(event.fOutputId, event.oldFInputId, event.newFInputId);
    this.getData();
  }

  public onConnectionAdded(event: FCreateConnectionEvent): void {
    if (!event.fInputId) {
      return;
    }
    this.apiService.addConnection(event.fOutputId, event.fInputId);
    this.getData();
  }

  public onNodePositionChanged(point: IPoint, node: any): void {
    node.position = point;
    this.apiService.moveNode(node.id, point);
  }
}
