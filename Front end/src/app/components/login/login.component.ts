import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/Customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  isRegister: boolean = false;

  admin: boolean = false;

  name: string = '';
  email: string = '';
  password: string = '';
  phone: string = '';

  error: boolean = false;
  success: boolean = false;
  msg: string = '';

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  validateEmail(): boolean {
    const re = /\S+@\S+\.\S+/;
    return re.test(this.email);
  }

  validatePassword(): boolean {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(this.password);
  }

  validatePhone(): boolean {
    const re = /^\d{10}$/;
    return re.test(this.phone);
  }

  validate() {
    if (this.isRegister) {
      if (
        this.email == '' ||
        this.password == '' ||
        this.name == '' ||
        this.phone == ''
      ) {
        this.error = true;
        this.msg = 'All fields are required';
        setTimeout(() => {
          this.error = false;
        }, 3000);
        return;
      }
      if (
        this.validateEmail() &&
        this.validatePassword() &&
        this.validatePhone()
      ) {
        this.register();
      } else {
        if (!this.validateEmail()) {
          this.msg = 'Email is invalid';
          this.error = true;
          setTimeout(() => {
            this.error = false;
          }, 3000);
        } else if (!this.validatePassword()) {
          this.msg =
            'Password must contain an uppercase, lowercase, number and must be 8 characters long';
          this.error = true;
          setTimeout(() => {
            this.error = false;
          }, 3000);
        } else if (!this.validatePhone()) {
          this.msg = 'Phone number must contain 10 digits';
          this.error = true;
          setTimeout(() => {
            this.error = false;
          }, 3000);
        }
      }
    } else {
      if (this.validateEmail() && this.validatePassword()) {
        this.login();
      } else {
        if (!this.validateEmail()) {
          this.msg = 'Email is invalid';
          this.error = true;
          setTimeout(() => {
            this.error = false;
          }, 3000);
        } else if (!this.validatePassword()) {
          this.msg = 'Password format is invalid';
          this.error = true;
          setTimeout(() => {
            this.error = false;
          }, 3000);
        }
        return;
      }
      if (this.email == '' && this.password == '') {
        this.error = true;
        this.msg = 'All fields are required';
        setTimeout(() => {
          this.error = false;
        }, 3000);
        return;
      } else if (this.email == '' && this.password != '') {
        this.error = true;
        this.msg = 'Email is required';
        setTimeout(() => {
          this.error = false;
        }, 3000);
        return;
      } else if (this.email != '' && this.password == '') {
        this.error = true;
        this.msg = 'Password is required';
        setTimeout(() => {
          this.error = false;
        }, 3000);
        return;
      }
    }
  }

  login(): void {
    this.customerService
      .login(this.email, this.password)
      .subscribe((customer) => {
        if (customer != null) {
          if (customer.isAdmin) {
            localStorage.setItem('customer', JSON.stringify(customer));
            this.router.navigate(['admin']);
          } else {
            localStorage.setItem('customer', JSON.stringify(customer));
            this.router.navigate(['customer']);
          }
        } else {
          this.error = true;
          this.msg = 'Wrong email or password';
          this.clear();
          setTimeout(() => {
            this.error = false;
          }, 3000);
        }
      });
  }

  register(): void {
    const newCustomer: Customer = {
      id: 0,
      name: this.name,
      email: this.email,
      password: this.password,
      phone: this.phone,
      isAdmin: this.admin,
    };
    this.customerService.checkUserByEmail(this.email).subscribe((customer) => {
      if (customer.status == 200) {
        this.error = true;
        this.msg = 'Email already exists';
        this.clear();
        setTimeout(() => {
          this.error = false;
        }, 3000);
      } else {
        this.customerService.addUser(newCustomer).subscribe((regCustomer) => {
          if (regCustomer.status === 200) {
            this.success = true;
            this.msg = 'Registration successful';
            this.clear();
            setTimeout(() => {
              this.success = false;
            }, 3000);
          } else {
            this.error = true;
            this.msg = regCustomer.body.error;
            this.clear();
            setTimeout(() => {
              this.error = false;
            }, 3000);
          }
        });
      }
    });
  }

  clear() {
    this.name = '';
    this.email = '';
    this.password = '';
    this.phone = '';
  }
}
