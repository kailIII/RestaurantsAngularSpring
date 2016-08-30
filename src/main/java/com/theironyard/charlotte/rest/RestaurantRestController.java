package com.theironyard.charlotte.rest;

import com.google.gson.Gson;
import com.theironyard.charlotte.crud.RestaurantRepository;
import com.theironyard.charlotte.orm.Restaurant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by charlesrath on 8/29/16.
 */
@RestController
public class RestaurantRestController {

    Gson gson = new Gson();

    @Autowired
    RestaurantRepository restaurants;

    @RequestMapping(path = "/api/create-restaurant", method = RequestMethod.POST)
    public String createRestaurant(String name, String address, String city, String state, Integer zipcode,
                                   String cuisine, String type, Integer price) {
        //do some stuff here
        Restaurant r = new Restaurant(name, address, city, state, zipcode, cuisine, type, price);
                //"McDonald's", "11 S Church St", "Charlotte", "NC", 28209, "American", "FastFood", 1);
        restaurants.save(r);
        return "redirect:/";
    }

    @RequestMapping(path = "/api/restaurants", method = RequestMethod.GET)
    public String getRestaurants() {
        System.out.println("getRestaurants()");
        return gson.toJson(restaurants.findAll());
    }

    @RequestMapping(path = "/api/restaurants/{id}", method = RequestMethod.GET)
    public String getRestaurant(@PathVariable(value = "id") Integer id) {
        return gson.toJson(restaurants.findOne(id));
    }
    @RequestMapping(path = "/api/restaurants/zipcode/{zipcode}", method = RequestMethod.GET)
    public String getRestaurantsByZip(@PathVariable(value = "zipcode")Integer zipcode) {
        return gson.toJson(restaurants.findByZipcode(zipcode));
    }

}
