import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioWebsiteRoutingModule } from './portfolio-website-routing.module';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HomeComponent } from '../../components/home/home.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ContactComponent } from '../../components/contact/contact.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PortfolioWebsiteRoutingModule
  ]
})
export class PortfolioWebsiteModule { }
