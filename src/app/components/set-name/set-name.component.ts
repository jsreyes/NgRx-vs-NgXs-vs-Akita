import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { NameState, NameStateModel } from '../../state/name.state';
import { SetName, ResetName } from '../../actions/name.actions';

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
    this.store.dispatch(new SetName(user));
  }

  resetName() {
    this.store.dispatch(new ResetName());
  }
}
