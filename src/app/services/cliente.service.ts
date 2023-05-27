import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Cliente> {
    return this.http.get<Cliente>(`${API_CONFIG.baseUrl}/clientes/${id}`);

  }

  // Observable<Cliente[]>  Retorna um array de clientes
  findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${API_CONFIG.baseUrl}/clientes`);
  }

  // Create
  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${API_CONFIG.baseUrl}/clientes`, cliente);
  };

  // Update
  update(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${API_CONFIG.baseUrl}/clientes/${cliente.id}`, cliente);
  };

  // Delete
  delete( id: any): Observable<Cliente> {
    return this.http.delete<Cliente>(`${API_CONFIG.baseUrl}/clientes/${id}`);
  }

}
