import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Activity } from 'src/app/model/Activity';
import { Customer } from 'src/app/model/Customer';
import { Ticket } from 'src/app/model/Ticket';
import { ActivityService } from 'src/app/services/activity.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-singleactivity',
  templateUrl: './singleactivity.component.html',
})
export class SingleactivityComponent implements OnInit {
  @Input() activity: Activity = {} as Activity;
  @Input() isEdit: boolean = false;

  @Output() getActvities: EventEmitter<any> = new EventEmitter();

  editActivity: Activity = {} as Activity;

  success: boolean = false;
  error: boolean = false;
  msg: string = '';

  @Input() isShow: boolean = false;

  constructor(
    private activityService: ActivityService,
    private ticketService: TicketService
  ) {}

  ngOnInit(): void {}

  setFile(event: any) {
    this.activity.image = event.target.files[0];
  }

  book(activity: Activity) {
    const ticket: Ticket = {
      id: 0,
      activity: activity,
      customer: JSON.parse(localStorage.getItem('customer') || '{}') as Customer, 
      dateTime: new Date().toISOString(),
      status: 'Pending',
    };
    console.log(ticket);

    this.ticketService.addTicket(ticket).subscribe((resTicket) => {
      if (resTicket != null) {
        this.msg = 'Ticket booked successfully';
        this.success = true;
        setTimeout(() => {
          this.success = false;
        }, 3000);
      } else {
        this.msg = 'Ticket booking failed, please try again';
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 3000);
      }
    });
  }

  edit(activity: Activity) {
    const data = new FormData();
    data.append('name', activity.name);
    data.append('description', activity.description);
    data.append('image', activity.image);
    data.append('charges', activity.charges.toString());

    this.activityService.updateActivity(data,activity.id).subscribe((resActivity) => {
      if (resActivity != null) {
        this.msg = 'Activity updated successfully';
        this.success = true;
        setTimeout(() => {
          this.success = false;
        }, 3000);
        this.getActvities.emit();
      } else {
        this.msg = 'Activity update failed';
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 3000);
      }
    });
  }

  deleteActivity(activity: Activity) {
    this.activityService.deleteActivity(activity.id).subscribe(() => {
      this.getActvities.emit();
    });
  }
}
