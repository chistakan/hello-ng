import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlComponent } from './html-tables/html.component';
import { RouterModule } from '@angular/router';
import { ModuleExampleComponent } from './module-example.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ModuleExampleComponent,
    HtmlComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ModuleExampleComponent,
        children: [
          {
            path: 'http',
            component: HtmlComponent
          }
        ]
      }
    ])
  ]
})
export class ModuleExampleModule { }
