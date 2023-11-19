package com.demo.entities;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Animal {
    @Id
    @GeneratedValue
    @Column(name="id")
    private int id;

    private double latitude;
    private double longitude;

    private String type;
    private String description;
    @ElementCollection
    private List<String> needs;

    public Animal(){}

    public Animal(int id, double latitude, double longitude, String type, String description, List<String> needs) {
        this.id = id;
        this.latitude = latitude;
        this.longitude = longitude;
        this.type = type;
        this.description = description;
        this.needs = needs;
    }

    public int getId() {
        return id;
    }

    public double getLatitude() {
        return latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public String getType() {
        return type;
    }

    public String getDescription() {
        return description;
    }

    public List<String> getNeeds() {
        return needs;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setNeeds(List<String> needs) {
        this.needs = needs;
    }
}
