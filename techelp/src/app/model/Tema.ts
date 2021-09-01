import { Postagem } from "./Postagem"

export class Tema{
    public id: number
    public tipo: string
    public postagens: Postagem[]
}