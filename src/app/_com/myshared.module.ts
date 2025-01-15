
import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { MatAllModule } from './mat-all.module';



@NgModule({
  imports:[],
  exports: [
    FormsModule, ReactiveFormsModule,CommonModule,RouterModule,MatAllModule
    ,
  ],
  declarations:[],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'tr'},]
})
export class MySharedModules {}
