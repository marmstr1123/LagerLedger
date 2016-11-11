package com.theironyard.controllers;
import com.theironyard.entities.Beer;
import com.theironyard.entities.User;
import com.theironyard.services.BeerRepository;
import com.theironyard.services.UserRepository;
import com.theironyard.utitilites.PasswordStorage;
import org.h2.tools.Server;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.servlet.http.HttpSession;
import java.sql.SQLException;

/**
 * Created by Troy on 11/11/16.
 */
@RestController
public class LagerLedgerController {
    @Autowired
    BeerRepository beers;

    @Autowired
    UserRepository users;

    Server h2;

    @PostConstruct
    public void init() throws SQLException, PasswordStorage.CannotPerformOperationException {
        h2 = Server.createWebServer().start();

        if (beers.count() == 0) {
            User user = new User ("Troy", PasswordStorage.createHash("pass123"));
            users.save(user);

            Beer beer = new Beer("Guinness","http://www.thebeersnob.com/wp-content/uploads/2010/01/guinness.jpg?w=152","Ireland","Creamy, full body and low carbonation.",4,true,user);
            Beer beer1 = new Beer("Blue Moon","http://unitedliquormarts.webologize.com/wp-content/uploads/2015/04/blue-moon-pale-ale.jpg","Golden, Colorado","Taste is wheaty and citrus",3,true,user);
            beers.save(beer);
            beers.save(beer1);
        }
    }

    @PreDestroy
    public void destroy() {
        h2.stop();
    }

    @RequestMapping(path = "/user",method = RequestMethod.POST)
    public User postUser(HttpSession session, @RequestBody User user) throws Exception {
        User userFromDb = users.findFirstByUser(user.getUser());
        if (userFromDb == null) {
            user.setPassword(PasswordStorage.createHash(user.getPassword()));
            users.save(user);
        }
        else if (!PasswordStorage.verifyPassword(user.getPassword(), userFromDb.getPassword())) {
            throw new Exception("Invalid Password");
        }

        session.setAttribute("user", user.getUser());
        return user;
    }

    @RequestMapping(path = "/user",method = RequestMethod.GET)
    public User getUser(HttpSession session) {
        String username = (String) session.getAttribute("user");
        return users.findFirstByUser(username);
    }

    @RequestMapping(path = "/beers",method = RequestMethod.POST)
    public void postBeer(HttpSession session, @RequestBody Beer beer) throws Exception {
        String username = (String) session.getAttribute("user");
        if (username == null) {
            throw new Exception("Invalid user");
        }
        beer.setUser(users.findFirstByUser(username));
        beers.save(beer);
    }

    @RequestMapping(path = "/beers",method = RequestMethod.GET)
    public Iterable<Beer> getBeers() {
        return beers.findAll();
    }
}
