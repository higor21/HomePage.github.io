import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output('page')  route = new EventEmitter();

  constructor() { }

  changePage(pageName: string): void {
    this.route.emit(pageName)
  }
  
  ngOnInit() {}
}
