import { LogosComponent } from './component/logos/logos.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', component: HeaderComponent },
 
  {path:'logo'  , component:LogosComponent},
  { path: 'footer', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true,
    anchorScrolling:'enabled', scrollPositionRestoration: 'top' 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
