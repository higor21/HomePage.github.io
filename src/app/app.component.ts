import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(
    private router: Router
  ){}  

  changePage(nmPage: string){
    this.router.navigate([nmPage])
  }
}
