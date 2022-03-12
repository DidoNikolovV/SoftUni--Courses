import { Component, OnInit } from '@angular/core';
import { Game } from '../domain/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  games: Array<Game>;
  isShown: boolean = false;
  name_user: string = "My Name";

  constructor() { 
    this.games = [{id: 1, title: "First Game", image: "https://www.bulgariantimes.co.uk/wp-content/uploads/2021/11/blog-cover-statii-Mother-brand.png"}, {id: 2, title: "Second Game", image: "https://www.bulgariantimes.co.uk/wp-content/uploads/2021/11/blog-cover-statii-Mother-brand.png"}]
  }

  notifyMe(notification: string) {
    console.log(notification);
  }

  showContacts() {
      this.isShown = !this.isShown;
  }

  showName(name: string){
    this.name_user = name;
    console.log(name);
  }

  ngOnInit(): void {
  }

}
