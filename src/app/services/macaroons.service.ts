import { Injectable } from '@angular/core';
import {MacaroonsType} from "../types/macaroons.type";

@Injectable()
export class MacaroonsService {

  constructor() { }

  getMacaroons(): MacaroonsType[] {

    return [
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
  }
}
