import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smashramdonizer';
  player:string;
  users = [];
  players = [];
  colors = []
  list = [
    'Bayonetta', 'Bowser', 'Bowser Jr.', 'Captain Falcon', 'Cloud', 'Corrin', 'Daisy', 'Dark Pit', 'Diddy Kong', 'Donkey Kong', 'Dr. Mario', 'Duck Hunt', 'Falco', 'Fox', 'Ganondorf', 'Greninja', 'The Ice Climbers', 'Inkling Boy and Girl', 'Ike', 'Jigglypuff', 'King Dedede', 'Kirby', 'Link', 'Little Mac', 'Lucario', 'Lucas', 'Lucina', 'Luigi', 'Mario', 'Marth', 'Mega Man', 'Meta Knight', 'Mewtwo', 'Mii Fighter', 'Mr. Game & Watch', 'Ness', 'Captain Olimar', 'Pac-Man', 'Palutena', 'Peach', 'Pichu', 'Pikachu', 'Pit', 'Pokémon Trainer', 'Ridley', 'R.O.B. the robot', 'Robin', 'Rosalina', 'Roy', 'Ryu', 'Samus', 'Sheik', 'Shulk', 'Snake', 'Sonic', 'Toon Link', 'Villager', 'Wario', 'Wii Fit Trainer', 'Wolf', 'Yoshi', 'Young Link', 'Zelda', 'Zero Suit Samus', 'Simon Belmont', 'Richter', 'Ken Masters', 'Inceneroar', 'Piranha Plant', 'Dark Samus', 'Chrom', 'Simon', 'Richter', 'King K. Rool', 'Isabelle'
  ]
  addPlayer(){
    if (this.player){
      this.users.push(this.player);
      this.colors.push(this.randomColor())
      this.player = '';
    }
  }
  generate(){
    if (this.users.length>0){
      const count = this.list.length;
      let  random = null
      for (let i = 0; i <this.users.length; i++) {
        while (random == null || this.players.includes(this.list[random])) {
          random = Math.floor(Math.random() * count);
        }
        this.players.push(this.list[random]);
      }
    }
  }
  clean(){
    this.players = [];
    this.users = []
  }
 randomColor(){
   let color = ['bg-primary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info'];
   const count = Math.floor(Math.random() * color.length);
   return color[count];
  }
}
