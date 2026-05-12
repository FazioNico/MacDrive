import { inject, Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';

export interface OrderDataInterface {
  createAt: string;
  recipes: {
      uuid: string;
      title: string;
      price: number;
      count: number;
  }[];
  _id: string;
}

@Injectable({
  providedIn: 'root',
})
export class FireService {
  private readonly _cloudStorage = inject(Firestore);

  async saveOrder(data: Omit<OrderDataInterface, '_id'>){
    const colRef = collection(this._cloudStorage, `macdrive-orders`);
    const result = await addDoc(colRef, {...data});
    return result;
  }
}
