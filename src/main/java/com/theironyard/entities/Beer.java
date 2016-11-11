package com.theironyard.entities;

import javax.persistence.*;

/**
 * Created by Troy on 11/11/16.
 */
@Entity
@Table(name = "beers")
public class Beer {

    @Id
    @GeneratedValue
    int id;

    @Column(nullable = false)
    String name;

    @Column(nullable = false)
    String image;

    @Column(nullable = false)
    String origin;

    @Column(nullable = false)
    String opinion;

    @Column(nullable = false)
    int rating;

    @Column(nullable = false)
    boolean haveAnother;

    @ManyToOne
    User user;

    public Beer() {
    }

    public Beer(String name, String image, String origin, String opinion, int rating, boolean haveAnother, User user) {
        this.name = name;
        this.image = image;
        this.origin = origin;
        this.opinion = opinion;
        this.rating = rating;
        this.haveAnother = haveAnother;
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public String getOpinion() {
        return opinion;
    }

    public void setOpinion(String opinion) {
        this.opinion = opinion;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public boolean isHaveAnother() {
        return haveAnother;
    }

    public void setHaveAnother(boolean haveAnother) {
        this.haveAnother = haveAnother;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
