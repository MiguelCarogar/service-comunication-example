import { Component, OnInit } from '@angular/core';

import { ComunicationService } from '../comunication.service';

@Component({
  selector: 'app-component-2',
  templateUrl: './component-2.component.html',
  styleUrls: ['./component-2.component.css']
})
export class Component2Component implements OnInit {

  public text = '';
  constructor(
    public comunicationService: ComunicationService
  ) { }

  ngOnInit() {
    this.comunicationService.getValue().subscribe((value) =>
      this.text = value
    );
  }

}
