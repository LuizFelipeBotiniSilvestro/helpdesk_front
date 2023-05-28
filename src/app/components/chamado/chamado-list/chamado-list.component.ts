import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Chamado } from 'src/app/models/chamado';
import { ChamadoService } from 'src/app/services/chamado.service';

@Component({
  selector: 'app-chamado-list',
  templateUrl: './chamado-list.component.html',
  styleUrls: ['./chamado-list.component.css']
})
export class ChamadoListComponent implements OnInit {

  ELEMENT_DATA: Chamado[] = [];
  FILTERED_DATA: Chamado[] = []; 

  displayedColumns: string[] = ['id', 'titulo', 'cliente', 'tecnico', 'dataAbertura', 'prioridade', 'status', 'acoes'];
  dataSource = new MatTableDataSource<Chamado>(this.ELEMENT_DATA); // this. "Fazendo referência"

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private service: ChamadoService
  ) { }

  // Ao iniciar o componente
  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe(resposta => {
      // Pega o valor da resposta e coloca na lista de chamados
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Chamado>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }

  // Método de busca.
  applyFilter(event: Event) {

    // Cria uma const e pega o valor que está sendo digitado.
    const filterValue = (event.target as HTMLInputElement).value;

    // Filtro
    this.dataSource.filter = filterValue.trim().toLowerCase();
  };

  retornaStatus(status: any): string {
    if (status == '0'){
      return 'ABERTO';
    } else if (status == '1'){
      return 'EM ANDAMENTO';
    }else {
      return 'ENCERRADO';
    };
  };

  retornaPrioridade(prioridade: any): string {
    if (prioridade == '0'){
      return 'BAIXA';
    } else if (prioridade == '1'){
      return 'MÉDIA';
    }else {
      return 'ALTA';
    };
  };

  orderByStatus( status: any): void {
    
    // Cria um array.
    let list: Chamado[] = [];

    this.ELEMENT_DATA.forEach(element => {
      if (element.status == status)
        list.push(element);
    });

    this.FILTERED_DATA = list;

    this.dataSource = new MatTableDataSource<Chamado>(list);
    this.dataSource.paginator = this.paginator;
  };

}
