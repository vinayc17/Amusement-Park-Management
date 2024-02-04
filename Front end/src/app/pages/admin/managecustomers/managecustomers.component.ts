import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/Customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-managecustomers',
  templateUrl: './managecustomers.component.html',
})
export class ManagecustomersComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
      this.getAllCustomers();
  }

  getAllCustomers() {
    this.customerService.getUsers().subscribe((customers) => {
      this.customers = customers;
    });
  }

  deleteCustomer(id: number) {
    this.customerService.deleteUser(id).subscribe((res) => {
      this.getAllCustomers();
      console.log(res);
    });
  }
}
