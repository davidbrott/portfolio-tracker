package com.brott.portfoliotracker.service;

import com.brott.portfoliotracker.model.dto.AccountCreationDTO;
import com.brott.portfoliotracker.model.dto.AccountDTO;
import com.brott.portfoliotracker.model.entity.Account;
import java.util.List;

public interface AccountService {

  AccountDTO save(AccountCreationDTO account);

  List<AccountDTO> findAll();

  AccountDTO findById(Long id);

  Account findEntityById(Long id);

  void delete(Long id);
}
