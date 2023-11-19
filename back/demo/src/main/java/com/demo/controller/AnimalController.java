package com.demo.controller;

import com.demo.dao.AnimalRepository;
import com.demo.entities.Animal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/animal")
public class AnimalController {

    @Autowired
    private AnimalRepository animalRepository;

    //CREATE
    @PostMapping("/create")
    public void create(@RequestBody Animal animal)
    {
//        System.out.println(animal.());
        animalRepository.save(animal);
    }


    //READ
    @GetMapping("/readbyid/{id}")
    public Optional<Animal> readbyid(@PathVariable Long id)
    {
        return animalRepository.findById(id);
    }

    @GetMapping("/readall")
    public Iterable<Animal> readall()
    {
        return animalRepository.findAll();
    }


    //UPDATE
    @PutMapping("/update")
    public void update(@RequestBody Animal animal)
    {
        animalRepository.save(animal);
    }


    @DeleteMapping("/deletebyid/{id}")
    public void deletebyid(@PathVariable Long id)
    {
        animalRepository.deleteById(id);
    }
}
