import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  isOnSearch :boolean = false;
  isOnMenuBurger : boolean = false;

  clickOnSearchButton(){
    this.isOnSearch = !this.isOnSearch;
    }

  clickOnMenuBurger(){
    this.isOnMenuBurger = !this.isOnMenuBurger
  }
  className(){
    if (!this.isOnMenuBurger) {
      return "menu_slide"
    }
    else{
      return "menu_slide slide"
    }
  }
}
