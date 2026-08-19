package com.brott.portfoliotracker.controller;

import com.brott.portfoliotracker.model.dto.AccountCreationDTO;
import com.brott.portfoliotracker.model.dto.AccountDTO;
import com.brott.portfoliotracker.service.AccountService;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/accounts")
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8080"})
public class AccountController {

  private final AccountService accountService;

  public AccountController(AccountService accountService) {
    this.accountService = accountService;
  }

  @GetMapping("/")
  public List<AccountDTO> findAll() {
    return this.accountService.findAll();
  }

  @PostMapping("/")
  public AccountDTO createAccount(@Valid @RequestBody AccountCreationDTO dto) {
    return accountService.save(dto);
  }

  @GetMapping("/{accountId}")
  public AccountDTO getAccount(@PathVariable Long accountId) {
    return this.accountService.findById(accountId);
  }

  @PutMapping("/")
  public AccountDTO updateAccount(@Valid @RequestBody AccountCreationDTO dto) {
    return this.accountService.save(dto);
  }

  @DeleteMapping("/{accountId}")
  public void deleteAccount(@PathVariable Long accountId) {
    this.accountService.delete(accountId);
  }
}
