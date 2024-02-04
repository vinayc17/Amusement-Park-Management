package com.example.fresh.service;

import com.example.fresh.errors.ActivityNotFoundException;
import com.example.fresh.model.Activity;
import com.example.fresh.model.Customer;

import java.util.List;

public interface IActivityService {
    void saveActivity(Activity activity);

    List<Activity> getAllActivities();

    Activity getActivityById(int id);

    void updateActivityById(Activity a);

    void deleteActivityById(int id);
}
