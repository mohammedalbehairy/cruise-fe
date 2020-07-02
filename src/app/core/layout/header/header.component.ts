import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCollapsed = false;

  constructor() { }
  @Output() collapse = new EventEmitter<boolean>()
  ngOnInit(): void {
  }

  flip() {
    this.isCollapsed = !this.isCollapsed;
    this.collapse.emit(this.isCollapsed);
  }
}
