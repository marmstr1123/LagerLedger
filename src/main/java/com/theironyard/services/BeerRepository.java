package com.theironyard.services;

import com.theironyard.entities.Beer;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Troy on 11/11/16.
 */
public interface BeerRepository extends CrudRepository<Beer,Integer> {
}
