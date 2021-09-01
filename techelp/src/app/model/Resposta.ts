import { Forum } from "./Forum"
import { Usuario } from "./Usuario"

export class Resposta{
    public id: number
    public imagem: string
    public comentario: string
    public usuario: Usuario
    public forum: Forum
}