import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  // URL que obtiene el listado de todas las cuentas en backend
  private baseURL = "http://localhost:8080/cuentas";

  constructor(private httpClient: HttpClient) { }

  // Método para obtener todas las cuentas
  getAccounts():Observable<Account[]>{
    return this.httpClient.get<Account[]>(`${this.baseURL}`);
  }

  // Método para registrar una cuenta
  saveAccount(cuenta: Account) : Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, cuenta);

  }
  // Método para actualizar una cuenta
  updateAccount(id:number, cuenta:Account) : Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, cuenta);
  }

  // Método para buscar una cuenta por ID
  findById(id:number) : Observable<Account> {
    return this.httpClient.get<Account>(`${this.baseURL}/${id}`);
  }

  // Método para borrar una cuenta
  deleteAccount(id:number) : Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
