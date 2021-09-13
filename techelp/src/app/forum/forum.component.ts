import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Forum } from '../model/Forum';
import { Resposta } from '../model/Resposta';
import { ForumService } from '../service/forum.service';
import { RespostaService } from '../service/resposta.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  forum: Forum = new Forum()
  listaForum: Forum[]
  idForum: number

  mostrar = false

  resposta: Resposta = new Resposta
  listaResposta: Resposta[]


  constructor(
    private router: Router,
    private forumService: ForumService,
    private respostaService: RespostaService
  ) { }

  ngOnInit() {

    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }

    this.findAllForum()
    this.getAllResposta()

  }


  findAllForum() {
    this.forumService.getAllForum().subscribe((resp: Forum[]) => {
      this.listaForum = resp
    })
  }

  publicar() {
    this.forumService.postForum(this.forum).subscribe((resp: Forum) => {
      this.forum = resp
      alert('publicado com sucesso')
      this.forum = new Forum()
      this.findAllForum()
    })
  }

  findByIdForum() {
    this.forumService.getByIdForum(this.idForum).subscribe((resp: Forum) => {
      this.forum = resp
      console.log(this.forum)
    })
  }

  getAllResposta() {
    this.respostaService.getAllResposta().subscribe((resp: Resposta[]) => {
      this.listaResposta = resp
    })
  }

}
