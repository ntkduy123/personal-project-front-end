import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) {
    this.user = new User();
  }

  ngOnInit() {
  }

  signIn(user) {
    this.userService.verify(user.value).subscribe(response => {
      console.log(response.json());
    })
  }

}
