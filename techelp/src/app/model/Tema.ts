import { Postagem } from "./Postagem"

export class Tema{
    public id: number
    public tipo: string
    public imagem: string
    public descricao: string
    public postagens: Postagem[]
}