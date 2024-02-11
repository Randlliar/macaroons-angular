import {Component, OnInit} from '@angular/core';
import {MacaroonsType} from "./types/macaroons.type";
import {showPresent} from "./constans/present";
import {MacaroonsService} from "./services/macaroons.service";
import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MacaroonsService]
})
export class AppComponent{

  constructor(private macaroonsService: MacaroonsService,
              public cartService: CartService) {
  }

  public formValue = {
    macaroonTitle: '',
  }
  protected readonly showPresent = showPresent;
}
