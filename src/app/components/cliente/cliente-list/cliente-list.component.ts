import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  ELEMENT_DATA: Cliente[] = [];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', "acoes"];
  dataSource = new MatTableDataSource<Cliente>(this.ELEMENT_DATA); // this. "Fazendo referência"

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(
    private service: ClienteService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }


  findAll() {
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Cliente>(resposta); // this. "Fazendo referência"
      this.dataSource.paginator = this.paginator;
    });
  }

  // Método de busca.
  applyFilter(event: Event) {

    // Cria uma const e pega o valor que está sendo digitado.
    const filterValue = (event.target as HTMLInputElement).value;

    // Filtro
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
