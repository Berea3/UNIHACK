package com.demo.controller;

import com.demo.dao.AnimalRepository;
import com.demo.dao.HumanRepository;
import com.demo.entities.Animal;
import com.demo.entities.Human;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/human")
public class HumanController {

    private HumanRepository humanRepository;

    //CREATE
    @PostMapping("/create")
    public void create(@RequestBody Human human)
    {
        humanRepository.save(human);
    }


    //READ
    @GetMapping("/readbyid/{id}")
    public Optional<Human> readbyid(@PathVariable Long id)
    {
        return humanRepository.findById(id);
    }

    @GetMapping("/readall")
    public Iterable<Human> readall()
    {
        return humanRepository.findAll();
    }


    //UPDATE
    @PutMapping("/update")
    public void update(@RequestBody Human human)
    {
        humanRepository.save(human);
    }


    @DeleteMapping("/deletebyid/{id}")
    public void deletebyid(@PathVariable Long id)
    {
        humanRepository.deleteById(id);
    }
}
