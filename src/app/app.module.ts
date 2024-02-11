import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {FormsModule} from "@angular/forms";
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { MacaroonsComponent } from './components/macaroons/macaroons.component';
import { ButtonsEffectsDirective } from './derectives/buttons-effects.directive';
import { MacaroonCardComponent } from './components/macaroon-card/macaroon-card.component';
import { AdvantagesDescriptionPipe } from './pipes/advantages-description.pipe';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdvantagesComponent,
    MacaroonsComponent,
    ButtonsEffectsDirective,
    MacaroonCardComponent,
    AdvantagesDescriptionPipe,
    PhoneNumberPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, FooterComponent, AdvantagesComponent]
})
export class AppModule { }
