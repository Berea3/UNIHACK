package com.demo.entities;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Human {
    @Id
    @GeneratedValue
    @Column(name="id")
    private int id;

    private double latitude;
    private double longitude;

    private boolean child;
    private String name;
    private int age;
    private String description;
    @ElementCollection
    private List<String> needs;

    public Human(){}

    public Human(int id, double latitude, double longitude, String name, int age, String description, List<String> needs, boolean child) {
        this.id = id;
        this.latitude = latitude;
        this.longitude = longitude;
        this.name = name;
        this.age = age;
        this.description = description;
        this.needs = needs;
        this.child=child;
    }

    public int getId() {return id;}
    public double getLatitude() {return latitude;}
    public double getLongitude() {return longitude;}
    public boolean getChild() {return this.child;}
    public String getName() {return name;}
    public int getAge() {return age;}
    public String getDescription() {return description;}
    public List<String> getNeeds() {return needs;}

    public void setId(int id) {this.id = id;}
    public void setLatitude(double latitude) {this.latitude = latitude;}
    public void setLongitude(double longitude) {this.longitude = longitude;}
    public void getChild(boolean child) {this.child=child;}
    public void setName(String name) {this.name = name;}
    public void setAge(int age) {this.age = age;}
    public void setDescription(String description) {this.description = description;}
    public void setNeeds(List<String> needs) {this.needs = needs;}
}
