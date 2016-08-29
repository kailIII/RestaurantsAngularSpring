package com.theironyard.charlotte.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by charlesrath on 8/29/16.
 */
@Controller
public class RestaurantController {

    @RequestMapping(path = "/", method = RequestMethod.GET)
    public String home(Model model) {
        return "home";
    }
}
