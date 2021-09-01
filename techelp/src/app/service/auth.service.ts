
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>("https://projetotechelp.herokuapp.com/usuario/logar", userLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>("https://projetotechelp.herokuapp.com/usuario/cadastrar", usuario)
  }
}
