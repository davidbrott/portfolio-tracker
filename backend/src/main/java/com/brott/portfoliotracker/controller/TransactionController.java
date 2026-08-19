package com.brott.portfoliotracker.controller;

import com.brott.portfoliotracker.model.dto.TransactionCreationDTO;
import com.brott.portfoliotracker.model.dto.TransactionDTO;
import com.brott.portfoliotracker.service.TransactionService;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/transactions")
public class TransactionController {

  private final TransactionService transactionService;

  public TransactionController(TransactionService transactionService) {
    this.transactionService = transactionService;
  }

  @GetMapping("/")
  public List<TransactionDTO> findAll() {
    return this.transactionService.findAll();
  }

  @PostMapping("/")
  public TransactionDTO createTransaction(@Valid @RequestBody TransactionCreationDTO dto) {
    return transactionService.save(dto);
  }
}
