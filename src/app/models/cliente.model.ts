import { Horario } from "./horarios.model";

export interface Cliente{
    id: number,
    name: string,
    email: string,
    phone: string,
    schedules: Horario[]
}