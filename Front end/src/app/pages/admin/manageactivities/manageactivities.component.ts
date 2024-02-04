import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/model/Activity';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-manageactivities',
  templateUrl: './manageactivities.component.html',
})
export class ManageactivitiesComponent implements OnInit {
  activities: Activity[] = [];

  constructor(private activityService: ActivityService) {}

  ngOnInit(): void {
    this.getAllActivities();
  }

  getAllActivities() {
    this.activityService.getAllActivities().subscribe((activities) => {
      this.activities = activities;
    });
  }
}
