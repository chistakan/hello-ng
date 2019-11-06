import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CartComponent } from './cart/cart.component';
import { ProductNotifyComponent } from './product-notify/product-notify.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TestGetdataComponent } from './test-getdata/test-getdata.component';
import { ComponentHtmlTableComponent } from './component-html-table/component-html-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    TopBarComponent,
    CartComponent,
    ProductNotifyComponent,
    TestGetdataComponent,
    ComponentHtmlTableComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ProductListComponent
      },
      {
        path: 'product/:productId',
        component: ProductDetailComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'seller',
        loadChildren: 'src/app/seller/seller.module#SellerModule'
      },
      {
        path: 'test',
        component: TestGetdataComponent
      },
      {
        path: 'example',
        loadChildren: 'src/app/module-example/module-example.module#ModuleExampleModule'
      },
      {
        path: 'galaxy',
        loadChildren: 'src/app/module-galaxy/module-galaxy.module#ModuleGalaxyModule'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
