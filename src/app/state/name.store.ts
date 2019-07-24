import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
 
export interface NameState {
  name: string | null;
}
 
export function createInitialName(): NameState {
  return {name: ''};
}
 
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'name' })
export class NameStore extends Store<NameState> {
 
  constructor() {
    super(createInitialName());
  }
 
  public setName(name: string) {
    this.update({name});
  }
 
  public resetName() {
    this.update(createInitialName());
  }
 
}