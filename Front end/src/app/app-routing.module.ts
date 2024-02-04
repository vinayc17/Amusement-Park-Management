import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AddactivityComponent } from './pages/admin/addactivity/addactivity.component';
import { AdminhomeComponent } from './pages/admin/adminhome/adminhome.component';
import { BookingsComponent } from './pages/admin/bookings/bookings.component';
import { ManageactivitiesComponent } from './pages/admin/manageactivities/manageactivities.component';
import { ManagecustomersComponent } from './pages/admin/managecustomers/managecustomers.component';
import { BookcabComponent } from './pages/customer/bookcab/bookcab.component';
import { CustomerhomeComponent } from './pages/customer/customerhome/customerhome.component';
import { MyactivitiesComponent } from './pages/customer/myactivities/myactivities.component';
import { ViewactivitiesComponent } from './pages/customer/viewactivities/viewactivities.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  //home route
  { path: '', component: HomeComponent },

  //admin routes
  { path: 'admin', component: AdminhomeComponent },
  {
    path: 'admin',
    children: [
      { path: 'home', component: AdminhomeComponent },
      { path: 'addactivity', component: AddactivityComponent },
      { path: 'manageactivities', component: ManageactivitiesComponent },
      { path: 'managecustomers', component: ManagecustomersComponent },
      { path: 'managebookings', component: BookingsComponent },
    ],
  },

  //customer routes
  { path: 'customer', component: CustomerhomeComponent },
  {
    path: 'customer',
    children: [
      { path: 'home', component: CustomerhomeComponent },
      { path: 'viewactivities', component: ViewactivitiesComponent },
      { path: 'mybookings', component: BookcabComponent },
      { path: 'myactivities', component: MyactivitiesComponent },
      { path: 'about-us', component: AboutUsComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
