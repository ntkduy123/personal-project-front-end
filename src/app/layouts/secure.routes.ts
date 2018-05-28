import { Routes } from '@angular/router';
import { SignUpFormComponent } from '../shared/components/sign-up-form/sign-up-form.component';
import { SignInFormComponent } from '../shared/components/sign-in-form/sign-in-form.component';

export const SECURE_ROUTES: Routes = [
    { path: 'sign-up', component: SignUpFormComponent },
    { path: 'sign-in', component: SignInFormComponent}
];
