import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { NameStateModel } from 'src/app/state/name.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-get-name',
  templateUrl: './get-name.component.html',
  styleUrls: ['./get-name.component.sass']
})
export class GetNameComponent implements OnInit {
  @Select(state => state.names)
  name$: Observable<NameStateModel>;

  constructor() { }

  ngOnInit() {
  }

}
