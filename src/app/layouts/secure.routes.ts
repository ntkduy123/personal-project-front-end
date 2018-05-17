import { Routes } from "@angular/router";
import { SignUpFormComponent } from "../shared/components/sign-up-form/sign-up-form.component";

export const SECURE_ROUTES: Routes = [
    { path: 'sign-up', component: SignUpFormComponent }
];