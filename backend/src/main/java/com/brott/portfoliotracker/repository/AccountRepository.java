package com.brott.portfoliotracker.repository;

import com.brott.portfoliotracker.model.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Long> {}
