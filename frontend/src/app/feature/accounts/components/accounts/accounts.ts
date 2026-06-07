import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, inject, OnInit, viewChild, ViewContainerRef } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Observable } from 'rxjs';
import { Account } from '../../model/account.model';
import { AsyncPipe } from '@angular/common';
import { Modal } from 'bootstrap';
import { AccountModal } from '../account-modal/account-modal';

@Component({
  selector: 'app-accounts',
  imports: [AsyncPipe],
  templateUrl: './accounts.html',
  styleUrl: './accounts.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Accounts implements OnInit {
  
  private viewContainer = viewChild.required('newAccountModal', { read: ViewContainerRef });
   private cdRef = inject(ChangeDetectorRef);
  


  private accountService = inject(AccountService);

  allAccounts$!: Observable<Account[]>

  ngOnInit(): void {
    this.allAccounts$ = this.accountService.getAllAccounts();
  }

  openModal(): void {
      const modal = this.viewContainer().createComponent(AccountModal);
      modal.instance.show(); 
      this.cdRef.detectChanges();   
  }
}
