import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto
  id = environment.id

  curso: string

  constructor(
    private router: Router,
    public postagemService: PostagemService
  ) { }

  ngOnInit() {
  }

  forum(){
    this.router.navigate(["/forum"])
  }

  sair(){
    this.router.navigate(["/entrar"])
    environment.token = ""
    environment.nome = ""
    environment.foto = ""
    environment.id = 0
  }
  
  definirCurso(event: any) {
    this.curso = event.target.value
  }

}
