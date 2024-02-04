package com.example.fresh.service.impl;

import com.example.fresh.errors.ActivityNotFoundException;
import com.example.fresh.model.Activity;
import com.example.fresh.model.Customer;
import com.example.fresh.repository.IActivityRepository;
import com.example.fresh.service.IActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ActivityService implements IActivityService {
    @Autowired
    private IActivityRepository activityRepository;

    public void saveActivity(Activity a) {
        activityRepository.save(a);
    }

    public List<Activity> getAllActivities() {
        return activityRepository.findAll();
    }

    public Activity getActivityById(int id) {
        return activityRepository.findById(id).get();
    }

    public void updateActivityById(Activity a) {
        activityRepository.save(a);
    }

    public void deleteActivityById(int id) {
        activityRepository.deleteById(id);
    }


}
