import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/credenciais';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds: Credenciais = {
    email: '',
    senha: ''
  };

  // Valida se é um formato email
  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));

  constructor(private toast: ToastrService) { 
  }

  ngOnInit(): void {
  }

  logar() {
    this.toast.error('usuário e/ou senha inválidos!', 'Login');
    
    // Senha recebe vazio
    this.creds.senha = '';
  }

  validaCampos(): boolean {
    if (this.email.valid && this.senha.valid){
      return true;
    } else {
      return false;
    };
  };
};
