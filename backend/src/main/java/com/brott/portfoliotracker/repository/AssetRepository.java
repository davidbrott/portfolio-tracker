package com.brott.portfoliotracker.repository;

import com.brott.portfoliotracker.model.entity.Asset;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AssetRepository extends JpaRepository<Asset, Long> {

}
