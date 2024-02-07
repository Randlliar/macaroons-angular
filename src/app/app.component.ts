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
export class AppComponent implements OnInit{

  constructor(private macaroonsService: MacaroonsService,
              public cartService: CartService) {
  }

  public macaroons: MacaroonsType[] = []





  ngOnInit() {
    this.macaroons = this.macaroonsService.getMacaroons();
    this.getMacaroonsAmount();
  }

  public formValue = {
    macaroonTitle: '',
  }
  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"})
  }

  public getMacaroonsAmount() {
    const macaroonsItems = this.macaroonsService.getMacaroons();
     macaroonsItems.filter(item =>
    {
      console.log(item)
      return item.amount;
    });
    console.log(macaroonsItems)
  }

  public choiceMacaroon(macaroon: MacaroonsType, target: HTMLElement) {
    this.scrollTo(target);
    this.formValue.macaroonTitle = macaroon.title.toUpperCase();
    this.cartService.count++;
    // this.cartService.amount = this.macaroonsService
  }

  protected readonly showPresent = showPresent;
}
