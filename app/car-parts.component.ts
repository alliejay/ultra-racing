 import { Component } from '@angular/core';

 @Component({
    selector: 'car-parts',
    template: `<ul>
     <li *ngFor="let carPart of carParts">
       <h2>{{carPart.name | uppercase}}</h2>
        <p>{{carPart.description}}</p>
        <p *ngIf="carPart.inStock > 0">{{carPart.inStock}}</p>
        <p *ngIf="carPart.inStock === 0">Out of Stock</p>
        <p>{{carPart.price | currency: 'USD': true}}</p>
      </li>
     </ul>`
})

 export class carPartsComponent {
     carParts = [{
         'id': 1,
         'name': "Super Tires",
         'description': 'These tires are the very best',
         'inStock': 5,
         'price': 4.99
     },
         {
             'id': 2,
             'name': "Reinforced Shocks",
             'description': 'Shocks made from kyptonite',
             'inStock': 4,
             'price': 10.99
         },
         {
             'id': 3,
             'name': "Kitty Toys",
             'description': 'Kitty want to drive too',
             'inStock': 0,
             'price': 6.99
         }];

     totalCarParts() {
         let sum = 0;
         for (let carPart of this.carParts){
             sum += carPart.inStock;
         }
         return sum;
     };
 }


