import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente.model';
import { Observable } from 'rxjs';
import { Horario } from '../models/horarios.model';

@Injectable({
  providedIn: 'root'
})
export class CliserService {

  loginURL = 'http://localhost:8080/auth/login';
  userURL = 'http://localhost:8080/user';
  horarioURL = 'http://localhost:8080/horario';

  constructor(private http : HttpClient) { }

  login(name: string, email: string): Observable<Partial<Cliente>> {
    return this.http.post<Partial<Cliente>>(this.loginURL, { name, email });
  }

  criarCliente(name:string ,email:string ,phone:string): Observable<Partial<Cliente>>{
    return this.http.post<Partial<Cliente>>(`${this.userURL}/save`, { name, email ,phone});
  }
  editarCliente(id:number ,name:string ,email:string ,phone:string): Observable<Partial<Cliente>>{
    return this.http.put<Partial<Cliente>>(`${this.userURL}/edit/${id}`, { name, email ,phone});
  }
  deletarCliente(id:number): Observable<Partial<Cliente>>{
    return this.http.delete<Partial<Cliente>>(`${this.userURL}/delete/${id}`);
  }
  pegarDadosDoCliente(id:number): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.userURL}/${id}`);
  }

  // marcarHorario(clienteId:number ,startAt:string ,endtAt:string): Observable<Partial<Horario>>{
  //   return this.http.post<Partial<Horario>>(`${this.horarioURL}/marcar`, {clienteId,startAt,endtAt});
  // }
  marcarHorario(agendamento: { clienteId: number; startAt: string; endAt: string }): Observable<Partial<Horario>> {
    return this.http.post<Partial<Horario>>(`${this.horarioURL}/marcar`, agendamento);
  }
  editarHorario(horarioId:number ,clienteId:number ,startAt:string ,endtAt:string): Observable<Partial<Horario>>{
    return this.http.put<Partial<Horario>>(`${this.horarioURL}/editar/${horarioId}`, {clienteId,startAt,endtAt});
  }
  excluirHorario(horarioId:number): Observable<Partial<Horario>>{
    return this.http.delete<Partial<Horario>>(`${this.horarioURL}/excluir/${horarioId}`);
  }



}
