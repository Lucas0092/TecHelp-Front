import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagem{
    public id: number
    public curso: string
    public nivel: string
    public descricao: string
    public link: string
    public imagem: string
    public usuario: Usuario
    public tema: Tema
}