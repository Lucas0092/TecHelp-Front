import { Forum } from "./Forum"
import { Postagem } from "./Postagem"
import { Resposta } from "./Resposta"

export class Usuario{
    public id: number
    public nomeCompleto: string
    public email: string
    public senha: string
    public foto: string
    public tipo: string
    public postagens: Postagem[]
    public forum: Forum[]
    public resposta: Resposta[]
}