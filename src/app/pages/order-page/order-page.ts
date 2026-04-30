import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ApiService } from '../../services/api-service/api-service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { minPriceValidator } from '../../validators/min-price/min-price.validator';


@Component({
  selector: 'app-order-page',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './order-page.html',
  styleUrl: './order-page.css',
})
export class OrderPage implements OnInit {
  protected readonly categories = inject(ApiService).categories;
  protected readonly route = inject(ActivatedRoute);
  protected readonly categorieDisplayed = computed(() => {
    const selectedCategoryUuid = this.selectedCategoryUuid();
    if (!selectedCategoryUuid) {
      return this.categories();
    }
    return this.categories().filter(category => category.uuid === selectedCategoryUuid);
  });
  protected readonly selectedCategoryUuid = signal<string|null>(null);
  protected readonly orderForm = new FormGroup({
    createAt: new FormControl(''),
    recipes: new FormArray([], Validators.compose([
      Validators.required,
      Validators.minLength(1),
      minPriceValidator(10), // custom validator to check if total price is at least 10
    ])),
  });

  ngOnInit(): void {
    const params = this.route.snapshot.queryParams;
    console.log(params);
  }

  async addRecipe(recipeUuid: string) {
    const recipe = this.categories().flatMap(category => category.recipes).find(r => r.uuid === recipeUuid);
    if (!recipe) {
      throw new Error(`Recipe with uuid ${recipeUuid} not found`);
    }
    const recipesFormArray = this.orderForm.get('recipes') as FormArray;
    // have existing recipe in form array, increase count
    const existingRecipeIndex = recipesFormArray.controls.findIndex(control => control.value.uuid === recipeUuid);
    if (existingRecipeIndex !== -1) {
      const existingRecipeControl = recipesFormArray.at(existingRecipeIndex) as FormGroup;
      existingRecipeControl.patchValue({
        count: existingRecipeControl.value.count + 1,
      });
    } 
    // no existing recipe in form array, add new recipe
    else {
      // add new recipe to form array
      recipesFormArray.push(new FormGroup({
        uuid: new FormControl(recipe.uuid),
        title: new FormControl(recipe.title),
        price: new FormControl(recipe.price),
        count: new FormControl(1),
      }));
    }

    console.log(this.orderForm.value, this.orderForm.valid);
  }
}


