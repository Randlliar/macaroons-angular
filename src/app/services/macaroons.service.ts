import { Injectable } from '@angular/core';
import {MacaroonsType} from "../types/macaroons.type";
import {MACAROONS} from "../constans";

@Injectable()
export class MacaroonsService {

  getMacaroons(): MacaroonsType[] {

    return MACAROONS;
  }
}
