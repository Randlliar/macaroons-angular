import { Component } from '@angular/core';
import {phone} from "../../constans/contacts";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  protected readonly phone = phone;
}
