import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInmputRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>(); ** if don't use service
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInmputRef.nativeElement.value;
    const  newIngredient = new Ingredient(ingName, ingAmount);
    // this.ingredientAdded.emit(newIngredient); ** if don't use service
    this.slService.addIngredient(newIngredient);

  }
}
