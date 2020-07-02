import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-wrapper',
  templateUrl: './template-wrapper.component.html',
  styleUrls: ['./template-wrapper.component.scss']
})
export class TemplateWrapperComponent implements OnInit {
  isCollapsed = false;
  constructor() { }

  ngOnInit(): void {
  }

  flip(status: boolean) {
    this.isCollapsed = status;
  }
}
