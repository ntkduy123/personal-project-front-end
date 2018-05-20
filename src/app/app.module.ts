import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PUBLIC_ROUTES } from './layouts/public.routes';
import { PublicComponent } from './layouts/public/public.component';
import { SECURE_ROUTES } from './layouts/secure.routes';
import { SecureComponent } from './layouts/secure/secure.component';
import { SharedModule } from './shared/shared.module';

const APP_ROUTES: Routes = [
  { path: '', component: PublicComponent, data: { title: 'Public Views' }, children: PUBLIC_ROUTES },
  { path: '', component: SecureComponent, data: { title: 'Secure Views' }, children: SECURE_ROUTES }
];

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    SecureComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AdminModule,
    HttpModule,

    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
