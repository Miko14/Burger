import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {

  private salad: boolean = false;
  private bacon: boolean = false;
  private cheese: boolean = false;
  private meat: boolean = false;

  private ingrediences: Ingredience[] = <Ingredience[]>[];

  constructor() { }

  ngOnInit() { }

  changeState(ingredience: string) {
    switch(ingredience) {
      case 'salad': 
        this.salad = !this.salad;
        (this.salad) ? this.ingrediences.push({name: 'salad', value: this.salad}) : this.deleteIngredience('salad');
        break;
      case 'bacon': 
        this.bacon = !this.bacon;
        (this.bacon) ? this.ingrediences.push({name: 'bacon', value: this.bacon}) : this.deleteIngredience('bacon');
        break;
      case 'cheese': 
        this.cheese = !this.cheese;
        (this.cheese) ? this.ingrediences.push({name: 'cheese', value: this.cheese}) : this.deleteIngredience('cheese');
        break;
      case 'meat': 
        this.meat = !this.meat;
        (this.meat) ? this.ingrediences.push({name: 'meat', value: this.meat}) : this.deleteIngredience('meat');
        break;
    }
  }

  deleteIngredience(ingredience: string) {
    var index = this.ingrediences.findIndex(i => i.name === ingredience);
    if (index > -1) {
      this.ingrediences.splice(index, 1);
    }
  }

}

interface Ingredience {
  name: string,
  value: boolean
}
