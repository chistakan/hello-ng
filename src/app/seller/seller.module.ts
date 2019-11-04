import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerComponent } from './seller.component';
import { AddProductComponent } from './add-product/add-product.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ListProductComponent } from './list-product/list-product.component';

@NgModule({
  declarations: [
    SellerComponent,
    AddProductComponent,
    ListProductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: SellerComponent,
        children: [
          {
            path: '',
            redirectTo: 'product/list',
            pathMatch: 'full'
          },
          {
            path: 'product/list',
            component: ListProductComponent
          },
          {
            path: 'product/add',
            component: AddProductComponent
          }
        ]
      }
    ])
  ]
})
export class SellerModule { }
