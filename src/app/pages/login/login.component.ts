import { Component } from '@angular/core';
import { CliserService } from '../../service/cliser.service';
import { UserService } from '../../service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {

  signIn:boolean = false

  email: string = '';
  name: string = '';

  cadastro ={
    name : '',
    email : '',
    phone :'',
  }

  constructor(private cliserService: CliserService, private userService: UserService, private router: Router) {}

  cadastrar(){
    this.signIn = !this.signIn
  }

  login() {
    this.cliserService.login(this.name, this.email).subscribe(response => {
      if (response.id) {
        this.userService.setUserId(response.id); // Armazena o ID no SessionStorage
        this.router.navigate(['/home']); // Redireciona para a tela principal
      }
    }, error => {
      alert("Erro ao fazer login")
      console.error("Erro ao fazer login", error);
    });
  }

  signUp(){
    this.cliserService.criarCliente(this.cadastro.name, this.cadastro.email,this.cadastro.phone)
    .subscribe(response => {
      alert('Usuario Criado Com Sucesso')
      this.signIn = false
      
    }, error => {
      alert("Erro ao fazer cadastro")
      console.error("Erro ao fazer cadastro", error);
    });
  }
}
