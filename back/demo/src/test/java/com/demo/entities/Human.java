package com.demo.entities;

import com.fasterxml.jackson.annotation.JsonTypeId;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import javax.annotation.processing.Generated;

@Entity
public class Human {

    @Id
    @GeneratedValue
    @Column(name="id")
    private Long id;
}
