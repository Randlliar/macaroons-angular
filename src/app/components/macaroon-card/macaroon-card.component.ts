import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MacaroonsType} from "../../types/macaroons.type";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'macaroon-card',
  templateUrl: './macaroon-card.component.html',
  styleUrls: ['./macaroon-card.component.scss']
})
export class MacaroonCardComponent {
  @Input() macaroon!: MacaroonsType;
  @Output() order: EventEmitter<MacaroonsType> = new EventEmitter<MacaroonsType>();

  constructor(public cartService: CartService) {
  }

  handleOrder() {
    this.cartService.finalPrice += this.macaroon.amount;
    this.cartService.count++;
    this.order.emit(this.macaroon)
  }
}
