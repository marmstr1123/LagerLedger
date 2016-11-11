package com.theironyard.services;

import com.theironyard.entities.User;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Troy on 11/11/16.
 */
public interface UserRepository extends CrudRepository<User,Integer> {
    User findFirstByUser(String user);
}
