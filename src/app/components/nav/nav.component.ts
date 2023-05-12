import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',  // Padrão de nomenclatura
  templateUrl: './nav.component.html', // Referência ao arquivo HTML
  styleUrls: ['./nav.component.css'] // Referência ao arquivo CSS
})

export class NavComponent implements OnInit {

  // Contrutor (Quando for construído)
  constructor(private router: Router) { }

  // Na inicialização do componente.
  ngOnInit(): void {
    this.router.navigate(['home'])
  }

}
