package com.theironyard.controllers;
import com.theironyard.entities.Beer;
import com.theironyard.entities.User;
import com.theironyard.services.BeerRepository;
import com.theironyard.services.UserRepository;
import com.theironyard.utitilites.PasswordStorage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;

/**
 * Created by Troy on 11/11/16.
 */
@RestController
public class LagerLedgerController {
    @Autowired
    BeerRepository beers;

    @Autowired
    UserRepository users;

    @PostConstruct
    public void init() {
    }

    //Thanks Zach
    @RequestMapping(path = "/user",method = RequestMethod.POST)
    public ResponseEntity<User> postUser(HttpSession session, @RequestBody User user) throws PasswordStorage.InvalidHashException, PasswordStorage.CannotPerformOperationException {
        User userFromDb = users.findFirstByName(user.getUsername());
        if (userFromDb == null) {
            user.setPassword(PasswordStorage.createHash(user.getPassword()));
            users.save(user);
        }
        else if (!PasswordStorage.verifyPassword(user.getPassword(), userFromDb.getPassword())) {
            return new ResponseEntity<User>(HttpStatus.FORBIDDEN);
        }

        session.setAttribute("username", user.getUsername());
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @RequestMapping(path = "/user",method = RequestMethod.GET)
    public User getUser(HttpSession session) {
        String username = (String) session.getAttribute("username");
        return users.findFirstByName(username);
    }

    @RequestMapping(path = "/beers",method = RequestMethod.POST)
    public ResponseEntity<Beer> postBeer(HttpSession session, @RequestBody Beer beer) {
        String username = (String) session.getAttribute("username");
        if (username == null) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        beer.setUser(users.findFirstByName(username));
        return new ResponseEntity<>(beers.save(beer),HttpStatus.CREATED);
    }

    @RequestMapping(path = "/beers",method = RequestMethod.GET)
    public Iterable<Beer> getBeers() {
        return beers.findAll();
    }
}
