package com.demo.dao;

import com.demo.entities.Human;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HumanRepository extends JpaRepository<Human,Long> {
}
