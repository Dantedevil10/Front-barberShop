import { Component, OnInit } from '@angular/core';
import { CliserService } from '../../service/cliser.service';
import { Cliente } from '../../models/cliente.model';
import { UserService } from '../../service/user-service.service'; 

@Component({
  selector: 'app-principalscreen',
  templateUrl: './principalscreen.component.html',
  styleUrl: './principalscreen.component.sass'
})
export class PrincipalscreenComponent implements OnInit{

  id!: number; // ID inicial padrão
  user: Cliente | null = null;

  constructor(private service: CliserService, private userService: UserService) {}

  ngOnInit() {
    this.id = this.userService.getUserId() || 0;
    
    if (this.id !== 0) {
      this.pegarUser(this.id);
    } else {
      alert("Nenhum Usuario Encontrado")
      console.error('Nenhum ID de usuário encontrado.');
    }

  }

  pegarUser(id: number) {
    this.service.pegarDadosDoCliente(id).subscribe(user => this.user = user);
  }

  agendarHorario() {
    this.userService.setUserId(this.id); // Salva o ID no SessionStorage
  }
  excluiHorario(horaId: number) {
    this.service.excluirHorario(horaId).subscribe(
      () => {
        // Após a exclusão, atualizar a lista de horários sem recarregar a página
        this.user?.schedules.filter(horario => horario.id !== horaId);
        alert('Horário excluído com sucesso!');
        window.location.reload();
      },
      error => {
        console.error('Erro ao excluir horário:', error);
        alert('Erro ao excluir horário. Tente novamente.');
      }
    );
  }
  


}
