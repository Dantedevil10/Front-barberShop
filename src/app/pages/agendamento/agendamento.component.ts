import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user-service.service';
import { CliserService } from '../../service/cliser.service';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.sass']
})
export class AgendamentoComponent implements OnInit {

  id!: number;
  user: Cliente | null = null;
  horarioIndisponivel: boolean = false;
  dataSelecionada: string = '';
  horaSelecionada: string = '';

  constructor(private userService: UserService, private service: CliserService) {}

  ngOnInit() {
    this.id = this.userService.getUserId() || 0;

    if (this.id === 0) {
      console.error('ID do usuário não encontrado.');
    } else {
      this.pegarUser(this.id);
    }
  }

  pegarUser(id: number) {
    this.service.pegarDadosDoCliente(id).subscribe(user => this.user = user);
  }

  verificarHorario(): boolean {
    if (!this.user || !this.dataSelecionada || !this.horaSelecionada) return false;
    const novoHorario = new Date(`${this.dataSelecionada}T${this.horaSelecionada}:00Z`).toISOString();
    return this.user.schedules.some(horario => horario.startAt === novoHorario);
  }

  marcarHorario() {
    if (!this.dataSelecionada || !this.horaSelecionada) {
      alert('Selecione uma data e hora.');
      return;
    }
  
    if (this.verificarHorario()) {
      this.horarioIndisponivel = true;
      return;
    }
  
    // Criar a data corretamente com fuso horário UTC
    const startAt = new Date(`${this.dataSelecionada}T${this.horaSelecionada}:00Z`).toISOString(); // Formato correto
    const endAt = new Date(new Date(startAt).getTime() + 60 * 60000).toISOString(); // Adiciona 1 hora (60 min) no final
  
    const agendamento = {
      clienteId: this.id,
      startAt: startAt, // formato ISO 8601: "2025-04-01T10:00:00Z"
      endAt: endAt     // formato ISO 8601: "2025-04-01T11:00:00Z"
    };
  
    // console.log("Agendamento enviado:", agendamento); // Debug
  
    this.service.marcarHorario(agendamento).subscribe(
      () => {
        alert('Horário marcado com sucesso!');
        this.pegarUser(this.id);
        this.horarioIndisponivel = false;
      },
      (error) => {
        console.error('Erro ao marcar horário:', error);
        alert('Erro ao marcar horário. Tente novamente.');
      }
    );
  }
  
  
}
