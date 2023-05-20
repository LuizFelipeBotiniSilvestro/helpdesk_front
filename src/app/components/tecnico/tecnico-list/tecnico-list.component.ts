import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tecnico } from 'src/app/models/tecnico';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
export class TecnicoListComponent implements OnInit {

    
  constructor() { }
  
  ELEMENT_DATA: Tecnico[] = [
    {
      id: 1,
      nome: 'Luiz Felipe',
      cpf: '117.655.499-90',
      email: 'email@email.com',
      senha: '1234',
      perfis: ['0'],
      dataCriacao: '18/05/2023'
    }
  ];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', "acoes"];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA); // this. "Fazendo referência"

  ngOnInit(): void {
  }


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
