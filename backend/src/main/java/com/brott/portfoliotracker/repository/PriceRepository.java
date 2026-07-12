package com.brott.portfoliotracker.repository;

import com.brott.portfoliotracker.model.entity.Price;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PriceRepository extends JpaRepository<Price, Long> {

  @Query("select p from Price p where p.asset.id = ?1")
  List<Price> findByAssetId(Long id);
}
