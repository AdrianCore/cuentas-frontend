import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.css']
})
export class RegisterAccountComponent implements OnInit {

  cuenta : Account = new Account();

  constructor(private accountService:AccountService, private router:Router) { }

  ngOnInit(): void {
  }

  saveAccount() {
    this.accountService.saveAccount(this.cuenta).subscribe(data => {
      console.log(data);
      this.goAccountsList();
    },error => console.log(error));
  }

  goAccountsList() {
    this.router.navigate(["/cuentas"]);
  }

  onSubmit() {
    this.saveAccount();
  }

}
