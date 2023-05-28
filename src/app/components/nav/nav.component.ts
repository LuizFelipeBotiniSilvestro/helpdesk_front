// Imports
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',  // Padrão de nomenclatura
  templateUrl: './nav.component.html', // Referência ao arquivo HTML
  styleUrls: ['./nav.component.css'] // Referência ao arquivo CSS
})

export class NavComponent implements OnInit {

  // Construtor
  constructor(private router: Router,
              private authService: AuthService,
              private toast: ToastrService,
             ) { }

  // Quando iniciar o sistema vai para página home.
  ngOnInit(): void {
    this.router.navigate(['home'])
  }

  // Função de logout no sistema.
  logout(){
    this.router.navigate(['login']);
    this.authService.logout();
    this.toast.info('Logout realizado com sucesso!', 'Logout');
  };

}
