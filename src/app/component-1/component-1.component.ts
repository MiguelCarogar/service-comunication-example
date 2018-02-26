import { Component, OnInit } from '@angular/core';

import { ComunicationService } from '../comunication.service';

@Component({
  selector: 'app-component-1',
  templateUrl: './component-1.component.html',
  styleUrls: ['./component-1.component.css']
})
export class Component1Component implements OnInit {

  public text;
  constructor(
    private comunicationService: ComunicationService
  ) { }

  ngOnInit() {
  }

  public send() {
    this.comunicationService.setValue(this.text);
  }
}
