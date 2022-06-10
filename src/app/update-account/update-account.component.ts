import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {

  id:number;
  cuenta:Account = new Account();
  constructor(private accountService:AccountService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.accountService.findById(this.id).subscribe(data =>{
      this.cuenta = data;
    },error => console.log(error));
  }

  goAccountsList(){
    this.router.navigate(['/cuentas']);
    swal.fire('Cuenta actualizada',`La cuenta ${this.cuenta.nombre} ha sido actualizado con éxito!`,`success`);
  }

  onSubmit(){
    this.accountService.updateAccount(this.id,this.cuenta).subscribe(data => {
      this.goAccountsList();
    },error => console.log(error));
  }

}

