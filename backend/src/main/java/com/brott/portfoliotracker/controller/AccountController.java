package com.brott.portfoliotracker.controller;

import com.brott.portfoliotracker.model.dto.AccountCreationDTO;
import com.brott.portfoliotracker.model.dto.AccountDTO;
import com.brott.portfoliotracker.service.AccountService;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * REST controller for managing accounts. Provides endpoints for creating retrieving, updating and
 * deleting accounts.
 */
@RestController
@RequestMapping("/api/accounts")
public class AccountController {

  private final AccountService accountService;

  public AccountController(AccountService accountService) {
    this.accountService = accountService;
  }

  /**
   * Retrieves all accounts.
   *
   * @return a list of {@link AccountDTO} objects
   */
  @GetMapping("/")
  public List<AccountDTO> findAll() {
    return this.accountService.findAll();
  }

  /**
   * Creates a new account.
   *
   * @param dto the {@link AccountCreationDTO} object containing the account data
   * @return the {@link AccountDTO} representing the created account
   */
  @PostMapping("/")
  public AccountDTO createAccount(@Valid @RequestBody AccountCreationDTO dto) {
    return accountService.save(dto);
  }

  /**
   * Retrieves a {@link AccountDTO} object by its ID.
   *
   * @param accountId the ID of the {@link AccountDTO}
   * @return the {@link AccountDTO} representing the account
   */
  @GetMapping("/{accountId}")
  public AccountDTO getAccount(@PathVariable Long accountId) {
    return this.accountService.findById(accountId);
  }

  /**
   * Updates an existing account.
   *
   * @param dto the {@link AccountCreationDTO} object containing the updated account data
   * @return the {@link AccountDTO} representing the updated account
   */
  @PutMapping("/")
  public AccountDTO updateAccount(@Valid @RequestBody AccountCreationDTO dto) {
    return this.accountService.save(dto);
  }

  /**
   * Deletes and account by its ID.
   *
   * @param accountId the ID of the account to delete
   */
  @DeleteMapping("/{accountId}")
  public void deleteAccount(@PathVariable Long accountId) {
    this.accountService.delete(accountId);
  }
}
