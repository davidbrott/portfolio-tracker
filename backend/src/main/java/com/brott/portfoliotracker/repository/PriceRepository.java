package com.brott.portfoliotracker.repository;

import com.brott.portfoliotracker.model.entity.Price;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PriceRepository extends JpaRepository<Price, Long> {

}
