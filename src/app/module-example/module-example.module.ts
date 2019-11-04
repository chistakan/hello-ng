import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlComponent } from './html/html.component';
import { RouterModule } from '@angular/router';
import { ModuleExampleComponent } from './module-example.component';

@NgModule({
  declarations: [HtmlComponent, ModuleExampleComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'abcd',
        component: HtmlComponent
      }
    ])
  ]
})
export class ModuleExampleModule { }
