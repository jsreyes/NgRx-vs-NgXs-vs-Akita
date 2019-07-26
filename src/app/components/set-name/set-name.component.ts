import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import * as MyActions from '../../store/name.actions';

@Component({
  selector: 'app-set-name',
  templateUrl: './set-name.component.html',
  styleUrls: ['./set-name.component.sass']
})
export class SetNameComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
  }

  setName(user: string) {
    this.store.dispatch(new MyActions.SetName(user));
  }

  resetName() {
    this.store.dispatch(new MyActions.ResetName());
  }
}
