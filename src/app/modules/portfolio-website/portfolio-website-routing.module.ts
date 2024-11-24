import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AboutComponent } from '../../components/about/about.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { FooterComponent } from '../../components/footer/footer.component';

const routes: Routes = [
  { path : 'home', component : HomeComponent},
  { path : 'navbar', component : NavbarComponent},
  { path : 'about', component : AboutComponent},
  { path : 'contact', component : ContactComponent},
  { path : 'footer', component : FooterComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioWebsiteRoutingModule { }