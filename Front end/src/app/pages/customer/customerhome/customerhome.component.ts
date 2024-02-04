import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from 'src/app/model/Activity';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-customerhome',
  templateUrl: './customerhome.component.html',
})
export class CustomerhomeComponent implements OnInit {
  activities: Activity[] = [];

  constructor(private activityService: ActivityService,
    private router:Router
    ) {}

  getAllActivities() {
    this.activityService.getAllActivities().subscribe((activities) => {
      this.activities = activities;
    });
  }

  ngOnInit(): void {
    this.getAllActivities();
  }
}
