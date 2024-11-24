import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : 'portfolio-website', loadChildren : () => import('./modules/portfolio-website/portfolio-website.module').then(m => m.PortfolioWebsiteModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
