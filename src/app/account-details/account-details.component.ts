import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  id:number;
  cuenta:Account;

  constructor(private route:ActivatedRoute, private accountService:AccountService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this. cuenta = new Account();
    this.accountService.findById(this.id).subscribe(data => {
      this.cuenta = data;
    })
  }

}
