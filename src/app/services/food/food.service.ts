import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id:number):Food{
    return this.getAll().find(food=>food.id==id)!;
  }

  getAllFoodsBySearchTerm(searchTerm:string):Food[]{
    return this.getAll().filter(food=>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllTags():Tag[]{
    return [
      {name:'All',count:15},
      {name:'FastFood',count:2},
      {name:'Burger',count:1},
      {name:'Lunch',count:2},
      {name:'Sea-food',count:1},
      {name:'Pizza',count:1},
      {name:'Celebrate',count:1},
      {name:'Party',count:1},
      {name:'Chicken',count:1},
      {name:'Roasted',count:1},
      {name:'Salad',count:1},
      {name:'Healthy',count:1},
      {name:'Soup',count:1},
      {name:'Mushroom',count:1}

    ]
  }


  getAllFoodsByTag(tag:string):Food[]{
    return tag == "All"?
      this.getAll():
      this.getAll().filter(food=>food.tags?.includes(tag))
  }
  getAll():Food[]{
    return[
      {
        id:1,
        name:'Burger',
        price:5.00,
        tags:['FastFood','Burger'],
        favourite:false,
        stars:3.5,
        imageUrl:'/assets/images/foods/burger.jpg',
        origins:['Germany','US'],
        cookTime:'10-15'
      },
      {
        id:2,
        name:'Cooked Sea Food',
        price:4.00,
        tags:['Lunch','Sea-food'],
        favourite:false,
        stars:4.5,
        imageUrl:'/assets/images/foods/cooked-sea-food.jpg',
        origins:['Maldives','US'],
        cookTime:'12-15'
      },
      {
        id:3,
        name:'Pizza',
        price:6.00,
        tags:['FastFood','Pizza','Celebrate'],
        favourite:false,
        stars:3.5,
        imageUrl:'/assets/images/foods/pizza.jpg',
        origins:['Germany','UK'],
        cookTime:'15-20'
      },
      {
        id:4,
        name:'Roasted Chicken',
        price:8.00,
        tags:['Party','Chicken','Roasted'],
        favourite:false,
        stars:4.25,
        imageUrl:'/assets/images/foods/roasted-chicken.jpg',
        origins:['UK','US'],
        cookTime:'10-15'
      },
      {
        id:5,
        name:'Vegitable Salad',
        price:3.50,
        tags:['Lunch','Salad'],
        favourite:false,
        stars:4,
        imageUrl:'/assets/images/foods/salad.jpg',
        origins:['Japan','UK'],
        cookTime:'5-10'
      },
      {
        id:6,
        name:'Mushroom Soup',
        price:4.25,
        tags:['Healthy','Soup','Mushroom'],
        favourite:false,
        stars:4,
        imageUrl:'/assets/images/foods/soup.jpg',
        origins:['Italy','Korea'],
        cookTime:'10-15'
      } 
    ]
    
  }
}
