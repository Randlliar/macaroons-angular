import {Component} from '@angular/core';
import {MacaroonsType} from "./types/macaroons.type";
import {AdvantagesType} from "./types/advantages.type";
import {showPresent} from "./constans/present";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public macaroons: MacaroonsType[] = [
    {
      image: 'macaroon1.png',
      title: 'Макарун с малиной',
      pieces: 1,
      amount: 1.7,
    },
    {
      image: 'macaroon2.png',
      title: 'Макарун с манго',
      pieces: 1,
      amount: 1.7,
    },
    {
      image: 'macaroon3.png',
      title: 'Макарун с ванилью',
      pieces: 2,
      amount: 3.4,
    },
    {
      image: 'macaroon4.png ',
      title: 'Макарун с фисташками',
      pieces: 1,
      amount: 1.7,
    },
  ]



  public advantages: AdvantagesType[] = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    },
  ]

  public formValue = {
    macaroonTitle: '',
  }
  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"})
  }

  public choiceMacaroon(macaroon: MacaroonsType, target: HTMLElement) {
    this.scrollTo(target);
    this.formValue.macaroonTitle = macaroon.title.toUpperCase();
  }

  protected readonly showPresent = showPresent;
}
