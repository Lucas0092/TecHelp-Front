import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-novos-cursos',
  templateUrl: './novos-cursos.component.html',
  styleUrls: ['./novos-cursos.component.css']
})
export class NovosCursosComponent implements OnInit {


  listaPostagem: Postagem[]

  key = 'data'
  reverse = true

  
  constructor(public authService : AuthService,
    private router: Router,
    private postagemService: PostagemService) { }

  ngOnInit(): void {
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }
    this.getAllPostagens()
  }

  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagem = resp
    })
  }

}
