import { Component, OnInit } from '@angular/core';
import {MacaroonsService} from "../../services/macaroons.service";
import {MacaroonsType} from "../../types/macaroons.type";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'macaroons',
  templateUrl: './macaroons.component.html',
  styleUrls: ['./macaroons.component.scss']
})
export class MacaroonsComponent implements OnInit {

  constructor(private macaroonsService: MacaroonsService,
              public cartService: CartService) { }

  public macaroons: MacaroonsType[] = []

  ngOnInit(): void {
    this.macaroons = this.macaroonsService.getMacaroons();
    this.getMacaroonsAmount();
  }

  handleOrder(macaroon: MacaroonsType) {
    alert(`${macaroon.title} добавлен в корзину!`)
  }

  public getMacaroonsAmount() {
    const macaroonsItems = this.macaroonsService.getMacaroons();
    macaroonsItems.filter(item =>
    {
      return item.amount;
    });
  }



  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"})
  }
  public choiceMacaroon(macaroon: MacaroonsType, target: HTMLElement) {
    this.scrollTo(target);
    // this.formValue.macaroonTitle = macaroon.title.toUpperCase();
    this.cartService.count++;
  }

}
