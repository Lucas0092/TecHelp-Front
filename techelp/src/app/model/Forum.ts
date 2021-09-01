import { Resposta } from "./Resposta"
import { Usuario } from "./Usuario"

export class Forum{
    public id: number
    public imagem: string
    public titulo: string
    public publicacao: string
    public usuario: Usuario
    public resposta: Resposta[]
}