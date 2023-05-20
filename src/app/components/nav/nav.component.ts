import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',  // Padrão de nomenclatura
  templateUrl: './nav.component.html', // Referência ao arquivo HTML
  styleUrls: ['./nav.component.css'] // Referência ao arquivo CSS
})

export class NavComponent implements OnInit {

  // Contrutor (Quando for construído)
  constructor(private router: Router,
              private authService: AuthService
             ) { }

  // Na inicialização do componente.
  ngOnInit(): void {
    this.router.navigate(['home'])
  }

  // Função de logout no sistema.
  logout(){
    this.router.navigate(['login']);
    this.authService.logout();
  };

}
