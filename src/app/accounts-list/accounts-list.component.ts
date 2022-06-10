import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent implements OnInit {

  cuentas:Account[];

  constructor(private accountService:AccountService, private router:Router) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  private getAccounts() {
    this.accountService.getAccounts().subscribe(data => {
      this.cuentas = data
    });
  }

  showAccount(id:number) {
    this.router.navigate(["cuentas", id, "detalles"]);
  }

  updateAccount(id:number) {
    this.router.navigate(['cuentas', id]);
  }

  deleteAccount(id:number) {
    this.accountService.deleteAccount(id).subscribe(data => {
      console.log(data);
      this.getAccounts();
    })
  }

}
