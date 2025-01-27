import { Routes } from '@angular/router';
import { LayoutadminComponent } from './layoutadmin/layoutadmin.component';
import { VpFlowComponent } from './components/flow/vp-flow.component';
import { ChartsComponent } from './charts/charts.component';

export const routes: Routes = [


            {
                path: '',
                component:LayoutadminComponent,

                children: [
                    {
                        path: '',
                        component: VpFlowComponent
                    },
                    {
                        path: 'chart',
                        component: ChartsComponent
                    }
                ]
            },
          

];
