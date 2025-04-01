export interface Horario{
    id: number,
    startAt: string,
    endAt: string,
    client: {
        name: string,
        email: string,
        phone: string
    }
}