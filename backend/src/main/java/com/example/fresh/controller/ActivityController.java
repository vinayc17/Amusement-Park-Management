package com.example.fresh.controller;


import com.example.fresh.model.Activity;
import com.example.fresh.service.IActivityService;
import com.example.fresh.service.ICustomerService;
import com.example.fresh.utils.ImageUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ActivityController {
    @Autowired
    private IActivityService activityService;

    @Autowired
    private ICustomerService customerService;

    @PostMapping("/activities")
    private ResponseEntity<?> postActivities(@RequestParam("image") MultipartFile file, @RequestParam("name") String name, @RequestParam("description") String description, @RequestParam("charges") Float charges) {
        try {
            Activity a = new Activity(name, description, charges, ImageUtils.compressBytes(file.getBytes()));
            activityService.saveActivity(a);
            return new ResponseEntity<>(activityService.getActivityById(a.getId()), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getLocalizedMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/activities")
    private ResponseEntity<?> getAllActivities() {
		
		  List<Activity> activityList = new ArrayList<>();
		  
		 for (Activity a : activityService.getAllActivities()) {
		  a.setImage(ImageUtils.decompressBytes(a.getImage())); activityList.add(a); 
		  }
		 
        return new ResponseEntity<>(activityList, HttpStatus.OK);
    }

    @GetMapping("/activities/{id}")
    private ResponseEntity<?> getActivityById(@PathVariable int id) {
        try {
            Activity a = activityService.getActivityById(id);
            a.setImage(ImageUtils.decompressBytes(a.getImage()));
            return new ResponseEntity<>(a, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getLocalizedMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/activities/{id}")
    private ResponseEntity<?> updateActivity(@PathVariable int id,
                                             @RequestParam("image") MultipartFile file,
                                             @RequestParam("name") String name,
                                             @RequestParam("description") String description,
                                             @RequestParam("charges") Float charges) {
        try {
            Activity a = activityService.getActivityById(id);
            a.setImage(ImageUtils.compressBytes(file.getBytes()));
            a.setName(name);
            a.setCharges(charges);
            a.setDescription(description);
            activityService.updateActivityById(a);
            return new ResponseEntity<>(activityService.getActivityById(a.getId()), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getLocalizedMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @DeleteMapping("/activities/{id}")
    private ResponseEntity<?> deleteActivityById(@PathVariable int id) {
        try {
            activityService.deleteActivityById(id);
            return new ResponseEntity<>(new HashMap<>().put("msg", "activity deleted successfully"), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

