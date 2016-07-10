import { Component, OnInit } from '@angular/core';
import { EqualValidator } from '../shared/directives/equal-validator.directive';
import { User } from '../shared/interfaces/user.interface';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'add-user.component.html',
  directives: [EqualValidator]
})
export class AddUserComponent implements OnInit {
  public user: User;

  ngOnInit() {
      this.user = {
          username: '',
          password: '',
          confirmPassword: '',
          email: ''
      }
  }

  save(f: User, isValid: boolean) {

  }
}
