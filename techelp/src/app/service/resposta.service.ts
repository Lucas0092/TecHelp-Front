import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Resposta } from '../model/Resposta';

@Injectable({
  providedIn: 'root'
})
export class RespostaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllResposta(): Observable<Resposta[]>{
    return this.http.get<Resposta[]>('https://projetotechelp.herokuapp.com/resposta', this.token)
  }

  getByIdResposta(id: number): Observable<Resposta>{
    return this.http.get<Resposta>(`https://projetotechelp.herokuapp.com/resposta/${id}`, this.token)
  }

  getByComentarioResposta(comentario: string): Observable<Resposta>{
    return this.http.get<Resposta>(`https://projetotechelp.herokuapp.com/resposta/comentario/${comentario}`, this.token)
  }

  getByImagemResposta(imagem: string): Observable<Resposta>{
    return this.http.get<Resposta>(`https://projetotechelp.herokuapp.com/resposta/imagem/${imagem}`, this.token)
  }

  postResposta(resposta: Resposta): Observable<Resposta>{
    return this.http.post<Resposta>('https://projetotechelp.herokuapp.com/resposta', resposta, this.token)
  }

  putResposta(resposta: Resposta): Observable<Resposta>{
    return this.http.put<Resposta>('https://projetotechelp.herokuapp.com/resposta', resposta, this.token)
  }

  deleteById(id: number){
    return this.http.delete<Resposta>(`https://projetotechelp.herokuapp.com/resposta/${id}`, this.token)
  }

}
