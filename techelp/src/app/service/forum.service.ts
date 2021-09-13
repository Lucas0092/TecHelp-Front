import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Forum } from '../model/Forum';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private Http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllForum(): Observable<Forum[]> {
    return this.Http.get<Forum[]>('https://projetotechelp.herokuapp.com/forum', this.token)
  }

  getByIdForum(id: number): Observable<Forum> {
    return this.Http.get<Forum>(`https://projetotechelp.herokuapp.com/forum/${id}`, this.token)
  }

  getByImagemForum(imagem: string): Observable<Forum> {
    return this.Http.get<Forum>(`https://projetotechelp.herokuapp.com/forum/imagem/${imagem}`, this.token)
  }

  getByPublicacaoForum(publicacao: string): Observable<Forum> {
    return this.Http.get<Forum>(`https://projetotechelp.herokuapp.com/forum/publicacao/${publicacao}`, this.token)
  }

  getByTituloForum(titulo: string): Observable<Forum> {
    return this.Http.get<Forum>(`https://projetotechelp.herokuapp.com/forum/titulo/${titulo}`, this.token)
  }

  postForum(forum: Forum): Observable<Forum> {
    return this.Http.post<Forum>('https://projetotechelp.herokuapp.com/forum', forum, this.token)
  }

  putForum(forum: Forum): Observable<Forum> {
    return this.Http.put<Forum>('https://projetotechelp.herokuapp.com/forum', forum, this.token)
  }

  deleteByIdForum(id: number){
    return this.Http.delete(`https://projetotechelp.herokuapp.com/forum/${id}`, this.token)
  }

}
