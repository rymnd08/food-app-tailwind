import { Component, OnInit } from '@angular/core';
import { foods } from 'src/app/foods';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})

export class FoodComponent implements OnInit {
  foods = foods
  ngOnInit(): void {
    console.log(foods)
  }
}
