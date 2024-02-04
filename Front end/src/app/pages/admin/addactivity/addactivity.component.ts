import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/model/Activity';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-addactivity',
  templateUrl: './addactivity.component.html',
})
export class AddactivityComponent implements OnInit {
  constructor(private activityService: ActivityService) {}
  activity: Activity = {} as Activity;

  success: boolean = false;
  error: boolean = false;

  ngOnInit(): void {}

  setFile(event: any) {
    this.activity.image = event.target.files[0];
  }

  addActivity() {
    const data = new FormData();
    data.append('name', this.activity.name);
    data.append('description', this.activity.description);
    data.append('image', this.activity.image);
    data.append('charges', this.activity.charges.toString());
    
    this.activityService.addActivity(data).subscribe((activity) => {
      if (activity.id != null) {
        this.success = true;
        setTimeout(() => {
          this.success = false;
        }, 3000);
        this.clear();
      } else {
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 3000);
        this.clear();
      }
    });
  }

  clear() {
    this.activity = {} as Activity;
  }
}
