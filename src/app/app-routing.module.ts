import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SearchContactComponent } from './search-contact/search-contact.component';
import { AuthGuard } from './services/auth.guard';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'login/:id',
    component: LoginComponent,
    // children: [
    //   // { path: '', component: ProfileComponent },
    //   { path: 'profile', component: ProfileComponent },
    // ],
  },
  { path: 'register', component: RegisterComponent },
  {
    path: 'profile/:id',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'addContacts', component: AddContactsComponent },
      { path: 'showAllContacts', component: AllContactsComponent },
      { path: 'update', component: UpdateComponent },
      { path: 'delete', component: DeleteUserComponent },
      { path: 'search', component: SearchContactComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
