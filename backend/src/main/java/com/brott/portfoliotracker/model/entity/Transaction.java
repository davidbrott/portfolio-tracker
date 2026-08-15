package com.brott.portfoliotracker.model.entity;

import com.brott.portfoliotracker.model.TransactionType;
import jakarta.annotation.Nullable;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.math.BigDecimal;
import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "transactions")
public class Transaction {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private LocalDate bookingDate;

  @Enumerated(EnumType.STRING)
  private TransactionType type;

  @ManyToOne
  private Account fromAccount;

  @ManyToOne
  @Nullable
  private Account toAccount;

  @ManyToOne
  @Nullable
  private Asset asset;

  private BigDecimal amount;

  private BigDecimal quantity;

  private BigDecimal unitPrice;

  private BigDecimal fees;

  private BigDecimal taxes;

  private String note;
}