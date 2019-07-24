import { Injectable } from '@angular/core';
import { NameStore } from '../state/name.store';
 
@Injectable({
  providedIn: 'root'
})
export class NameService {
 
  constructor(private nameStore: NameStore) {
  }
 
  public setName(name: string) {
    this.nameStore.setName(name);
  }
 
  public resetName() {
    this.nameStore.resetName();
  }
 
}