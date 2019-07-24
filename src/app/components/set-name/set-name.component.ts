import { Component, OnInit } from '@angular/core';
import { NameService } from '../../state/name.service';
 
@Component({
  selector: 'app-set-name',
  templateUrl: './set-name.component.html',
  styleUrls: ['./set-name.component.scss']
})
export class SetNameComponent implements OnInit {
 
  constructor(
    private nameService: NameService
  ) { }
 
  ngOnInit() {
  }
 
  public setName(user: string) {
    this.nameService.setName(user);
  }
 
  public resetName() {
    this.nameService.resetName();
  }
 
}