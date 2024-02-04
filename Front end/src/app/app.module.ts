import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminhomeComponent } from './pages/admin/adminhome/adminhome.component';
import { ManageactivitiesComponent } from './pages/admin/manageactivities/manageactivities.component';
import { ManagecustomersComponent } from './pages/admin/managecustomers/managecustomers.component';
import { AddactivityComponent } from './pages/admin/addactivity/addactivity.component';
import { CustomerhomeComponent } from './pages/customer/customerhome/customerhome.component';
import { ViewactivitiesComponent } from './pages/customer/viewactivities/viewactivities.component';
import { MyactivitiesComponent } from './pages/customer/myactivities/myactivities.component';
import { BookcabComponent } from './pages/customer/bookcab/bookcab.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { SingleactivityComponent } from './components/singleactivity/singleactivity.component';
import { BookingsComponent } from './pages/admin/bookings/bookings.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AdminhomeComponent,
    ManageactivitiesComponent,
    ManagecustomersComponent,
    AddactivityComponent,
    CustomerhomeComponent,
    ViewactivitiesComponent,
    MyactivitiesComponent,
    BookcabComponent,
    LoginComponent,
    SingleactivityComponent,
    BookingsComponent,
    AboutUsComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
