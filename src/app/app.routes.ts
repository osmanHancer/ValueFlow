import { Routes } from '@angular/router';
import { LayoutadminComponent } from './layoutadmin/layoutadmin.component';
import { VpFlowComponent } from './components/flow/vp-flow.component';

export const routes: Routes = [


            {
                path: 'deneme',
                component:LayoutadminComponent,

                children: [
                    {
                        path: 'foblex',
                        component: VpFlowComponent
                    }
                ]
            },
            {
                path: 'foblex',
                component: VpFlowComponent
            }

];
