import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { FormGroup, FormControl } from '@angular/forms';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) {
    this.user = new User();
  }

  ngOnInit() {
  }

  save(user) {
    const controls = user.form.controls;
    if (!user.invalid) {
      this.userService.create(user.value)
        .subscribe(
          (response) => {
            if (response) {
              const messages = response.json();
              if (messages.emailExist) {
                controls.email.setErrors({
                  'emailExist': true
                });
              }

              if (messages.unmatchedPassword) {
                controls.password.setErrors({
                  'unmatchedPassword': true
                });
              }
            }
          }
      );
    }
  }

}
