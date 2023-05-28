import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Chamado } from 'src/app/models/chamado';

@Component({
  selector: 'app-chamado-list',
  templateUrl: './chamado-list.component.html',
  styleUrls: ['./chamado-list.component.css']
})
export class ChamadoListComponent implements OnInit {

  ELEMENT_DATA: Chamado[] = [
    {
      id              : 1,
      dataAbertura    : '27/05/2023',
      dataFechamento  : '27/05/2023',
      prioridade      : 'ALTA',
      status          : 'ANDAMENTO',
      titulo          : 'Chamado 1',
      descricao       : 'Teste chamado 1',
      tecnico         : 1,
      cliente         : 1,
      nomeCliente     : 'Luiz',
      nomeTecnico     : 'Gabriel',
    }
  ];
  displayedColumns: string[] = ['id', 'titulo', 'cliente', 'tecnico', 'dataAbertura', 'prioridade', 'status', 'acoes'];
  dataSource = new MatTableDataSource<Chamado>(this.ELEMENT_DATA); // this. "Fazendo referência"

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
  }

  // Método de busca.
  applyFilter(event: Event) {

    // Cria uma const e pega o valor que está sendo digitado.
    const filterValue = (event.target as HTMLInputElement).value;

    // Filtro
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
