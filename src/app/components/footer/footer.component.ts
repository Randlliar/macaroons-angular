import { Component, OnInit } from '@angular/core';
import {instagram, phone} from "../../constans/contacts";

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  protected readonly phone: string = phone;
  protected readonly instagram: string = instagram;
}
